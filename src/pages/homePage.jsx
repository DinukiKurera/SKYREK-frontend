import Header from "../components/header"; 
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
     
      <Header />
      
      <main className="flex-grow">
   
      <div className="mt-4 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to={"/overview/COSM007"}  className="shadow-lg p-5 rounded-xl text-center">
          <img src="/blush powder.jpg" alt="powder" className="w-full h-60 object-cover rounded-lg"/>
          <h2 className="mt-2 text-xl font-semibold">Blush Powder</h2>
          <p className="text-gray-600">Rs. 1,400.00</p>
        </Link>
        <Link to={"/overview/COSM002"} className="shadow-lg p-5 rounded-xl text-center">
          <img src="/face_cream.webp" alt="Cream" className="w-full h-60 object-cover rounded-lg"/>
          <h2 className="mt-2 text-xl font-semibold">Hydrating Face Cream</h2>
          <p className="text-gray-600">Rs. 2,200.00</p>
        </Link>
        <Link to={"/overview/COSM010"} className="shadow-lg p-5 rounded-xl text-center">
          <img src="/nailpolish.webp" alt="Perfume" className="w-full h-60 object-cover rounded-lg"/>
          <h2 className="mt-2 text-xl font-semibold">Nail Polish</h2>
          <p className="text-gray-600">Rs. 650.00</p>
        </Link>
      </div>

  
      <div className="mt-0 bg-blue-50 py-4">
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">Why Choose CBC Cosmetics?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
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
      </main>
      
      <footer className="text-center py-8 bg-blue-900 text-white">
        <h2 className="text-2xl font-bold">Stay Updated with CBC Cosmetics</h2>
        <p className="mt-2">Subscribe to our newsletter for exclusive offers.</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg w-64 text-white outline-none"
          />
          <button className="px-6 py-2 bg-blue-500 rounded-r-lg">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}