import { Droplet } from "lucide-react";
import { Link } from "react-router-dom";
function Cta() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-600 to-gray-700">
      <div className="w-[90%] md:w-[80%] max-w-5xl mx-auto py-14 md:py-16 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white/10 p-3 rounded-full">
            <Droplet className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Ready For Pure, Safe Drinking Water?
        </h2>

        <p className="text-blue-100 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Aaj hi apna free water quality check aur quote book karein.
        </p>
<Link
  to="/products"
  className="inline-block mt-8 bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300"
>
  View Products
</Link>
      </div>
    </section>
  );
}

export default Cta;