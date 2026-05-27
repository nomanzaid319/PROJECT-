// ============================================================
// FIRE-BOLTT REACT INTERACTIVE PRODUCT HUB
// Built with React 18, Babel JSX, and styled with Vanilla CSS
// ============================================================

const { useState, useEffect } = React;

const productsData = [
  {
    id: 1,
    name: "Ring X Smartwatch",
    category: "Smartwatches",
    price: 1999,
    originalPrice: 8999,
    rating: 4.8,
    reviewsCount: 1420,
    image: "images/RingX-Black_1_95x.avif",
    badge: "Bestseller",
    description: "Premium smartwatch featuring sleek Bluetooth calling, multiple sports modes, robust SpO2 monitoring, and an elegant metallic casing.",
    specs: {
      Display: "1.83 inch HD Curved Display",
      Battery: "Up to 7 Days battery backup",
      Waterproof: "IP68 Resistance",
      Features: "Bluetooth Calling, SpO2, Heart Rate, Voice Assistant"
    },
    colors: ["#111111", "#d4af37", "#7f8c8d"]
  },
  {
    id: 2,
    name: "Ninja Call Pro Max",
    category: "Smartwatches",
    price: 2499,
    originalPrice: 9999,
    rating: 4.9,
    reviewsCount: 2854,
    image: "images/ninja-call-pro-max_95x.avif",
    badge: "Trending",
    description: "Go grand with an ultra-large screen, advanced dual-chip Bluetooth connectivity, and fully active health sensors for comprehensive wellness tracking.",
    specs: {
      Display: "2.01 inch Ultra Large Display",
      Battery: "Up to 10 Days battery backup",
      Waterproof: "IP67 Resistance",
      Features: "Dual Chip BT Calling, 120+ Sports Modes, Sleep Tracker"
    },
    colors: ["#2c3e50", "#2ecc71", "#e74c3c"]
  },
  {
    id: 3,
    name: "Brillia Premium Watch",
    category: "Smartwatches",
    price: 3499,
    originalPrice: 12999,
    rating: 4.7,
    reviewsCount: 920,
    image: "images/BrilliaButtonBuckle-Black-Left-3_95x.avif",
    badge: "Hot Deal",
    description: "Crafted for luxury and high performance. Features a robust metallic dial, genuine leather/metal straps, and a stunning high-contrast screen.",
    specs: {
      Display: "1.43 inch AMOLED Always-On Display",
      Battery: "Up to 5 Days (AMOLED mode)",
      Waterproof: "3ATM Waterproof",
      Features: "Stainless Steel Build, Premium UI, NFC Control"
    },
    colors: ["#000000", "#c0c0c0", "#8e44ad"]
  },
  {
    id: 4,
    name: "Brillia Pro Elite",
    category: "Smartwatches",
    price: 4499,
    originalPrice: 15999,
    rating: 4.9,
    reviewsCount: 652,
    image: "images/1_cb81f3af-f5eb-4e16-8dc5-06d7efa11d6a_95x.avif",
    badge: "Premium Choice",
    description: "The ultimate flagship watch with true GPS tracking, premium stainless steel mesh strap, sapphire glass panel, and voice assistant.",
    specs: {
      Display: "1.96 inch AMOLED Curved Panel",
      Battery: "Up to 8 Days battery backup",
      Waterproof: "IP68 Resistance",
      Features: "Built-in GPS, Sapphire Dial, AI Voice Command"
    },
    colors: ["#34495e", "#bdc3c7", "#f39c12"]
  },
  {
    id: 5,
    name: "Rise Luxe Mesh",
    category: "Smartwatches",
    price: 2999,
    originalPrice: 11999,
    rating: 4.6,
    reviewsCount: 1180,
    image: "images/rise-luxe-mesh-black_1_95x.avif",
    badge: "Special Edition",
    description: "A gorgeous fusion of modern technology and vintage aesthetics. Features a sleek magnetic mesh band and customizable dynamic watch faces.",
    specs: {
      Display: "1.78 inch AMOLED Screen",
      Battery: "Up to 6 Days backup",
      Waterproof: "IP67 Resistance",
      Features: "Magnetic Mesh Strap, 100+ Watch Faces, SpO2 Tracker"
    },
    colors: ["#1e272e", "#ffd32a", "#ef5777"]
  },
  {
    id: 6,
    name: "Ninja Call Pro Plus",
    category: "Smartwatches",
    price: 2199,
    originalPrice: 8999,
    rating: 4.8,
    reviewsCount: 1945,
    image: "images/ninja-call-pro-plus-black_1_95x.png",
    badge: "Best Seller",
    description: "A performance-focused sports smartwatch built with a rugged shockproof bumper casing and quick-access multi-function crowns.",
    specs: {
      Display: "1.89 inch HD Screen",
      Battery: "Up to 9 Days battery",
      Waterproof: "IP68 Resistance",
      Features: "Rugged Design, Quick Dial Pad, Custom Workouts"
    },
    colors: ["#2d3436", "#0984e3", "#d63031"]
  },
  {
    id: 7,
    name: "Fire-Pods Ninja Earbuds",
    category: "Audio",
    price: 1299,
    originalPrice: 4999,
    rating: 4.7,
    reviewsCount: 840,
    image: "images/sddefault_4.webp",
    badge: "New Launch",
    description: "Experience absolute audio bliss. Features Active Noise Cancellation (ANC), gaming low-latency mode, and deep dynamic bass driver technology.",
    specs: {
      Drivers: "13mm Dynamic Bass Boost Drivers",
      Playtime: "Up to 40 Hours total with charging case",
      Latency: "45ms Super Low Latency for gaming",
      Features: "ANC (25dB), IPX5 Water Resistant, Touch controls"
    },
    colors: ["#ffffff", "#000000", "#00b894"]
  },
  {
    id: 8,
    name: "Boltt Blast ANC Headset",
    category: "Audio",
    price: 1899,
    originalPrice: 6999,
    rating: 4.8,
    reviewsCount: 620,
    image: "images/sddefault_8.webp",
    badge: "Top Rated",
    description: "Over-ear luxury headphones with signature fire-bass tuning, memory foam ear cups, and powerful hybrid ANC technology.",
    specs: {
      Drivers: "40mm High-Res Neodymium Drivers",
      Playtime: "Up to 50 Hours (ANC Off) / 35 Hours (ANC On)",
      Connectivity: "Bluetooth 5.3 & AUX dual mode",
      Features: "Hybrid ANC, Memory Foam Comfort, Foldable Frame"
    },
    colors: ["#2d3436", "#e84393"]
  },
  {
    id: 9,
    name: "Boltt Active Health Band",
    category: "Fitness Bands",
    price: 999,
    originalPrice: 3999,
    rating: 4.5,
    reviewsCount: 430,
    image: "images/sddefault_10.webp",
    badge: "Super Budget",
    description: "Ultra-light health companion offering 24/7 continuous heart rate monitoring, dynamic sleep tracking, and instant smart phone notifications.",
    specs: {
      Display: "1.1 inch AMOLED Touch Console",
      Battery: "Up to 14 Days standby backup",
      Waterproof: "50m Swimming Waterproof",
      Features: "24/7 Heart Rate, SpO2, Auto Sleep, Call Alerts"
    },
    colors: ["#2d3436", "#0984e3", "#6c5ce7"]
  }
];

