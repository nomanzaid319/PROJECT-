// function navigateToPage(page) {
//     window.location.href = page;
// }


// document.getElementById('product-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     navigateToPage('about.html');
// });

// document.getElementById('deals-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     navigateToPage('deals.html');
// });

// document.getElementById('more-links').addEventListener('click', function(event) {
//     event.preventDefault();
//     navigateToPage('more.html');
// });

// ==================== FIRE-BOLTT - PRO index.js ====================

document.addEventListener("DOMContentLoaded", () => {

    // ==================== NAVBAR & MOBILE MENU ====================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        navbar.style.backgroundColor = window.scrollY > 80 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'whitesmoke';
        navbar.style.boxShadow = window.scrollY > 80 
            ? '0 5px 25px rgba(0,0,0,0.15)' 
            : 'none';
    });

    // Hamburger Menu
    let isMenuOpen = false;
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = 'font-size:28px; cursor:pointer; padding:10px; display:none;';
    navbar.appendChild(hamburger);

    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.style.cssText = `
        position:fixed; top:0; left:-100%; width:100%; height:100vh; background:#fff;
        z-index:2000; transition:0.4s; padding:90px 20px; overflow-y:auto;
    `;
    document.body.appendChild(mobileMenu);

    hamburger.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.style.left = isMenuOpen ? '0' : '-100%';
        hamburger.textContent = isMenuOpen ? '✕' : '☰';
    });

    // Show hamburger on mobile
    function handleResize() {
        hamburger.style.display = window.innerWidth <= 768 ? 'block' : 'none';
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    // ==================== WISHLIST ====================
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    function toggleWishlist(productName) {
        if (wishlist.includes(productName)) {
            wishlist = wishlist.filter(item => item !== productName);
        } else {
            wishlist.push(productName);
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        showToast(`${productName} ${wishlist.includes(productName) ? 'added to' : 'removed from'} Wishlist ❤️`);
    }

    function updateWishlistCount() {
        let countEl = document.getElementById('wishlist-count');
        if (!countEl) {
            const wishlistIcon = document.createElement('span');
            wishlistIcon.innerHTML = `❤️ <span id="wishlist-count" style="background:#ff3b5f;color:white;border-radius:50%;padding:1px 6px;font-size:12px;">${wishlist.length}</span>`;
            wishlistIcon.style.cssText = 'position:absolute; right:120px; top:22px; font-size:22px; cursor:pointer;';
            navbar.appendChild(wishlistIcon);
        } else {
            countEl.textContent = wishlist.length;
        }
    }

    // ==================== ADD TO CART ====================
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(productName, price = "₹2,999") {
        cart.push({ name: productName, price, date: new Date().toLocaleDateString() });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showToast(`${productName} added to Cart 🛒`);
    }

    function updateCartCount() {
        let countEl = document.getElementById('cart-count');
        if (!countEl) {
            const cartIcon = document.createElement('span');
            cartIcon.innerHTML = `🛒 <span id="cart-count" style="background:#ff9500;color:white;border-radius:50%;padding:1px 6px;font-size:12px;">${cart.length}</span>`;
            cartIcon.style.cssText = 'position:absolute; right:70px; top:22px; font-size:22px; cursor:pointer;';
            navbar.appendChild(cartIcon);
            cartIcon.addEventListener('click', showCart);
        } else {
            countEl.textContent = cart.length;
        }
    }

    function showCart() {
        if (cart.length === 0) return alert("Cart is empty!");
        
        let msg = "🛍️ Your Cart:\n\n";
        cart.forEach((item, i) => msg += `${i+1}. ${item.name} - ${item.price}\n`);
        msg += `\nTotal Items: ${cart.length}`;
        alert(msg);
    }

    // ==================== TOAST NOTIFICATION ====================
    function showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
            background:#222; color:#fff; padding:14px 24px; border-radius:50px;
            font-weight:500; z-index:4000; box-shadow:0 10px 30px rgba(0,0,0,0.3);
            animation: slideUp 0.4s ease;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2800);
    }

    // ==================== PRODUCT INTERACTIONS ====================
    document.querySelectorAll('.fourbone, .fourbtwo, .fourbthree, .fourbfour, .card, .twoa, .twob, .twoc, .twod, .twoe, .twof').forEach(card => {
        const productName = card.querySelector('span')?.textContent?.trim() || "Fire-Boltt Product";

        // Add to Cart Button
        // const cartBtn = document.createElement('button');
        // cartBtn.textContent = "🛒 Add to Cart";
        // cartBtn.style.cssText = `
        //     position:absolute; bottom:12px; left:50%; transform:translateX(-50%);
        //     background:#ff9500; color:white; border:none; padding:7px 18px;
        //     border-radius:30px; font-size:13px; cursor:pointer; z-index:10;
        // `;
        // card.style.position = 'relative';
        // card.style.overflow = 'hidden';
        // card.appendChild(cartBtn);

        // cartBtn.addEventListener('click', (e) => {
        //     e.stopImmediatePropagation();
        //     addToCart(productName);
        // });

        


        // Wishlist Heart
        const heart = document.createElement('div');
        heart.innerHTML = wishlist.includes(productName) ? '❤️' : '♡';
        heart.style.cssText = 'position:absolute; top:12px; right:12px; font-size:20px; cursor:pointer; z-index:10;';
        card.appendChild(heart);

        heart.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            toggleWishlist(productName);
            heart.innerHTML = wishlist.includes(productName) ? '❤️' : '♡';
        });

        // Quick View on Double Click
        card.addEventListener('dblclick', () => {
            showQuickView(productName);
        });
    });

    // ==================== QUICK VIEW MODAL ====================
    function showQuickView(name) {
        const modalHTML = `
            <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); 
                        display:flex; align-items:center; justify-content:center; z-index:3000;">
                <div style="background:white; width:90%; max-width:600px; border-radius:16px; padding:25px; position:relative;">
                    <span onclick="this.parentElement.parentElement.remove()" style="position:absolute; top:15px; right:20px; font-size:30px; cursor:pointer;">✕</span>
                    <h2 style="text-align:center; color:#ff9500;">${name}</h2>
                    <p style="text-align:center; color:#555; margin:15px 0;">Premium Smartwatch with Bluetooth Calling & AMOLED Display</p>
                    <div style="text-align:center; font-size:28px; font-weight:bold; color:#222; margin:15px 0;">₹2,999</div>
                    <div style="display:flex; gap:15px; justify-content:center; margin-top:20px;">
                        <button onclick="addToCartFromModal('${name}'); this.parentElement.parentElement.parentElement.remove()" 
                                style="background:#ff9500; color:white; border:none; padding:12px 30px; border-radius:50px; font-size:16px;">
                            Add to Cart
                        </button>
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                                style="background:#222; color:white; border:none; padding:12px 30px; border-radius:50px; font-size:16px;">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        `;
        const modal = document.createElement('div');
        modal.innerHTML = modalHTML;
        document.body.appendChild(modal);
    }

    window.addToCartFromModal = addToCart;

    // ==================== LIGHTBOX FOR IMAGES ====================
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.95); 
                             display:none; align-items:center; justify-content:center; z-index:5000;`;
    lightbox.innerHTML = `<img id="lb-img" style="max-width:92%; max-height:92%; border-radius:12px; box-shadow:0 20px 40px rgba(0,0,0,0.6);">`;
    document.body.appendChild(lightbox);

    document.querySelectorAll('img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            document.getElementById('lb-img').src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => lightbox.style.display = 'none');

    // ==================== BACK TO TOP ====================
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.style.cssText = `
        position:fixed; bottom:30px; right:30px; width:55px; height:55px; background:#ff9500;
        color:white; border:none; border-radius:50%; font-size:28px; cursor:pointer;
        display:none; z-index:4000; box-shadow:0 8px 25px rgba(255,149,0,0.4);
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 700 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Load counts
    updateCartCount();
    updateWishlistCount();

    console.log('%c🔥 Fire-Boltt Website Fully Loaded with Pro Features!', 'color:#ff9500; font-size:18px; font-weight:bold');
});