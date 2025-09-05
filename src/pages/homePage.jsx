export default function HomePage() {
  return (
    <div className="w-full">
        {/* Header Section */}
      <header className="bg-[#0a1e5c] text-white flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="CBC Logo" className="h-10 w-auto" /> {/* change path if needed */}
          <span className="text-xl font-bold">CBC Cosmetic Shop</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-base">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/products" className="hover:text-gray-300">Products</a>
          <a href="/reviews" className="hover:text-gray-300">Reviews</a>
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/contact" className="hover:text-gray-300">Contact Us</a>
        </nav>

        {/* Cart */}
        <div>
          <button className="hover:text-gray-300">
            🛒
          </button>
        </div>
      </header>

      {/* Featured Products */}
      <div className="mt-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-lg p-5 rounded-xl text-center">
          <img src="/blush powder.jpg" alt="powder" className="w-full h-60 object-cover rounded-lg"/>
          <h2 className="mt-2 text-xl font-semibold">Blush Powder</h2>
          <p className="text-gray-600">Rs. 1,400.00</p>
        </div>
        <div className="shadow-lg p-5 rounded-xl text-center">
          <img src="/face_cream.webp" alt="Cream" className="w-full h-60 object-cover rounded-lg"/>
          <h2 className="mt-2 text-xl font-semibold">Hydrating Face Cream</h2>
          <p className="text-gray-600">Rs. 2,200.00</p>
        </div>
        <div className="shadow-lg p-5 rounded-xl text-center">
          <img src="/nailpolish.webp" alt="Perfume" className="w-full h-60 object-cover rounded-lg"/>
          <h2 className="mt-2 text-xl font-semibold">Nail Polish</h2>
          <p className="text-gray-600">Rs. 650.00</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12 bg-blue-50 py-8">
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">Why Choose CBC Cosmetics?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
          <div className="text-center max-w-sm">
            <p className="italic">“The best cosmetic products I’ve ever used. My skin feels amazing!”</p>
            <h3 className="mt-2 font-semibold">- Happy Customer</h3>
          </div>
          <div className="text-center max-w-sm">
            <p className="italic">“Affordable, luxurious, and effective. Highly recommend CBC Shop.”</p>
            <h3 className="mt-2 font-semibold">- Beauty Blogger</h3>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 text-center py-8 bg-blue-900 text-white">
        <h2 className="text-2xl font-bold">Stay Updated with CBC Cosmetics</h2>
        <p className="mt-2">Subscribe to our newsletter for exclusive offers.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-4 px-4 py-2 rounded-l-lg w-64 text-white"
        />
        <button className="px-6 py-2 bg-blue-500 rounded-r-lg">Subscribe</button>
      </div>
    </div>
  );
}
