import {
  Droplet,
  Wrench,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Cta from "../components/Cta";
import { Link } from "react-router-dom";
import ro1 from "../assets/images/blury-table-designify-4.png";
import ro7 from "../assets/images/blury-table-designify-7.png";
import ro10 from "../assets/images/Chimney-e1702964936222.webp";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-blue-50">
        <div className="w-[90%] md:w-[80%] mx-auto py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              100% Certified RO Technology
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Pure Water, <span className="text-blue-600">Healthier Life</span>
            </h1>

            <p className="mt-5 text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
              Get 100% safe, mineral-rich drinking water for your home and
              office with BlueGuard's advanced RO purification systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>

                <Link
                  to="/products"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
                >
                  View Products
                </Link>
              </div>
            </div>

            <div className="mt-10 flex justify-center md:justify-start gap-6 sm:gap-8 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  10K+
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  15+
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Cities Served
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  24/7
                </p>
                <p className="text-xs sm:text-sm text-gray-500">Support</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1000&q=80"
              alt="RO Water Purifier"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl h-72 sm:h-96 md:h-[440px] object-cover rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute -bottom-5 -left-2 sm:-left-5 bg-white rounded-2xl shadow-lg px-4 sm:px-5 py-3 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Water Quality: Excellent
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white">
        <div className="w-[90%] md:w-[80%] mx-auto py-16 md:py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=700&q=80"
              alt="Clean RO Filtration System"
              className="w-full h-64 sm:h-80 object-cover rounded-3xl shadow-md transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-blue-600 font-semibold text-sm">
              ABOUT BLUEGUARD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Trusted Water Purification, Since Day One
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              BlueGuard provides safe, mineral-rich drinking water to
              thousands of families and businesses. Our advanced multi-stage
              RO technology removes harmful contaminants while retaining
              essential minerals — so every sip is pure and healthy.
            </p>
            <ul className="mt-6 space-y-3 inline-block text-left">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>
                Advanced 7-Stage Purification
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>
                Certified & Lab Tested
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>
                Free Installation & Support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-blue-50">
        <div className="w-[90%] md:w-[80%] mx-auto py-16 md:py-20">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm">
              OUR PRODUCTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Purifiers Built For Every Home
            </h2>
          </div>

    {/* Products Section */}
<section className="w-full bg-blue-50">
  <div className="w-[90%] md:w-[80%] mx-auto py-16 md:py-20">
    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold text-sm">
        OUR PRODUCTS
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        Purifiers Built For Every Home
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* RO */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="overflow-hidden">
          <img
            src={ro1}
            alt="BlueGuard Camry Black"
            className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            BlueGuard Camry Black
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            RO + UV + UF + TDS + Alkaline — 8 ltr storage, 15 LPH.
          </p>
          <Link
            to="/products"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            View Products
          </Link>
        </div>
      </div>

      {/* Purifier (Commercial) */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="overflow-hidden">
          <img
            src={ro7}
            alt="BlueGuard 25 LPH RO"
            className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            BlueGuard 25 LPH RO
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            RO + UV + TDS — 8 ltr storage, 25 LPH capacity.
          </p>
          <Link
            to="/products"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            View Products
          </Link>
        </div>
      </div>

      {/* Chimney */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="overflow-hidden">
          <img
            src={ro10}
            alt="BlueGuard SC BK 60"
            className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            BlueGuard SC BK 60
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Autoclean chimney — 60 cm, 1200 m³/hr suction.
          </p>
          <Link
            to="/products"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      </section>

      {/* Why BlueGuard Section */}
      <section className="w-full bg-white">
        <div className="w-[90%] md:w-[80%] mx-auto py-16 md:py-20">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Why Families Trust BlueGuard
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                100% Pure Water
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Multi-stage filtration for complete safety.
              </p>
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                Free Installation
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Expert technicians, same-day setup.
              </p>
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                24/7 Support
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Always available, call anytime.
              </p>
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                Certified Quality
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Lab-tested and fully certified systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export default Home;