function ShopApp() {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");
  const [toasts, setToasts] = useState([]);
  
  // Checkout process states
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", phone: "", address: "", email: "" });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Sync wishlist and cart with localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("react_cart");
    const savedWishlist = localStorage.getItem("react_wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Show dynamic toast alert
  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  };

  // Add item to cart
  const addToCart = (product) => {
    let updatedCart = [...cart];
    const existingIndex = cart.findIndex((item) => item.id === product.id && item.color === (selectedColor || product.colors[0]));
    
    const chosenColor = selectedColor || product.colors[0];

    if (existingIndex > -1) {
      updatedCart[existingIndex].qty += 1;
    } else {
      updatedCart.push({ ...product, qty: 1, color: chosenColor });
    }
    
    setCart(updatedCart);
    localStorage.setItem("react_cart", JSON.stringify(updatedCart));
    showToast(`🛒 Added ${product.name} to Cart!`);
    setSelectedColor(""); // reset chosen color
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("react_cart", JSON.stringify(updatedCart));
    showToast("❌ Removed item from cart", "error");
  };

  // Update item quantity
  const updateQty = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].qty += delta;
    if (updatedCart[index].qty <= 0) {
      updatedCart.splice(index, 1);
      showToast("❌ Removed item from cart", "error");
    }
    setCart(updatedCart);
    localStorage.setItem("react_cart", JSON.stringify(updatedCart));
  };

  // Wishlist toggle
  const toggleWishlist = (product) => {
    let updatedWishlist = [...wishlist];
    const exists = wishlist.some((item) => item.id === product.id);
    
    if (exists) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
      showToast(`💔 Removed from Wishlist`, "error");
    } else {
      updatedWishlist.push(product);
      showToast(`❤️ Added to Wishlist!`);
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("react_wishlist", JSON.stringify(updatedWishlist));
  };

  // Apply Coupon code
  const applyCoupon = () => {
    setCouponError("");
    setCouponSuccess("");
    if (couponCode.toUpperCase() === "BOLTT20" || couponCode.toUpperCase() === "FIREBOLTT20") {
      setDiscountPercent(20);
      setCouponSuccess("🎉 20% discount applied successfully!");
      showToast("🎟️ 20% Discount applied!");
    } else if (couponCode.trim() === "") {
      setCouponError("Please enter a code");
    } else {
      setCouponError("❌ Invalid coupon code");
    }
  };

  // Calculate pricing
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const deliveryCharge = subtotal > 1500 || subtotal === 0 ? 0 : 99;
  const total = subtotal - discountAmount + deliveryCharge;

  // Checkout submit handler
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!checkoutForm.name || !checkoutForm.phone || !checkoutForm.address) {
      showToast("Please fill all required fields", "error");
      return;
    }
    setOrderConfirmed(true);
    showToast("🎉 Order placed successfully!");
    setCart([]);
    localStorage.removeItem("react_cart");
    setDiscountPercent(0);
    setCouponCode("");
  };

  // Open quick view details
  const openQuickView = (product) => {
    setQuickViewProduct(product);
    setSelectedColor(product.colors[0]);
  };

  // Filter products by category and search term
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="react-shop-wrapper">
      
      {/* Toast System */}
      <div className="react-toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`react-toast ${t.type}`}>
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* Floating Cart Button Sync with Header */}
      <div className="floating-cart-badge" onClick={() => setIsCartOpen(true)}>
        <span className="cart-icon">🛒</span>
        {cart.length > 0 && <span className="badge-count">{cart.reduce((s, i) => s + i.qty, 0)}</span>}
      </div>

      {/* Header controls for Search and Filter categories */}
      <div className="shop-header-panel">
        <div className="shop-title-section">
          <h2>🔥 Dynamic <span>Product Hub</span></h2>
          <p>Explore bestsellers, filter premium accessories, and order with instant discounts</p>
        </div>

        {/* Live Search and Filters Box */}
        <div className="shop-controls-bar">
          <div className="search-input-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search smartwatches, pods, or active health bands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery("")}>✕</button>
            )}
          </div>

          <div className="category-filter-pills">
            {["All", "Smartwatches", "Audio", "Fitness Bands"].map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product list Grid */}
      {filteredProducts.length > 0 ? (
        <div className="react-products-grid">
          {filteredProducts.map((p) => {
            const isInWishlist = wishlist.some((w) => w.id === p.id);
            const discountPercentVal = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
            return (
              <div key={p.id} className="react-product-card" data-aos="fade-up">
                
                {/* Image and badges wrapper */}
                <div className="card-media-wrapper">
                  <img src={p.image} alt={p.name} onClick={() => openQuickView(p)} />
                  <span className="discount-tag">-{discountPercentVal}% Off</span>
                  {p.badge && <span className="status-badge">{p.badge}</span>}
                  
                  {/* Actions overlay on hover */}
                  <div className="card-quick-actions">
                    <button className="action-btn wishlist-btn" onClick={() => toggleWishlist(p)}>
                      {isInWishlist ? "❤️" : "♡"}
                    </button>
                    <button className="action-btn quick-view-btn" onClick={() => openQuickView(p)}>
                      👁️ Quick View
                    </button>
                  </div>
                </div>

                {/* Details info */}
                <div className="card-details">
                  <div className="category-label">{p.category}</div>
                  <h3 className="product-title" onClick={() => openQuickView(p)}>{p.name}</h3>
                  
                  {/* Star rating */}
                  <div className="product-rating">
                    <span className="stars">{"★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "")}</span>
                    <span className="rating-val">{p.rating}</span>
                    <span className="reviews-count">({p.reviewsCount})</span>
                  </div>

                  {/* Pricing row */}
                  <div className="card-price-row">
                    <div className="prices">
                      <span className="current-price">₹{p.price.toLocaleString("en-IN")}</span>
                      <span className="original-price">₹{p.originalPrice.toLocaleString("en-IN")}</span>
                    </div>
                    <button className="btn-add-cart" onClick={() => addToCart(p)}>
                      Add +
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-products-found">
          <div className="alert-illustration">🔍</div>
          <h3>Oops! No products found matching your search.</h3>
          <p>Try searching for keywords like "Ninja", "Brillia", "Pods", or reset your filters.</p>
          <button className="btn-reset-filters" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
            Reset Shop Filter
          </button>
        </div>
      )}

      {/* QUICK VIEW MODAL COMPONENT */}
      {quickViewProduct && (
        <div className="quickview-modal-overlay" onClick={() => setQuickViewProduct(null)}>
          <div className="quickview-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={() => setQuickViewProduct(null)}>✕</button>
            
            <div className="quickview-grid">
              {/* Left Column: Image & Color variants */}
              <div className="quickview-visuals">
                <img src={quickViewProduct.image} alt={quickViewProduct.name} />
                
                <div className="color-selector">
                  <h4>Select Color:</h4>
                  <div className="colors-flex">
                    {quickViewProduct.colors.map((color) => (
                      <button
                        key={color}
                        className={`color-pill ${selectedColor === color ? "active" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Spec metadata, specifications, dynamic review write-in */}
              <div className="quickview-info">
                <span className="category-badge">{quickViewProduct.category}</span>
                <h2>{quickViewProduct.name}</h2>
                
                <div className="stars-info">
                  <span className="stars">{"★".repeat(Math.floor(quickViewProduct.rating))}</span>
                  <span>{quickViewProduct.rating} out of 5 stars</span>
                </div>

                <div className="prices-panel">
                  <span className="current">₹{quickViewProduct.price.toLocaleString("en-IN")}</span>
                  <span className="original">₹{quickViewProduct.originalPrice.toLocaleString("en-IN")}</span>
                  <span className="saved">Save ₹{(quickViewProduct.originalPrice - quickViewProduct.price).toLocaleString("en-IN")}!</span>
                </div>

                <p className="product-desc">{quickViewProduct.description}</p>

                {/* Technical Specifications table */}
                <div className="specs-table">
                  <h4>Technical Specifications:</h4>
                  <table>
                    <tbody>
                      {Object.entries(quickViewProduct.specs).map(([key, value]) => (
                        <tr key={key}>
                          <td className="spec-label">{key}</td>
                          <td className="spec-val">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Direct Action buttons */}
                <div className="quickview-actions">
                  <button className="btn-buy-now" onClick={() => { addToCart(quickViewProduct); setQuickViewProduct(null); setIsCartOpen(true); }}>
                    Instant Checkout
                  </button>
                  <button className="btn-wishlist-toggle" onClick={() => toggleWishlist(quickViewProduct)}>
                    {wishlist.some((w) => w.id === quickViewProduct.id) ? "❤️ Wishlisted" : "♡ Add to Wishlist"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SHOPPING CART DRAWER COMPONENT */}
      <div className={`cart-drawer-overlay ${isCartOpen ? "open" : ""}`} onClick={() => setIsCartOpen(false)}>
        <div className="cart-drawer-content" onClick={(e) => e.stopPropagation()}>
          
          <div className="cart-header">
            <h3>🛍️ Shopping Cart ({cart.reduce((s, i) => s + i.qty, 0)} Items)</h3>
            <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>✕</button>
          </div>

          <div className="cart-items-scroller">
            {cart.length > 0 ? (
              cart.map((item, idx) => (
                <div key={idx} className="cart-item-row">
                  <img src={item.image} alt={item.name} />
                  <div className="item-meta">
                    <h4>{item.name}</h4>
                    <div className="item-variant">
                      Color: <span className="color-indicator" style={{ backgroundColor: item.color }} />
                    </div>
                    <div className="item-pricing">
                      ₹{item.price.toLocaleString("en-IN")} each
                    </div>
                    
                    {/* Qty selectors */}
                    <div className="item-qty-adjust">
                      <button onClick={() => updateQty(idx, -1)}>-</button>
                      <span className="qty-val">{item.qty}</span>
                      <button onClick={() => updateQty(idx, 1)}>+</button>
                    </div>
                  </div>

                  <div className="item-subtotal-actions">
                    <span className="subtotal-val">₹{(item.price * item.qty).toLocaleString("en-IN")}</span>
                    <button className="btn-item-remove" onClick={() => removeFromCart(idx)}>✕</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart-message">
                <div className="empty-icon">🛒</div>
                <h4>Your cart is empty!</h4>
                <p>Add some premium smartwatches or audio wear to check out awesome promo offers.</p>
                <button className="shop-now-btn" onClick={() => setIsCartOpen(false)}>Shop Now</button>
              </div>
            )}
          </div>

          {/* Pricing totals, coupon application, and Checkout panel */}
          {cart.length > 0 && !isCheckingOut && (
            <div className="cart-footer-panel">
              
              {/* Coupon area */}
              <div className="coupon-box">
                <input
                  type="text"
                  placeholder="Enter Code (Use BOLTT20)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button onClick={applyCoupon}>Apply</button>
              </div>
              {couponError && <p className="coupon-error">{couponError}</p>}
              {couponSuccess && <p className="coupon-success">{couponSuccess}</p>}

              {/* Price summary lists */}
              <div className="price-calculations">
                <div className="price-row">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="price-row discount">
                    <span>Discount (20%):</span>
                    <span>- ₹{discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="price-row">
                  <span>Delivery Charge:</span>
                  <span>{deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}</span>
                </div>
                <div className="price-row final-total">
                  <span>Total Amount:</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Checkout Action triggers */}
              <button className="btn-proceed-checkout" onClick={() => setIsCheckingOut(true)}>
                Proceed to Checkout →
              </button>
            </div>
          )}

          {/* Checkout Info Form panel */}
          {isCheckingOut && !orderConfirmed && (
            <div className="checkout-form-panel">
              <div className="checkout-header-back">
                <button className="btn-back" onClick={() => setIsCheckingOut(false)}>← Back to Cart</button>
                <h4>Checkout Details</h4>
              </div>

              <form onSubmit={handleCheckoutSubmit} className="checkout-real-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={checkoutForm.phone}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={checkoutForm.email}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Shipping Address *</label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Complete delivery address"
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                  />
                </div>

                <div className="checkout-final-summary">
                  <div className="price-row final-total">
                    <span>Payable Total:</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                  <p className="pay-mode">💳 Cash on Delivery (COD) / UPI on Delivery</p>
                </div>

                <button type="submit" className="btn-submit-order">
                  Place Order & Confirm (₹{total.toLocaleString("en-IN")})
                </button>
              </form>
            </div>
          )}

          {/* ORDER CONFIRMED SUCCESS PANEL */}
          {orderConfirmed && (
            <div className="order-success-panel">
              <div className="success-lottie-icon">🎉</div>
              <h3>Order Placed Successfully!</h3>
              <p>Thank you, <strong>{checkoutForm.name}</strong>. Your order has been registered.</p>
              
              <div className="success-card-summary">
                <p><strong>Phone:</strong> {checkoutForm.phone}</p>
                <p><strong>Deliver to:</strong> {checkoutForm.address}</p>
                <p><strong>Total Amount Paid:</strong> ₹{total.toLocaleString("en-IN")}</p>
              </div>

              <div className="success-delivery-alert">
                🚚 Delivery expected within 3-5 business days. An SMS notification has been sent!
              </div>

              <button
                className="btn-continue-shopping"
                onClick={() => {
                  setOrderConfirmed(false);
                  setIsCheckingOut(false);
                  setIsCartOpen(false);
                }}
              >
                Continue Shopping
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

// Mount the React Application
const rootElement = document.getElementById("react-shop-root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<ShopApp />);
  console.log("%c🔥 React Dynamic Product Hub mounted successfully!", "color: #ff9500; font-size: 16px; font-weight: bold;");
}
