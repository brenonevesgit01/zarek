// ==========================================================================
// ZAREK — CART
// localStorage persistence, cart.html table rendering, header badge sync.
// Other pages (product.html) maintain their own inline cart logic for the
// in-page drawer experience; this file is the shared persistence layer.
// ==========================================================================

(function () {
    const STORAGE_KEY = 'zarek-cart';

    function loadCart() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
        catch { return []; }
    }
    function saveCart(c) { localStorage.setItem(STORAGE_KEY, JSON.stringify(c)); }
    function formatPrice(n) { return '£' + Number(n || 0).toFixed(2); }
    function getSubtotal(c) { return c.reduce((s, i) => s + (i.price * i.qty), 0); }

    let cart = loadCart();

    // ----------------------------------------------------------------------
    // HEADER BADGE — runs on every page that loads cart.js.
    // ----------------------------------------------------------------------
    function updateBadge() {
        const total = cart.reduce((s, i) => s + i.qty, 0);
        document.querySelectorAll('[data-cart-count]').forEach((el) => {
            el.textContent = total;
            el.dataset.count = total;
        });
    }

    // ----------------------------------------------------------------------
    // CART.HTML RENDERER — only runs when .cart-table__body exists.
    // ----------------------------------------------------------------------
    function renderCartPage() {
        const tbody = document.querySelector('.cart-table__body');
        if (!tbody) return; // not on cart.html

        if (cart.length === 0) {
            tbody.innerHTML = ''
                + '<tr><td colspan="4" style="padding:48px 24px;text-align:center;color:#666;">'
                +   'Your cart is empty. '
                +   '<a href="collection.html" style="color:#111;text-decoration:underline;">Continue shopping</a>'
                + '</td></tr>';
            updateOrderSummary();
            return;
        }

        tbody.innerHTML = cart.map((item, idx) => {
            const variant = [
                item.color ? 'Colour: ' + item.color : '',
                item.size ? 'Size: ' + item.size : ''
            ].filter(Boolean).join(' · ');
            const productHref = 'product.html?id=' + encodeURIComponent(item.id || '');
            return ''
                + '<tr class="cart-row">'
                +   '<td class="cart-row__cell cart-row__cell--item">'
                +     '<div class="cart-item">'
                +       '<a href="' + productHref + '" class="cart-item__media">'
                +         '<img class="cart-item__img" src="' + (item.img || '') + '" alt="' + (item.name || '') + '">'
                +       '</a>'
                +       '<div class="cart-item__meta">'
                +         '<a href="' + productHref + '" class="cart-item__name">' + (item.name || '') + '</a>'
                +         (variant ? '<span class="cart-item__variant">' + variant + '</span>' : '')
                +         '<button type="button" class="cart-item__remove" data-cart-remove="' + idx + '">Remove</button>'
                +       '</div>'
                +     '</div>'
                +   '</td>'
                +   '<td class="cart-row__cell cart-row__cell--qty cart-row__cell--center">'
                +     '<div class="qty-stepper" data-quantity>'
                +       '<button type="button" class="qty-stepper__btn" data-cart-decrement="' + idx + '" aria-label="Decrease quantity">−</button>'
                +       '<input type="number" class="qty-stepper__input" value="' + item.qty + '" min="1" max="99" data-cart-qty="' + idx + '" aria-label="Quantity">'
                +       '<button type="button" class="qty-stepper__btn" data-cart-increment="' + idx + '" aria-label="Increase quantity">+</button>'
                +     '</div>'
                +   '</td>'
                +   '<td class="cart-row__cell cart-row__cell--price cart-row__cell--right">'
                +     '<span class="cart-row__price">' + formatPrice(item.price) + '</span>'
                +   '</td>'
                +   '<td class="cart-row__cell cart-row__cell--subtotal cart-row__cell--right">'
                +     '<span class="cart-row__subtotal">' + formatPrice(item.price * item.qty) + '</span>'
                +   '</td>'
                + '</tr>';
        }).join('');

        // Wire qty + remove handlers
        tbody.querySelectorAll('[data-cart-increment]').forEach((b) => {
            b.addEventListener('click', () => {
                const i = parseInt(b.dataset.cartIncrement, 10);
                if (cart[i] && cart[i].qty < 99) cart[i].qty++;
                saveCart(cart); renderCartPage(); updateBadge();
            });
        });
        tbody.querySelectorAll('[data-cart-decrement]').forEach((b) => {
            b.addEventListener('click', () => {
                const i = parseInt(b.dataset.cartDecrement, 10);
                if (cart[i] && cart[i].qty > 1) cart[i].qty--;
                saveCart(cart); renderCartPage(); updateBadge();
            });
        });
        tbody.querySelectorAll('[data-cart-qty]').forEach((input) => {
            input.addEventListener('change', () => {
                const i = parseInt(input.dataset.cartQty, 10);
                const v = Math.max(1, Math.min(99, parseInt(input.value, 10) || 1));
                if (cart[i]) cart[i].qty = v;
                saveCart(cart); renderCartPage(); updateBadge();
            });
        });
        tbody.querySelectorAll('[data-cart-remove]').forEach((b) => {
            b.addEventListener('click', () => {
                cart.splice(parseInt(b.dataset.cartRemove, 10), 1);
                saveCart(cart); renderCartPage(); updateBadge();
            });
        });

        updateOrderSummary();
    }

    function updateOrderSummary() {
        const sub = getSubtotal(cart);
        // Subtotal row is the first .order-summary__row dd; total row is .order-summary__row--total dd
        const subEl = document.querySelector('.order-summary__row:not(.order-summary__row--total) dd');
        if (subEl) subEl.textContent = formatPrice(sub);
        const totalEl = document.querySelector('.order-summary__row--total dd');
        if (totalEl) totalEl.textContent = formatPrice(sub);
    }

    // ----------------------------------------------------------------------
    // CART DRAWER — slide-in from the right, opens via ZAREK_CART.open().
    // Self-injects HTML + CSS on first call so it works on any page that
    // loads cart.js (no need for per-page markup).
    // ----------------------------------------------------------------------
    function ensureDrawer() {
        if (document.getElementById('zarek-cart-drawer')) return;

        const css = ''
            + '#zarek-cart-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:9998;opacity:0;visibility:hidden;transition:opacity .25s ease,visibility .25s ease}'
            + '#zarek-cart-overlay.active{opacity:1;visibility:visible}'
            + '#zarek-cart-drawer{position:fixed;top:0;right:-420px;width:420px;max-width:100vw;height:100%;background:#fff;z-index:9999;display:flex;flex-direction:column;transition:right .35s ease;box-shadow:-4px 0 24px rgba(0,0,0,0.08)}'
            + '#zarek-cart-drawer.active{right:0}'
            + '.zcd-head{display:flex;justify-content:space-between;align-items:center;padding:20px 20px 16px;border-bottom:1px solid #eee}'
            + '.zcd-title{font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0}'
            + '.zcd-close{background:none;border:none;font-size:22px;cursor:pointer;color:#111;line-height:1;padding:4px 8px}'
            + '.zcd-body{flex:1;overflow-y:auto;padding:0 20px}'
            + '.zcd-empty{text-align:center;padding:48px 12px;color:#666;font-size:14px}'
            + '.zcd-empty a{color:#111;text-decoration:underline}'
            + '.zcd-item{display:flex;gap:12px;padding:16px 0;border-bottom:1px solid #f0f0f0}'
            + '.zcd-item img{width:72px;height:72px;object-fit:cover;border-radius:4px;flex-shrink:0;background:#f5f5f5}'
            + '.zcd-item-meta{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}'
            + '.zcd-item-name{font-size:13px;font-weight:600;color:#111;line-height:1.3;margin:0;text-decoration:none}'
            + '.zcd-item-variant{font-size:11px;color:#666}'
            + '.zcd-item-row{display:flex;justify-content:space-between;align-items:center;margin-top:6px}'
            + '.zcd-qty{display:inline-flex;align-items:center;border:1px solid #ddd;border-radius:4px;overflow:hidden}'
            + '.zcd-qty button{width:26px;height:26px;background:none;border:none;cursor:pointer;font-size:14px;color:#111;display:flex;align-items:center;justify-content:center}'
            + '.zcd-qty button:hover{background:#f5f5f5}'
            + '.zcd-qty span{min-width:28px;text-align:center;font-size:13px;font-weight:600}'
            + '.zcd-item-price{font-size:13px;font-weight:600;color:#111}'
            + '.zcd-item-remove{background:none;border:none;color:#999;font-size:11px;cursor:pointer;padding:0;margin-top:4px;text-align:left;text-decoration:underline;align-self:flex-start}'
            + '.zcd-item-remove:hover{color:#c00}'
            + '.zcd-foot{border-top:1px solid #eee;padding:16px 20px 20px}'
            + '.zcd-subtotal{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:600;color:#111;margin-bottom:12px}'
            + '.zcd-subtotal-amount{font-size:16px}'
            + '.zcd-checkout{display:block;width:100%;background:#111;color:#fff;border:none;padding:14px;font-size:13px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;text-align:center;text-decoration:none}'
            + '.zcd-checkout:hover{background:#000}'
            + '.zcd-view-cart{display:block;text-align:center;margin-top:10px;font-size:12px;color:#666;text-decoration:underline}'
            + 'body.zcd-open{overflow:hidden}';

        const style = document.createElement('style');
        style.id = 'zarek-cart-drawer-styles';
        style.textContent = css;
        document.head.appendChild(style);

        const overlay = document.createElement('div');
        overlay.id = 'zarek-cart-overlay';
        overlay.addEventListener('click', closeDrawer);
        document.body.appendChild(overlay);

        const drawer = document.createElement('aside');
        drawer.id = 'zarek-cart-drawer';
        drawer.setAttribute('aria-label', 'Cart');
        drawer.innerHTML = ''
            + '<div class="zcd-head">'
            +   '<h3 class="zcd-title">Your Cart</h3>'
            +   '<button type="button" class="zcd-close" aria-label="Close cart">×</button>'
            + '</div>'
            + '<div class="zcd-body" data-zcd-body></div>'
            + '<div class="zcd-foot">'
            +   '<div class="zcd-subtotal"><span>Subtotal</span><span class="zcd-subtotal-amount" data-zcd-subtotal>£0.00</span></div>'
            +   '<a class="zcd-checkout" href="checkout.html">Checkout</a>'
            +   '<a class="zcd-view-cart" href="cart.html">View full cart</a>'
            + '</div>';
        document.body.appendChild(drawer);

        drawer.querySelector('.zcd-close').addEventListener('click', closeDrawer);
    }

    function renderDrawer() {
        ensureDrawer();
        const body = document.querySelector('[data-zcd-body]');
        const subEl = document.querySelector('[data-zcd-subtotal]');
        if (!body || !subEl) return;

        if (cart.length === 0) {
            body.innerHTML = '<div class="zcd-empty">Your cart is empty.<br><a href="collection.html">Continue shopping</a></div>';
        } else {
            body.innerHTML = cart.map((item, idx) => {
                const variant = [
                    item.color ? item.color : '',
                    item.size ? 'Size ' + item.size : ''
                ].filter(Boolean).join(' · ');
                return ''
                    + '<div class="zcd-item">'
                    +   '<img src="' + (item.img || '') + '" alt="' + (item.name || '') + '">'
                    +   '<div class="zcd-item-meta">'
                    +     '<a class="zcd-item-name" href="product.html?id=' + encodeURIComponent(item.id || '') + '">' + (item.name || '') + '</a>'
                    +     (variant ? '<span class="zcd-item-variant">' + variant + '</span>' : '')
                    +     '<div class="zcd-item-row">'
                    +       '<div class="zcd-qty">'
                    +         '<button type="button" data-zcd-dec="' + idx + '" aria-label="Decrease">−</button>'
                    +         '<span>' + item.qty + '</span>'
                    +         '<button type="button" data-zcd-inc="' + idx + '" aria-label="Increase">+</button>'
                    +       '</div>'
                    +       '<span class="zcd-item-price">' + formatPrice(item.price * item.qty) + '</span>'
                    +     '</div>'
                    +     '<button type="button" class="zcd-item-remove" data-zcd-rm="' + idx + '">Remove</button>'
                    +   '</div>'
                    + '</div>';
            }).join('');

            body.querySelectorAll('[data-zcd-inc]').forEach((b) => b.addEventListener('click', () => {
                const i = parseInt(b.dataset.zcdInc, 10);
                if (cart[i] && cart[i].qty < 99) cart[i].qty++;
                saveCart(cart); renderDrawer(); updateBadge(); renderCartPage();
            }));
            body.querySelectorAll('[data-zcd-dec]').forEach((b) => b.addEventListener('click', () => {
                const i = parseInt(b.dataset.zcdDec, 10);
                if (cart[i] && cart[i].qty > 1) cart[i].qty--;
                saveCart(cart); renderDrawer(); updateBadge(); renderCartPage();
            }));
            body.querySelectorAll('[data-zcd-rm]').forEach((b) => b.addEventListener('click', () => {
                cart.splice(parseInt(b.dataset.zcdRm, 10), 1);
                saveCart(cart); renderDrawer(); updateBadge(); renderCartPage();
            }));
        }

        subEl.textContent = formatPrice(getSubtotal(cart));
    }

    function openDrawer() {
        ensureDrawer();
        renderDrawer();
        document.getElementById('zarek-cart-overlay').classList.add('active');
        document.getElementById('zarek-cart-drawer').classList.add('active');
        document.body.classList.add('zcd-open');
    }

    function closeDrawer() {
        const overlay = document.getElementById('zarek-cart-overlay');
        const drawer = document.getElementById('zarek-cart-drawer');
        if (overlay) overlay.classList.remove('active');
        if (drawer) drawer.classList.remove('active');
        document.body.classList.remove('zcd-open');
    }

    // ----------------------------------------------------------------------
    // PUBLIC API — used by the homepage featured Add-to-Cart button.
    // ----------------------------------------------------------------------
    window.ZAREK_CART = {
        add: function (item) {
            const existing = cart.find((i) =>
                i.id === item.id && i.color === item.color && i.size === item.size
            );
            if (existing) existing.qty++;
            else cart.push(Object.assign({ qty: 1 }, item));
            saveCart(cart);
            updateBadge();
            renderCartPage();
        },
        get: function () { return cart.slice(); },
        clear: function () { cart = []; saveCart(cart); updateBadge(); renderCartPage(); renderDrawer(); },
        open: openDrawer,
        close: closeDrawer
    };

    // Init
    function init() { updateBadge(); renderCartPage(); }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
