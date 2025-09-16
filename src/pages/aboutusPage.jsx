import Header from "../components/header";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
  return (
    <div className="w-full h-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Our Story Section */}
        <section className="flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto py-[40px] px-4">
          <img
            src="/makeup.webp"
            alt="Our Story"
            className="w-full md:w-1/2 h-[250px] md:h-[320px] object-cover rounded-xl shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-purple-900 mb-3">
              Our Story
            </h2>
            <p className="text-gray-700 mb-2">
              CBC Cosmetics was founded with the mission to provide
              high-quality, safe, and cruelty-free cosmetics to everyone. We
              believe beauty is about confidence, self-expression, and embracing
              individuality.
            </p>
            <p className="text-gray-700">
              From luxurious face creams to vibrant makeup products, we
              carefully craft every item to help you shine inside and out. Your
              satisfaction and confidence are our top priority.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-blue-50 py-[40px] px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Mission, Vision & Values
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white shadow-md rounded-xl p-5 max-w-sm">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                Mission
              </h3>
              <p className="text-gray-700">
                To provide luxurious, effective, and safe cosmetics that empower
                people to feel confident in their skin.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-5 max-w-sm">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                Vision
              </h3>
              <p className="text-gray-700">
                To be a globally recognized cosmetic brand known for quality,
                innovation, and inclusivity.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-5 max-w-sm">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                Values
              </h3>
              <p className="text-gray-700">
                Cruelty-free, eco-conscious, inclusive, innovative, and
                committed to customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-[40px] px-4 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white shadow-md rounded-xl p-5 w-56">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Founder"
                className="rounded-full w-20 h-20 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-purple-800">Jane Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-5 w-56">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Makeup Expert"
                className="rounded-full w-20 h-20 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-purple-800">
                John Smith
              </h3>
              <p className="text-gray-700">Lead Makeup Artist</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-5 w-56">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Product Designer"
                className="rounded-full w-20 h-20 mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-purple-800">
                Emily Rose
              </h3>
              <p className="text-gray-700">Product Designer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
