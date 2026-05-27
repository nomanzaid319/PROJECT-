// ============================================================
// FIRE-BOLTT — index.js
// Features: Cart System, Navbar Scroll, Smooth Scroll, Stats Counter
// ============================================================

// ---- 1. NAVBAR SCROLL EFFECT ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ---- 2. CART SYSTEM ----
const cart = [];

// Cart Modal HTML inject karo
const cartModalHTML = `
<div id="cart-modal" style="
    display:none; position:fixed; top:0; right:0; width:360px; height:100vh;
    background:#111; color:#fff; z-index:9999; box-shadow:-5px 0 30px rgba(0,0,0,0.6);
    flex-direction:column; font-family:'Poppins',sans-serif; overflow-y:auto;">
    <div style="padding:20px; border-bottom:1px solid #333; display:flex; justify-content:space-between; align-items:center;">
        <h2 style="color:#ff3c00; margin:0;">🛒 Cart</h2>
        <span id="close-cart" style="cursor:pointer; font-size:1.5rem; color:#fff;">✕</span>
    </div>
    <div id="cart-items" style="flex:1; padding:20px; min-height:200px;"></div>
    <div style="padding:20px; border-top:1px solid #333;">
        <div style="display:flex; justify-content:space-between; font-size:1.1rem; margin-bottom:15px;">
            <span>Total:</span>
            <span id="cart-total" style="color:#ff3c00; font-weight:700;">₹0</span>
        </div>
        <button id="checkout-btn" style="
            width:100%; padding:14px; background:#ff3c00; color:#fff;
            border:none; border-radius:30px; font-size:1rem; font-weight:700;
            cursor:pointer; transition:0.3s;">
            Checkout →
        </button>
        <button id="clear-cart-btn" style="
            width:100%; padding:10px; background:transparent; color:#888;
            border:1px solid #444; border-radius:30px; font-size:0.9rem;
            cursor:pointer; margin-top:10px; transition:0.3s;">
            Clear Cart
        </button>
    </div>
</div>
<div id="cart-overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998;"></div>
`;
document.body.insertAdjacentHTML('beforeend', cartModalHTML);

// Cart badge
const cartButton = document.getElementById('card-button');
if (cartButton) {
    cartButton.style.position = 'relative';
    cartButton.insertAdjacentHTML('afterend', '');
    const badge = document.createElement('span');
    badge.id = 'cart-badge';
    badge.textContent = '0';
    badge.style.cssText = `
        position:absolute; top:-8px; right:-8px;
        background:#ff3c00; color:#fff; border-radius:50%;
        width:20px; height:20px; display:none; align-items:center;
        justify-content:center; font-size:0.7rem; font-weight:700;
    `;
    badge.style.display = 'none';
    cartButton.style.position = 'relative';
    cartButton.appendChild(badge);
}

// Cart open/close
function openCart() {
    document.getElementById('cart-modal').style.display = 'flex';
    document.getElementById('cart-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('cart-overlay').style.display = 'none';
    document.body.style.overflow = '';
}

if (cartButton) cartButton.addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);

// Products data — card buttons ke liye
const products = [
    { id: 1, name: 'Ring X', price: 1999 },
    { id: 2, name: 'NCP Max', price: 2499 },
    { id: 3, name: 'Brillia', price: 3499 },
    { id: 4, name: 'Brillia Pro', price: 4499 },
];

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(i => i.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`${product.name} cart mein add hua! 🛒`);
}

function removeFromCart(productId) {
    const idx = cart.findIndex(i => i.id === productId);
    if (idx !== -1) cart.splice(idx, 1);
    updateCartUI();
}

function clearCart() {
    cart.length = 0;
    updateCartUI();
}

function updateCartUI() {
    const itemsDiv = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');
    const badge = document.getElementById('cart-badge');

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

    // Badge update
    if (badge) {
        badge.textContent = totalQty;
        badge.style.display = totalQty > 0 ? 'flex' : 'none';
    }

    // Total update
    if (totalSpan) totalSpan.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;

    // Items list
    if (itemsDiv) {
        if (cart.length === 0) {
            itemsDiv.innerHTML = `
                <div style="text-align:center; color:#666; margin-top:60px;">
                    <div style="font-size:3rem;">🛒</div>
                    <p style="margin-top:10px;">Cart khali hai</p>
                </div>`;
            return;
        }
        itemsDiv.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; align-items:center;
                background:#1a1a1a; border-radius:10px; padding:12px 15px; margin-bottom:12px;">
                <div>
                    <p style="margin:0; font-weight:600;">${item.name}</p>
                    <p style="margin:4px 0 0; color:#ff3c00; font-size:0.9rem;">₹${item.price.toLocaleString('en-IN')} × ${item.qty}</p>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span style="color:#888; font-size:0.95rem;">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
                    <button onclick="removeFromCart(${item.id})" style="
                        background:#ff3c00; color:#fff; border:none; border-radius:50%;
                        width:26px; height:26px; cursor:pointer; font-size:1rem; line-height:1;">✕</button>
                </div>
            </div>
        `).join('');
    }
}

// Checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Cart khali hai!', 'error');
        return;
    }
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    showToast(`🎉 Order place ho gaya! Total: ₹${total.toLocaleString('en-IN')}`, 'success');
    clearCart();
    closeCart();
});

document.getElementById('clear-cart-btn').addEventListener('click', () => {
    clearCart();
    showToast('Cart clear ho gaya', 'error');
});

// Section ke product cards mein "Add to Cart" button add karo
const cardButtons = document.querySelectorAll('.card-button');
cardButtons.forEach((btn, idx) => {
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => addToCart((idx % 4) + 1));
});

// ---- 3. TOAST NOTIFICATION ----
function showToast(message, type = 'success') {
    const existing = document.getElementById('toast-msg');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.textContent = message;
    toast.style.cssText = `
        position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
        background:${type === 'error' ? '#c0392b' : '#27ae60'};
        color:#fff; padding:14px 28px; border-radius:30px;
        font-family:'Poppins',sans-serif; font-size:0.95rem; font-weight:600;
        z-index:99999; box-shadow:0 8px 25px rgba(0,0,0,0.4);
        animation: toastIn 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Toast animation
const style = document.createElement('style');
style.textContent = `
    @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(20px); }
        to { opacity:1; transform:translateX(-50%) translateY(0); }
    }
    .navbar.scrolled {
        background: rgba(18, 18, 18, 0.97) !important;
        box-shadow: 0 2px 20px rgba(0,0,0,0.5);
        transition: all 0.3s;
    }
`;
document.head.appendChild(style);

// ---- 4. ANIMATED STATS COUNTER ----
function animateCounter(el, target, prefix = '', suffix = '') {
    let current = 0;
    const increment = target / 80;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = prefix + Math.floor(current) + suffix;
    }, 20);
}

// Intersection Observer for counters
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const spans = document.querySelectorAll('#threetwo span');
            const targets = [20, 2];
            spans.forEach((span, i) => {
                if (i < targets.length) animateCounter(span, targets[i], '', 'Mn+');
            });
            statObserver.disconnect();
        }
    });
}, { threshold: 0.4 });

const threeSection = document.getElementById('three');
if (threeSection) statObserver.observe(threeSection);

// ---- 5. SMOOTH SCROLL for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ---- 6. READ ALL button ----
const readBtn = document.getElementById('read');
if (readBtn) {
    readBtn.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
}

console.log('🔥 Fire-Boltt JS loaded!');
