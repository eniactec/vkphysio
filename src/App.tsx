import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Stethoscope, 
  Users, 
  Smartphone,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  ShoppingCart,
  Package,
  ShoppingBag,
  LogOut
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Sports Rehabilitation",
    description: "Specialized recovery for athletes to return to peak performance safely and quickly.",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Post-Surgery Care",
    description: "Tailored rehabilitation programs following orthopedic and neurological surgeries.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Manual Therapy",
    description: "Hands-on techniques to reduce pain and improve joint and muscle mobility.",
    icon: <Stethoscope className="w-6 h-6" />,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Geriatric Wellness",
    description: "Improving quality of life through mobility training and fall prevention for seniors.",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  }
];

const expertise = [
  "Evidence-based treatment protocols",
  "State-of-the-art diagnostic tools",
  "Certified specialist therapists",
  "Personalized home exercise plans",
  "Holistic recovery approach",
  "Modern clinic environment"
];

const initialProducts = [
  {
    id: 1,
    name: "Precision Muscle Roller",
    category: "Recovery",
    currency: "USD",
    price: 45.00,
    description: "High-density EVA foam for target trigger point release.",
    image: "https://images.unsplash.com/photo-1600880210819-3506c9a918ca?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Symmetric Resistance Set",
    category: "Strength",
    currency: "USD",
    price: 32.00,
    description: "Variable tension bands for progressive rehabilitation.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Ergo-Lumbar Support",
    category: "Postural",
    currency: "USD",
    price: 89.00,
    description: "Biometric contouring for spinal alignment correction.",
    image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa89?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Clinical Cold Compression",
    category: "Treatment",
    currency: "USD",
    price: 24.00,
    description: "Anatomical wrap for joint inflammation management.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa20e79c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Biotic K-Tape",
    category: "Support",
    currency: "USD",
    price: 18.00,
    description: "Premium elastic adhesive for functional movement support.",
    image: "https://images.unsplash.com/photo-1599058917232-d750c8217031?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Posture Alignment Vest",
    category: "Postural",
    currency: "USD",
    price: 65.00,
    description: "Neural feedback system for upper thoracic correction.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600"
  }
];

const AdminLogin = ({ setIsAdminAuth, setCurrentView }: any) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsAdminAuth(true);
      setCurrentView('admin-panel');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-stone-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-12 border border-brand-stone-200 w-full max-w-md">
        <div className="label-technical mb-6 text-center">System Access</div>
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          {error && <div className="text-red-500 text-xs font-bold uppercase">{error}</div>}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Username</label>
            <input 
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Password</label>
            <input 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium" 
            />
          </div>
          <button type="submit" className="geometric-btn-dark w-full mt-8">Secure Login</button>
        </form>
      </div>
    </div>
  );
};

