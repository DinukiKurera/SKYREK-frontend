import Header from "../components/header";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow">
        {/* Contact Info */}
        <div className="mt-4 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="shadow-lg p-5 rounded-xl">
            <h2 className="text-xl font-semibold text-blue-900">Email Us</h2>
            <p className="text-gray-600 mt-2">support@cbccosmetics.com</p>
          </div>
          <div className="shadow-lg p-5 rounded-xl">
            <h2 className="text-xl font-semibold text-blue-900">Call Us</h2>
            <p className="text-gray-600 mt-2">+94 71 123 4567</p>
          </div>
          <div className="shadow-lg p-5 rounded-xl">
            <h2 className="text-xl font-semibold text-blue-900">Visit Us</h2>
            <p className="text-gray-600 mt-2">123 Beauty Lane, Colombo, Sri Lanka</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8 px-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Send Us a Message
          </h2>
          <form className="bg-white shadow-lg p-6 rounded-xl space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-lg outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-lg outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border px-4 py-2 rounded-lg outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 bg-blue-900 text-white">
        <h2 className="text-2xl font-bold">Stay Connected with CBC Cosmetics</h2>
        <p className="mt-2">Follow us on social media for updates & offers.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-blue-300">Instagram</a>
          <a href="#" className="hover:text-blue-300">Facebook</a>
          <a href="#" className="hover:text-blue-300">TikTok</a>
        </div>
      </footer>
    </div>
  );
}
