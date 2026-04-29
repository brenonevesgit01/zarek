// ==========================================================================
// ZAREK — MAIN JS
// Global behaviors: sticky header, mobile menu, active nav link
// ==========================================================================

(function () {
    'use strict';

    /* ----------------------------------------------------------------------
       STICKY HEADER — toggle .is-scrolled when page scrolled past 10px
       ---------------------------------------------------------------------- */
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 10) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ----------------------------------------------------------------------
       MOBILE MENU — open/close drawer + overlay
       ---------------------------------------------------------------------- */
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileNav = document.querySelector('[data-mobile-nav]');
    const mobileNavClose = document.querySelector('[data-mobile-nav-close]');
    const overlay = document.querySelector('[data-nav-overlay]');

    const openMenu = () => {
        if (mobileNav) mobileNav.classList.add('is-open');
        if (overlay) overlay.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        if (mobileNav) mobileNav.classList.remove('is-open');
        if (overlay) overlay.classList.remove('is-visible');
        document.body.style.overflow = '';
    };

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (mobileNavClose) mobileNavClose.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    /* ----------------------------------------------------------------------
       FAQ ACCORDION — toggle .is-open on click, only one open at a time
       ---------------------------------------------------------------------- */
    document.querySelectorAll('[data-faq] .faq-item').forEach((item) => {
        const trigger = item.querySelector('.faq-item__trigger');
        if (!trigger) return;
        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');
            item.parentElement.querySelectorAll('.faq-item.is-open').forEach((openItem) => {
                openItem.classList.remove('is-open');
                const t = openItem.querySelector('.faq-item__trigger');
                if (t) t.setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                item.classList.add('is-open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ----------------------------------------------------------------------
       PRODUCT GALLERY — swap main image when a thumb is clicked
       ---------------------------------------------------------------------- */
    document.querySelectorAll('[data-gallery]').forEach((gallery) => {
        const mainImg = gallery.querySelector('[data-gallery-main]');
        const thumbs = gallery.querySelectorAll('[data-gallery-thumb]');
        if (!mainImg || !thumbs.length) return;
        thumbs.forEach((thumb) => {
            thumb.addEventListener('click', () => {
                const src = thumb.getAttribute('data-src');
                if (src) mainImg.src = src;
                thumbs.forEach((t) => t.classList.remove('is-active'));
                thumb.classList.add('is-active');
            });
        });
    });

    /* ----------------------------------------------------------------------
       VARIANT PICKER — toggle active option, update label value
       ---------------------------------------------------------------------- */
    document.querySelectorAll('[data-variant]').forEach((variant) => {
        const valueLabel = variant.querySelector('[data-variant-value]');
        const options = variant.querySelectorAll('[data-variant-option]');
        options.forEach((option) => {
            option.addEventListener('click', () => {
                options.forEach((o) => o.classList.remove('is-active'));
                option.classList.add('is-active');
                if (valueLabel) valueLabel.textContent = option.textContent.trim();
            });
        });
    });

    /* ----------------------------------------------------------------------
       QUANTITY STEPPER — +/- buttons w/ clamp to min/max
       ---------------------------------------------------------------------- */
    document.querySelectorAll('[data-quantity]').forEach((wrap) => {
        const input = wrap.querySelector('[data-quantity-input]');
        const dec = wrap.querySelector('[data-quantity-decrement]');
        const inc = wrap.querySelector('[data-quantity-increment]');
        if (!input) return;

        const clamp = (n) => {
            const min = parseInt(input.min, 10) || 1;
            const max = parseInt(input.max, 10) || 99;
            return Math.max(min, Math.min(max, n));
        };

        if (dec) dec.addEventListener('click', () => {
            input.value = clamp((parseInt(input.value, 10) || 1) - 1);
        });
        if (inc) inc.addEventListener('click', () => {
            input.value = clamp((parseInt(input.value, 10) || 1) + 1);
        });
        input.addEventListener('change', () => {
            input.value = clamp(parseInt(input.value, 10) || 1);
        });
    });

    /* ----------------------------------------------------------------------
       TABS — show panel matching clicked tab button
       ---------------------------------------------------------------------- */
    document.querySelectorAll('[data-tabs]').forEach((tabs) => {
        const buttons = tabs.querySelectorAll('[data-tab]');
        const panels = tabs.querySelectorAll('[data-panel]');
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-tab');
                buttons.forEach((b) => {
                    const active = b === btn;
                    b.classList.toggle('is-active', active);
                    b.setAttribute('aria-selected', active ? 'true' : 'false');
                });
                panels.forEach((p) => {
                    p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
                });
            });
        });
    });

    /* ----------------------------------------------------------------------
       ACTIVE NAV LINK — highlight link matching current page
       ---------------------------------------------------------------------- */
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('[data-nav-link]').forEach((link) => {
        const target = link.getAttribute('data-nav-link');
        if (target === path) {
            link.classList.add('is-active');
        }
    });
})();