const AdminPanel = ({ products, setProducts, orders, setOrders, setCurrentView }: any) => {
  const [activeTab, setActiveTab] = useState<'inventory' | 'orders'>('inventory');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Recovery');
  const [currency, setCurrency] = useState('USD');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      category,
      currency,
      price: parseFloat(price) || 0,
      description,
      image: image || 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&w=600&q=80'
    };
    setProducts([...products, newProduct]);
    setName('');
    setCategory('Recovery');
    setCurrency('USD');
    setPrice('');
    setDescription('');
    setImage('');
  };

  const handleProcessOrder = (orderId: number) => {
    setOrders(orders.map((o: any) => o.id === orderId ? { ...o, status: 'Processed' } : o));
  };

  const formatPrice = (priceAmt: number, curr: string) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: curr || 'USD' }).format(priceAmt);
  };

  return (
    <div className="flex h-screen bg-brand-stone-50 pt-20">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-brand-stone-200 flex flex-col justify-between py-8">
        <div>
          <div className="px-8 mb-8 text-xs font-bold uppercase tracking-widest text-brand-stone-400">Admin Control</div>
          <nav className="space-y-2 px-4">
            <button 
              onClick={() => setActiveTab('inventory')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'inventory' ? 'bg-brand-stone-50 text-brand-primary border-l-2 border-brand-primary' : 'text-brand-stone-500 hover:bg-brand-stone-50 hover:text-brand-stone-900 border-l-2 border-transparent'}`}
            >
              <Package className="w-4 h-4" />
              Inventory
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'orders' ? 'bg-brand-stone-50 text-brand-primary border-l-2 border-brand-primary' : 'text-brand-stone-500 hover:bg-brand-stone-50 hover:text-brand-stone-900 border-l-2 border-transparent'}`}
            >
              <ShoppingBag className="w-4 h-4" />
              Orders
              {orders.filter((o: any) => o.status === 'Pending').length > 0 && (
                <span className="ml-auto bg-brand-primary text-white text-[10px] px-2 py-0.5 rounded-full">
                  {orders.filter((o: any) => o.status === 'Pending').length}
                </span>
              )}
            </button>
          </nav>
        </div>
        <div className="px-4">
          <button 
            onClick={() => setCurrentView('landing')}
            className="w-full flex items-center justify-center gap-2 geometric-btn-outline py-3 text-xs uppercase"
          >
            <LogOut className="w-4 h-4" />
            Exit Dashboard
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-brand-stone-50 p-12">
        <div className="max-w-5xl">
          <div className="mb-12 border-b border-brand-stone-200 pb-8 flex items-end">
            <div>
              <h1 className="text-4xl font-bold uppercase tracking-tighter italic">
                {activeTab === 'inventory' ? 'Inventory Manager.' : 'Order Processing.'}
              </h1>
            </div>
          </div>

          {activeTab === 'inventory' ? (
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-10 border border-brand-stone-200">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8">Add New Product</h2>
                <form onSubmit={handleAddProduct} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Product Name</label>
                    <input required value={name} onChange={e => setName(e.target.value)} className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Category</label>
                    <select required value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium appearance-none cursor-pointer">
                      <option value="Recovery">Recovery</option>
                      <option value="Strength">Strength</option>
                      <option value="Postural">Postural</option>
                      <option value="Treatment">Treatment</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <div className="space-y-2 flex-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Currency</label>
                      <select required value={currency} onChange={e => setCurrency(e.target.value)} className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium appearance-none cursor-pointer">
                        <option value="USD">USD ($)</option>
                        <option value="INR">INR (₹)</option>
                      </select>
                    </div>
                    <div className="space-y-2 flex-[2]">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Price Amount</label>
                      <input required type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Description</label>
                    <textarea required value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-transparent border border-brand-stone-200 p-3 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium h-24 mt-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Image URL</label>
                    <input required value={image} onChange={e => setImage(e.target.value)} className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium" />
                  </div>
                  <button type="submit" className="geometric-btn-dark w-full mt-8">Publish Item</button>
                </form>
              </div>

              <div>
                 <h2 className="text-lg font-bold uppercase tracking-widest mb-6">Registered Inventory ({products.length})</h2>
                 <div className="space-y-4 max-h-[700px] overflow-y-auto no-scrollbar pr-4">
                    {products.map((p: any) => (
                      <div key={p.id} className="bg-white p-4 border border-brand-stone-200 flex gap-6 items-center">
                        <img src={p.image} alt={p.name} referrerPolicy="no-referrer" className="w-16 h-16 object-cover bg-brand-stone-50" />
                        <div>
                           <div className="text-sm font-bold uppercase tracking-widest mb-1">{p.name}</div>
                           <div className="text-[10px] text-brand-stone-500 uppercase font-bold tracking-widest">[{p.category}] - {formatPrice(p.price, p.currency)}</div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-10 border border-brand-stone-200">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-8">Registered Orders ({orders.length})</h2>
              {orders.length === 0 ? (
                <div className="text-xs font-bold uppercase text-brand-stone-400 tracking-widest py-8 text-center border border-dashed border-brand-stone-200">No orders found.</div>
              ) : (
                <div className="space-y-6">
                  {orders.map((order: any) => (
                    <div key={order.id} className="border border-brand-stone-200 p-6 flex flex-col md:flex-row justify-between gap-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-2 font-mono">Order #{order.id}</div>
                        <div className="text-[10px] text-brand-stone-500 uppercase font-bold tracking-widest mb-4">{new Date(order.date).toLocaleString()}</div>
                        <div className="text-sm font-medium mb-1">{order.customer.name}</div>
                        <div className="text-xs text-brand-stone-500 mb-4">{order.customer.email} • {order.customer.address}</div>
                        <div className="space-y-2">
                          {order.items.map((item: any, i: number) => (
                            <div key={i} className="text-xs flex gap-2">
                              <span className="font-bold">{item.quantity}x</span>
                              <span>{item.product.name}</span>
                              <span className="text-brand-stone-500 font-mono">({formatPrice(item.product.price, item.product.currency)})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between min-w-[150px]">
                        <div className="text-xl font-bold font-mono">{formatPrice(order.total, 'USD')}</div>
                        <div className="flex flex-col items-end gap-3 mt-4">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 ${order.status === 'Processed' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                            {order.status}
                          </span>
                          {order.status === 'Pending' && (
                            <button 
                              onClick={() => handleProcessOrder(order.id)}
                              className="text-[10px] geometric-btn-dark py-2 px-4 uppercase"
                            >
                              Mark Processed
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'shop' | 'product' | 'cart' | 'checkout' | 'admin-login' | 'admin-panel'>('landing');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [products, setProducts] = useState(initialProducts);
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <div className="min-h-screen font-sans bg-brand-stone-50 text-brand-stone-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-white/80 backdrop-blur-sm py-6'
      } border-brand-stone-200`}>
        <div className="max-w-7xl mx-auto px-16 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setCurrentView('landing')}>
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=200" 
              alt="VK Logo" 
              className="h-8 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-xl tracking-tighter uppercase">VK<span className="font-light opacity-50">Physio</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-xs font-semibold uppercase tracking-widest">
            <a 
              href="#services" 
              onClick={(e) => {
                if (currentView === 'shop') setCurrentView('landing');
              }}
              className="text-brand-stone-500 hover:text-brand-primary transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                if (currentView === 'shop') setCurrentView('landing');
              }}
              className="text-brand-stone-500 hover:text-brand-primary transition-colors"
            >
              Philosophy
            </a>
            <button 
              onClick={() => setCurrentView('shop')}
              className={`${currentView === 'shop' ? 'text-brand-primary' : 'text-brand-stone-500'} hover:text-brand-primary transition-colors`}
            >
              Shop
            </button>
            <button 
              onClick={() => setCurrentView('cart')}
              className={`${currentView === 'cart' || currentView === 'checkout' ? 'text-brand-primary' : 'text-brand-stone-500'} hover:text-brand-primary transition-colors relative`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cart.reduce((sum, item) => sum + item.quantity, 0) > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
            <button className="geometric-btn-dark">Book Initial Scan</button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-stone-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* View Rendering */}
      {currentView === 'landing' ? (
        <>
          {/* Hero Section */}
          <section className="relative pt-20 border-b border-brand-stone-200 flex flex-col lg:flex-row min-h-[600px]">
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white border-r border-brand-stone-200">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="label-technical mb-6">
                  Clinical Excellence
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-8 uppercase">
                  Move Better.<br/>Recalibrate<br/>Strength.
                </h1>
                <p className="text-brand-stone-500 max-w-sm text-sm leading-relaxed mb-10 underline decoration-brand-stone-100 underline-offset-8">
                  Expert-led physiotherapy designed to help you recover from injury, manage chronic pain, and reach your physical potential through biomechanical symmetry.
                </p>
                
                <div className="flex items-center gap-8 mb-10">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">500+</span>
                    <span className="text-[9px] uppercase tracking-wider text-brand-stone-400 font-bold">Active Patients</span>
                  </div>
                  <div className="w-px h-8 bg-brand-stone-200"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">08</span>
                    <span className="text-[9px] uppercase tracking-wider text-brand-stone-400 font-bold">Senior Experts</span>
                  </div>
                  <div className="w-px h-8 bg-brand-stone-200"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">98%</span>
                    <span className="text-[9px] uppercase tracking-wider text-brand-stone-400 font-bold">Recovery Rate</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="geometric-btn-dark">
                    Book Initial Scan
                  </button>
                  <button className="geometric-btn-outline uppercase" onClick={() => setCurrentView('shop')}>
                    Browse Shop
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 relative bg-brand-stone-100 overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`border-r border-b border-white/40 ${i === 5 ? 'bg-brand-primary/10' : ''}`}></div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center p-12 lg:p-20"
              >
                <div className="w-full h-full border border-brand-stone-300 flex items-center justify-center overflow-hidden grayscale brightness-110 contrast-125">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1000" 
                    alt="Clinical setting" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Grid (The 4-column strip style) */}
          <section id="services" className="grid md:grid-cols-2 lg:grid-cols-4 bg-white border-b border-brand-stone-200">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                className={`p-8 border-r border-brand-stone-200 flex flex-col justify-between hover:bg-brand-stone-50 group cursor-pointer transition-colors relative h-full min-h-[220px] ${idx === 3 ? 'bg-brand-primary text-white border-r-0' : ''}`}
              >
                <span className={`font-mono text-xs ${idx === 3 ? 'text-white/40' : 'text-brand-stone-300'}`}>0{idx + 1}.</span>
                <div className="mb-2">
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{service.title}</h3>
                  <p className={`text-[11px] leading-relaxed ${idx === 3 ? 'text-white/70' : 'text-brand-stone-500'}`}>
                    {service.description}
                  </p>
                </div>
                {idx !== 3 && <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-primary group-hover:w-full transition-all duration-500"></div>}
              </motion.div>
            ))}
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-brand-stone-50 border-b border-brand-stone-200">
            <div className="max-w-7xl mx-auto px-16">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative">
                  <div className="border border-brand-stone-200 p-4 bg-white">
                    <div className="grayscale contrast-125 brightness-90">
                      <img 
                        src="https://lh3.googleusercontent.com/p/AF1QipMOuuY9Y44Hd16TtyYadFkMYQvd70eSvymsq6PH=w243-h406-n-k-no-nu" 
                        alt="Clinical Practice" 
                        className="w-full object-cover aspect-[4/5]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary/5 -z-10 rotate-12" />
                </div>

                <div>
                  <div className="label-technical mb-6">Our Philosophy</div>
                  <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 uppercase leading-tight italic">
                    Precision<br/><span className="text-brand-primary not-italic">over repetition.</span>
                  </h2>
                  <div className="grid gap-6">
                    {expertise.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 py-3 border-b border-brand-stone-200">
                        <span className="text-brand-primary font-mono text-[10px]">[{idx + 1}]</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-stone-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 flex gap-4">
                    <button className="geometric-btn-dark">Start Assessment</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-white border-b border-brand-stone-200">
            <div className="max-w-7xl mx-auto px-16">
              <div className="grid lg:grid-cols-2 gap-20">
                <div>
                  <div className="label-technical mb-6">Connect</div>
                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8 uppercase">Let's Restore<br/>Symmetry.</h2>
                  
                  <div className="space-y-12 mt-12">
                    <div className="flex gap-12 flex-wrap">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-stone-400 mb-2">Location</p>
                        <p className="text-sm font-bold uppercase leading-relaxed">
                          123 Health Plaza, NY 10012<br/>Clinical District, Suite 404
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-stone-400 mb-2">Contact</p>
                        <p className="text-sm font-bold uppercase">+1 (555) 0123-4567<br/>hello@kineticcare.com</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-stone-400 mb-2">Clinic Hours</p>
                      <div className="grid grid-cols-2 gap-4 max-w-sm">
                        <div className="text-[10px] font-bold py-2 border-b border-brand-stone-100">MON - FRI</div>
                        <div className="text-[10px] text-right py-2 border-b border-brand-stone-100">08:00 — 19:00</div>
                        <div className="text-[10px] font-bold">SATURDAY</div>
                        <div className="text-[10px] text-right">09:00 — 14:00</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-brand-stone-200 p-12 bg-white">
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Full Name</label>
                      <input className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium uppercase placeholder:text-brand-stone-100" placeholder="Required" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Email Address</label>
                      <input className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium uppercase placeholder:text-brand-stone-100" placeholder="Required" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Treatment interest</label>
                      <select className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm uppercase appearance-none cursor-pointer">
                        <option>Sports Rehabilitation</option>
                        <option>Post-Surgery Rehab</option>
                        <option>Chronic Pain Management</option>
                        <option>Clinical Pilates</option>
                      </select>
                    </div>

                    <button className="geometric-btn-dark w-full mt-8">
                      Submit Initial Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : currentView === 'shop' ? (
        <div className="pt-32 pb-24 bg-brand-stone-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-16">
            <div className="mb-16">
              <div className="label-technical mb-4">Equipment & Support</div>
              <h1 className="text-6xl font-bold uppercase tracking-tighter mb-8 italic">Clinical Shop.</h1>
              <div className="flex gap-4 border-b border-brand-stone-200 pb-4 overflow-x-auto no-scrollbar">
                {["All Items", "Recovery", "Strength", "Postural", "Treatment"].map((cat) => (
                  <button 
                    key={cat} 
                    className="text-[10px] font-bold uppercase tracking-widest px-4 py-1 hover:text-brand-primary transition-colors whitespace-nowrap"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {products.map((product) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <div className="aspect-square bg-white border border-brand-stone-200 p-8 mb-6 relative overflow-hidden group-hover:border-brand-primary transition-colors duration-500">
                    <div className="grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 h-full w-full">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute top-4 left-4 label-technical bg-white/90 px-2 py-1">
                      [{product.category}]
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-bold uppercase tracking-wider">{product.name}</h3>
                    <span className="font-mono text-xs font-bold text-brand-primary">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: product.currency || 'USD' }).format(product.price)}
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-stone-500 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <button 
                    className="w-full geometric-btn-outline group-hover:bg-brand-stone-900 group-hover:text-white transition-all duration-300 uppercase"
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setCurrentView('product');
                    }}
                  >
                    View Details
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : currentView === 'product' && selectedProduct ? (
        <div className="pt-32 pb-24 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-16">
            <button 
              onClick={() => setCurrentView('shop')}
              className="mb-8 flex items-center text-xs font-bold uppercase tracking-widest text-brand-stone-500 hover:text-brand-primary"
            >
              <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
              Back to Shop
            </button>
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="aspect-square bg-brand-stone-50 border border-brand-stone-200 p-12">
                <div className="grayscale contrast-125 brightness-90 w-full h-full">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="label-technical mb-6">[{selectedProduct.category}]</div>
                <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-4">
                  {selectedProduct.name}
                </h1>
                <div className="font-mono text-xl font-bold text-brand-primary mb-8">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: selectedProduct.currency || 'USD' }).format(selectedProduct.price)}
                </div>
                <p className="text-brand-stone-500 leading-relaxed max-w-md mb-12">
                  {selectedProduct.description} 
                  <br/><br/>
                  Advanced biomechanical support designed for clinical-grade recovery and symmetry restoration.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => {
                      const existing = cart.find(item => item.product.id === selectedProduct.id);
                      if (existing) {
                        setCart(cart.map(item => item.product.id === selectedProduct.id ? { ...item, quantity: item.quantity + 1 } : item));
                      } else {
                        setCart([...cart, { product: selectedProduct, quantity: 1 }]);
                      }
                      setCurrentView('cart');
                    }}
                    className="geometric-btn-dark w-full md:w-auto uppercase px-12"
                  >
                    Add to Cart
                  </button>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-stone-400 mt-4">
                    In Stock • Ready to ship
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : currentView === 'cart' ? (
        <div className="pt-32 pb-24 bg-brand-stone-50 min-h-screen">
          <div className="max-w-4xl mx-auto px-16">
            <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8 italic">Your Cart.</h1>
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-brand-stone-500 mb-8">Your cart is currently empty.</p>
                <button onClick={() => setCurrentView('shop')} className="geometric-btn-dark uppercase">Continue Shopping</button>
              </div>
            ) : (
              <div className="bg-white border border-brand-stone-200 p-8">
                <div className="space-y-6 mb-8">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-center border-b border-brand-stone-200 pb-6 last:border-0 last:pb-0">
                      <div className="w-24 h-24 bg-brand-stone-50 flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale contrast-125 brightness-90" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold uppercase tracking-widest text-sm mb-1">{item.product.name}</h3>
                        <div className="text-[10px] text-brand-stone-400 font-bold uppercase tracking-widest mb-2">[{item.product.category}]</div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-brand-stone-200">
                            <button 
                              onClick={() => {
                                if (item.quantity > 1) {
                                  setCart(cart.map(i => i.product.id === item.product.id ? { ...i, quantity: i.quantity - 1 } : i));
                                } else {
                                  setCart(cart.filter(i => i.product.id !== item.product.id));
                                }
                              }}
                              className="px-3 text-brand-stone-500 hover:text-brand-stone-900"
                            >-</button>
                            <span className="text-xs font-mono font-bold w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => setCart(cart.map(i => i.product.id === item.product.id ? { ...i, quantity: i.quantity + 1 } : i))}
                              className="px-3 text-brand-stone-500 hover:text-brand-stone-900"
                            >+</button>
                          </div>
                          <button 
                            onClick={() => setCart(cart.filter(i => i.product.id !== item.product.id))}
                            className="text-[10px] uppercase font-bold tracking-widest text-red-500 hover:text-red-700 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-brand-primary">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: item.product.currency || 'USD' }).format(item.product.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-brand-stone-200 pt-8 mt-8 flex flex-col items-end">
                  <div className="flex justify-between w-full max-w-sm mb-2 text-sm font-bold uppercase tracking-widest text-brand-stone-500">
                    <span>Subtotal</span>
                    <span className="font-mono text-brand-stone-900">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0))}
                    </span>
                  </div>
                  <div className="text-[10px] text-brand-stone-400 font-bold uppercase tracking-widest mb-8">Shipping & taxes calculated at checkout</div>
                  <button onClick={() => setCurrentView('checkout')} className="geometric-btn-dark w-full max-w-sm uppercase text-center block">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : currentView === 'checkout' ? (
        <div className="pt-32 pb-24 bg-brand-stone-50 min-h-screen">
          <div className="max-w-3xl mx-auto px-16">
            <button 
              onClick={() => setCurrentView('cart')}
              className="mb-8 flex items-center text-xs font-bold uppercase tracking-widest text-brand-stone-500 hover:text-brand-primary"
            >
              <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
              Return to Cart
            </button>
            <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8 italic">Checkout.</h1>
            <div className="bg-white p-12 border border-brand-stone-200">
              <form onSubmit={e => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newOrder = {
                  id: Date.now(),
                  date: new Date().toISOString(),
                  status: 'Pending',
                  items: [...cart],
                  total: cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
                  customer: {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    address: formData.get('address')
                  }
                };
                setOrders([newOrder, ...orders]);
                setCart([]);
                alert(`Order #${newOrder.id} placed successfully!`);
                setCurrentView('landing');
              }} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Full Name</label>
                  <input required name="name" className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Email Address</label>
                  <input required type="email" name="email" className="w-full bg-transparent border-b border-brand-stone-200 py-2 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-stone-400">Shipping Address</label>
                  <textarea required name="address" className="w-full bg-transparent border border-brand-stone-200 p-3 focus:outline-none focus:border-brand-primary transition-colors text-sm font-medium h-24 mt-2" />
                </div>
                
                <div className="border-t border-brand-stone-200 pt-8 mt-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold uppercase tracking-widest">Total to Pay</span>
                    <span className="text-2xl font-mono font-bold text-brand-primary">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0))}
                    </span>
                  </div>
                  <button type="submit" className="geometric-btn-dark w-full uppercase">Confirm & Pay</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : currentView === 'admin-login' ? (
        <AdminLogin setIsAdminAuth={setIsAdminAuth} setCurrentView={setCurrentView} />
      ) : currentView === 'admin-panel' && isAdminAuth ? (
        <AdminPanel products={products} setProducts={setProducts} orders={orders} setOrders={setOrders} setCurrentView={setCurrentView} />
      ) : null}

      {/* Footer */}
      <footer className="h-[120px] bg-brand-stone-900 flex items-center px-16 justify-between text-white/40 text-[9px] uppercase tracking-[0.2em] font-bold">
        <div className="flex gap-8">
          <span>&copy; 2026 VK Clinical</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Symmetry</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setCurrentView(isAdminAuth ? 'admin-panel' : 'admin-login')}>System Admin</span>
        </div>
        <div className="flex items-center gap-12">
          <div><span className="text-white mr-2">New York:</span> +1 212 555 0198</div>
          <div className="hidden md:block"><span className="text-white mr-2">Head Office:</span> Clinical District, 404</div>
        </div>
      </footer>
    </div>
  );
}
