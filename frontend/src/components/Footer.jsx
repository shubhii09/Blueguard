import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">BlueGuard</h2>
          <p className="text-gray-400">
            Pure water, healthier life — har ghar ke liye.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/products" className="hover:text-white">
                BlueGuard Compact
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white">
                BlueGuard Pro
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white">
                BlueGuard Max
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-2 text-gray-400">
            <a
              href="mailto:support@blueguard.com"
              className="block hover:text-white"
            >
              support@blueguard.com
            </a>

            <a
              href="tel:+919876543210"
              className="block hover:text-white"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        © 2026 BlueGuard. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;