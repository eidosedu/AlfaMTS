/* ============================================================================
   ALFAMTS - MOTOR ISOLADO DE ANIMAÇÕES E FÍSICA (animations.js)
   API: window.AlfaAnimations
   ============================================================================ */
(function () {
    'use strict';

    const prefersReducedMotion = () =>
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let audioWaveTimer = null;
    let holdSlideRaf = null;
    let holdSlideState = { active: false, dir: 1, lastTs: 0 };

    function getCoinLayer() {
        let layer = document.getElementById('alfa-coin-layer');
        if (!layer) {
            layer = document.createElement('div');
            layer.id = 'alfa-coin-layer';
            layer.className = 'alfa-coin-layer';
            document.body.appendChild(layer);
        }
        return layer;
    }

    function findVisibleTokenTarget() {
        const candidates = Array.from(document.querySelectorAll('.token-balance-pill'));
        for (const el of candidates) {
            const rect = el.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0 && el.offsetParent !== null) {
                return el;
            }
        }
        const resultModal = document.getElementById('modal-result');
        if (resultModal && resultModal.style.display === 'flex') {
            const banner = document.getElementById('result-streak-banner');
            if (banner) {
                const r = banner.getBoundingClientRect();
                if (r.width > 0 && r.height > 0) return banner;
            }
        }
        return null;
    }

    /* 1. MOEDA 3D + TRAJETÓRIA EM CURVA ATÉ O CONTADOR DE FICHAS */
    function playCoinReward(amount, onArrive = null) {
        const val = parseInt(amount, 10) || 0;
        if (val <= 0) {
            if (typeof onArrive === 'function') onArrive();
            return;
        }

        if (prefersReducedMotion()) {
            if (typeof onArrive === 'function') onArrive();
            const target = findVisibleTokenTarget();
            if (target) pulseTarget(target, 'token-impact-pulse');
            return;
        }

        const layer = getCoinLayer();
        const flyer = document.createElement('div');
        flyer.className = 'alfa-coin-flyer';
        flyer.innerHTML = `
            <div class="alfa-coin-body">
                <div class="alfa-coin-face front">
                    <span class="alfa-coin-val">+${val}</span>
                </div>
                <div class="alfa-coin-face back">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"/><path d="M12 6v2m0 8v2"/></svg>
                </div>
            </div>
        `;
        layer.appendChild(flyer);

        setTimeout(() => {
            const targetEl = findVisibleTokenTarget();
            const startX = window.innerWidth / 2;
            const startY = window.innerHeight / 2;

            let endX = startX;
            let endY = 38;
            if (targetEl) {
                const rect = targetEl.getBoundingClientRect();
                endX = rect.left + rect.width / 2;
                endY = rect.top + rect.height / 2;
            }

            const ctrlX = (startX + endX) / 2 + (endX >= startX ? -40 : 40);
            const ctrlY = Math.min(startY, endY) - 90;
            const duration = 560;
            const startTime = performance.now();

            function step(now) {
                const rawT = Math.min(1, (now - startTime) / duration);
                const t = rawT < 0.5
                    ? 4 * rawT * rawT * rawT
                    : 1 - Math.pow(-2 * rawT + 2, 3) / 2;

                const inv = 1 - t;
                const x = inv * inv * startX + 2 * inv * t * ctrlX + t * t * endX;
                const y = inv * inv * startY + 2 * inv * t * ctrlY + t * t * endY;
                const scale = 1 - 0.72 * t;
                const opacity = rawT > 0.84 ? Math.max(0, 1 - (rawT - 0.84) / 0.16) : 1;

                flyer.style.transform = `translate3d(${x - startX}px, ${y - startY}px, 0) scale(${scale})`;
                flyer.style.opacity = String(opacity);

                if (rawT < 1) {
                    requestAnimationFrame(step);
                } else {
                    flyer.remove();
                    if (typeof onArrive === 'function') onArrive();
                    const arriveTarget = findVisibleTokenTarget();
                    if (arriveTarget) {
                        pulseTarget(arriveTarget, 'token-impact-pulse');
                    }
                }
            }

            requestAnimationFrame(step);
        }, 760);
    }

    /* 2. FÍSICA REAL NA BOTTOM SHEET (ENTRADA, SAÍDA E ARRASTE COM DEDO/MOUSE) */
    function openBottomSheet(modalEl) {
        if (!modalEl) return;
        const sheet = modalEl.querySelector('.bottom-sheet-content');
        if (sheet) {
            sheet.classList.remove('sheet-dragging');
            sheet.style.transform = '';
        }
        modalEl.style.display = 'flex';
        void modalEl.offsetHeight;
        requestAnimationFrame(() => {
            modalEl.classList.add('sheet-open');
        });
    }

    function closeBottomSheet(modalEl, onClosed = null) {
        if (!modalEl) return;
        const sheet = modalEl.querySelector('.bottom-sheet-content');
        if (sheet) {
            sheet.classList.remove('sheet-dragging');
            sheet.style.transform = '';
        }
        modalEl.classList.remove('sheet-open');

        const waitMs = prefersReducedMotion() ? 10 : 270;
        setTimeout(() => {
            if (!modalEl.classList.contains('sheet-open')) {
                modalEl.style.display = 'none';
                if (typeof onClosed === 'function') onClosed();
            }
        }, waitMs);
    }

    function bindDraggableSheet(modalEl, closeFn) {
        if (!modalEl || modalEl.dataset.dragBound === 'true') return;
        const sheet = modalEl.querySelector('.bottom-sheet-content');
        const dragZone = modalEl.querySelector('.bottom-sheet-drag-zone') || modalEl.querySelector('.bottom-sheet-handle');
        if (!sheet || !dragZone) return;

        modalEl.dataset.dragBound = 'true';

        let dragging = false;
        let startY = 0;
        let lastY = 0;
        let lastTime = 0;
        let velocityY = 0;

        const finishDrag = () => {
            if (!dragging) return;
            dragging = false;
            sheet.classList.remove('sheet-dragging');
            const totalDy = Math.max(0, lastY - startY);

            if (totalDy > 85 || velocityY > 0.55) {
                sheet.style.transform = '';
                if (typeof closeFn === 'function') {
                    closeFn();
                } else {
                    closeBottomSheet(modalEl);
                }
            } else {
                sheet.style.transform = 'translateY(0)';
                setTimeout(() => {
                    if (!dragging) sheet.style.transform = '';
                }, 280);
            }
        };

        dragZone.addEventListener('pointerdown', (e) => {
            if (e.target.closest('button')) return;
            dragging = true;
            startY = e.clientY;
            lastY = e.clientY;
            lastTime = performance.now();
            velocityY = 0;
            sheet.classList.add('sheet-dragging');
            if (dragZone.setPointerCapture) {
                try { dragZone.setPointerCapture(e.pointerId); } catch (err) {}
            }
        });

        dragZone.addEventListener('pointermove', (e) => {
            if (!dragging) return;
            const now = performance.now();
            const dt = Math.max(1, now - lastTime);
            velocityY = (e.clientY - lastY) / dt;
            lastY = e.clientY;
            lastTime = now;

            const dy = e.clientY - startY;
            if (dy >= 0) {
                sheet.style.transform = `translateY(${dy}px)`; } else { sheet.style.transform = `translateY(${dy * 0.16}px)`;
            }
        });

        dragZone.addEventListener('pointerup', finishDrag);
        dragZone.addEventListener('pointercancel', finishDrag);
    }

    /* 3. SLIDE CONTÍNUO POR TECLADO (SEGURAR SETA = DESLIZE SUAVE ~1000ms) */
    function startHoldSlide(dir, getMetricsFn, onUpdateFn, onCompleteFn) {
        const direction = dir >= 0 ? 1 : -1;

        if (prefersReducedMotion()) {
            const m = typeof getMetricsFn === 'function' ? getMetricsFn() : { maxSlide: 200 };
            if (direction > 0) {
                if (typeof onUpdateFn === 'function') onUpdateFn(m.maxSlide);
                if (typeof onCompleteFn === 'function') onCompleteFn(m.maxSlide);
            } else if (typeof onUpdateFn === 'function') {
                onUpdateFn(0);
            }
            return;
        }

        holdSlideState.active = true;
        holdSlideState.dir = direction;
        holdSlideState.lastTs = performance.now();

        if (holdSlideRaf) cancelAnimationFrame(holdSlideRaf);

        const tick = (now) => {
            if (!holdSlideState.active) return;
            const dt = Math.min(40, Math.max(0, now - holdSlideState.lastTs));
            holdSlideState.lastTs = now;

            const metrics = typeof getMetricsFn === 'function'
                ? getMetricsFn()
                : { currentX: 0, maxSlide: 200, durationMs: 900, threshold: 0.95 };

            const maxSlide = Math.max(1, metrics.maxSlide || 200);
            const durationMs = Math.max(150, metrics.durationMs || 1000);
            const threshold = typeof metrics.threshold === 'number' ? metrics.threshold : 0.95;

            const speedPxPerMs = maxSlide / durationMs;
            const nextX = Math.max(0, Math.min(maxSlide, (metrics.currentX || 0) + holdSlideState.dir * speedPxPerMs * dt));

            if (typeof onUpdateFn === 'function') onUpdateFn(nextX);

            if (holdSlideState.dir > 0 && nextX >= maxSlide * threshold) {
                stopHoldSlide();
                if (typeof onCompleteFn === 'function') onCompleteFn(maxSlide);
                return;
            }
            if (holdSlideState.dir < 0 && nextX <= 0) {
                stopHoldSlide();
                return;
            }

            holdSlideRaf = requestAnimationFrame(tick);
        };

        holdSlideRaf = requestAnimationFrame(tick);
    }

    function stopHoldSlide() {
        holdSlideState.active = false;
        if (holdSlideRaf) {
            cancelAnimationFrame(holdSlideRaf);
            holdSlideRaf = null;
        }
    }

    window.addEventListener('blur', stopHoldSlide);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopHoldSlide();
    });

    /* 4. MICRO-INTERAÇÕES DA ARENA */
    function animateTrialEnter(modelAreaEl, compAreaEl) {
        if (prefersReducedMotion()) return;
        [modelAreaEl, compAreaEl].forEach(el => {
            if (!el) return;
            el.classList.remove('arena-trial-enter');
            void el.offsetWidth;
            el.classList.add('arena-trial-enter');
        });
    }

    function animateSlotFill(slotEl) {
        if (!slotEl || prefersReducedMotion()) return;
        slotEl.classList.remove('slot-magnetic-fill');
        void slotEl.offsetWidth;
        slotEl.classList.add('slot-magnetic-fill');
    }

    function shakeElement(el) {
        if (!el || prefersReducedMotion()) return;
        el.classList.remove('alfa-shake-subtle');
        void el.offsetWidth;
        el.classList.add('alfa-shake-subtle');
        setTimeout(() => el.classList.remove('alfa-shake-subtle'), 340);
    }

    function pulseTarget(el, customClass = 'alfa-pulse-generic') {
        if (!el) return;
        el.classList.remove(customClass);
        void el.offsetWidth;
        el.classList.add(customClass);
        setTimeout(() => el.classList.remove(customClass), 460);
    }

    function triggerAudioWave(btnEl = null, durationMs = 1150) {
        if (prefersReducedMotion()) return;
        const target = btnEl || document.querySelector('#screen-game .model-audio-btn');
        if (!target) return;

        if (audioWaveTimer) {
            clearTimeout(audioWaveTimer);
            audioWaveTimer = null;
        }
        target.classList.add('audio-wave-active');
        audioWaveTimer = setTimeout(() => {
            target.classList.remove('audio-wave-active');
            audioWaveTimer = null;
        }, durationMs);
    }

    function animateTitleSwap(titleEl) {
        if (!titleEl || prefersReducedMotion()) return;
        titleEl.classList.remove('title-swap-anim');
        void titleEl.offsetWidth;
        titleEl.classList.add('title-swap-anim');
    }

    window.AlfaAnimations = {
        playCoinReward,
        openBottomSheet,
        closeBottomSheet,
        bindDraggableSheet,
        startHoldSlide,
        stopHoldSlide,
        animateTrialEnter,
        animateSlotFill,
        shakeElement,
        pulseTarget,
        triggerAudioWave,
        animateTitleSwap
    };
})();