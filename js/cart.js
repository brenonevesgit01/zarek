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
        },
        get: function () { return cart.slice(); },
        clear: function () { cart = []; saveCart(cart); updateBadge(); renderCartPage(); }
    };

    // Init
    function init() { updateBadge(); renderCartPage(); }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
