import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  IndianRupee,
  ArrowRight,
  Star,
  Check,
  MessageCircle,
  Search,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import {
  domesticRO,
  commercialRO,
  chimneys,
  roParts,
  allTechs,
  categories,
} from "./ProductData";

/* ============================================================
   SPACING SCALE (used consistently everywhere below)
   container:   w-[92%] md:w-[88%] xl:w-[80%] max-w-7xl mx-auto
   section gap: space-y-14  (between category blocks)
   card grid:   gap-5 md:gap-6
   card pad:    p-5
   radius:      rounded-2xl
   ============================================================ */

const container = "w-[92%] md:w-[88%] xl:w-[80%] max-w-7xl mx-auto";

/* ---------- product image ---------- */

function ProductImage({ product }) {
  return (
    <div className="aspect-[4/3] w-full rounded-xl bg-[#EAF3FC] border border-[#D7E7FB] flex items-center justify-center overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

/* ---------- hero ---------- */

function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3C6B]">
      <div className={`${container} py-14 md:py-20 flex items-center justify-between gap-10`}>
        <div>
          <span className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
            Blue Guard Range
          </span>
          <h1 className="text-4xl md:text-6xl text-white leading-[1.05]">
            Our Products
          </h1>
          <p className="mt-4 text-[#CFE3FB] max-w-md leading-relaxed">
            Domestic and commercial RO purifiers, chimneys, and genuine spare
            parts — built for Dehradun's water and your kitchen.
          </p>
        </div>

        <div className="hidden md:block shrink-0">
          <svg width="140" height="140" viewBox="0 0 150 150" aria-hidden="true">
            <circle cx="75" cy="75" r="70" fill="none" stroke="#2563EB" strokeOpacity="0.35" strokeWidth="1.5" />
            <circle cx="75" cy="75" r="50" fill="none" stroke="#93C5FD" strokeOpacity="0.4" strokeWidth="1.5" />
            <rect x="52" y="45" width="46" height="66" rx="8" fill="#FFFFFF" fillOpacity="0.9" />
            <rect x="60" y="56" width="30" height="18" rx="3" fill="#2563EB" />
            <circle cx="75" cy="92" r="7" fill="#2563EB" fillOpacity="0.7" />
          </svg>
        </div>
      </div>

      <svg viewBox="0 0 1200 60" className="w-full h-8 md:h-12" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="#EAF3FC" />
      </svg>
    </section>
  );
}

/* ---------- sidebar (sits beside the products) ---------- */

function Sidebar({ activeCategory, setActiveCategory, selectedTechs, toggleTech, onReset }) {
  return (
    <aside className="w-full md:w-60 shrink-0 md:sticky md:top-6 h-fit bg-white border border-[#D7E7FB] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center gap-2 text-[#0B3C6B] font-medium text-sm">
          <SlidersHorizontal size={15} /> Filters
        </span>
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs text-[#2563EB] hover:text-[#1D4ED8]"
        >
          <RotateCcw size={11} /> Reset
        </button>
      </div>

      <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-[#7C97B5] mb-2">
        Category
      </p>
      <div className="flex flex-col gap-1 mb-5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`text-left text-sm px-3 py-1.5 rounded-full transition-colors ${
              activeCategory === c
                ? "bg-[#2563EB] text-white"
                : "text-[#0B3C6B] hover:bg-[#EAF3FC]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-[#7C97B5] mb-2">
        Purification Tech
      </p>
      <div className="flex flex-col gap-1.5">
        {allTechs.map((t) => (
          <label key={t} className="flex items-center gap-2 text-sm text-[#4A607A]">
            <input
              type="checkbox"
              checked={selectedTechs.includes(t)}
              onChange={() => toggleTech(t)}
              className="accent-[#2563EB] w-3.5 h-3.5"
            />
            {t}
          </label>
        ))}
      </div>
    </aside>
  );
}

/* ---------- search + sort bar ---------- */

function SearchSortBar({ search, setSearch, sortOrder, setSortOrder }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 bg-white border border-[#D7E7FB] rounded-2xl p-3.5">
      <div className="flex items-center gap-2 flex-1 bg-[#EAF3FC] rounded-full px-4 py-2">
        <Search size={15} className="text-[#7C97B5] shrink-0" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="bg-transparent outline-none text-sm text-[#0B3C6B] placeholder:text-[#7C97B5] w-full"
        />
      </div>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="text-sm text-[#0B3C6B] bg-white border border-[#D7E7FB] rounded-full px-4 py-2 outline-none"
      >
        <option value="featured">Featured First</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  );
}

/* ---------- product card ---------- */

function priceToNumber(p) {
  if (!p) return 0;
  return parseInt(String(p).replace(/,/g, ""), 10) || 0;
}

function ProductCard({ product }) {
  const [compare, setCompare] = useState(false);

  return (
    <div className="bg-white border border-[#D7E7FB] rounded-2xl p-5 flex flex-col hover:shadow-lg hover:shadow-[#2563EB]/10 transition-shadow">
      <div className="flex items-center gap-2 mb-3 min-h-[26px]">
        {product.badge && (
          <span className="text-xs font-medium text-white bg-[#2563EB] px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span className="text-xs font-medium text-[#2563EB] bg-[#EAF3FC] border border-[#D7E7FB] px-3 py-1 rounded-full ml-auto">
            {Math.round((1 - priceToNumber(product.price) / priceToNumber(product.originalPrice)) * 100)}% OFF
          </span>
        )}
      </div>

      <ProductImage product={product} />

      <div className="flex items-center gap-1.5 mt-4 text-sm">
        <Star size={13} className="fill-[#2563EB] text-[#2563EB]" />
        <span className="text-[#0B3C6B] font-medium">{product.rating}</span>
        <span className="text-[#7C97B5]">({product.reviews})</span>
      </div>

      <h3 className="text-base text-[#0B3C6B] mt-1 mb-1 leading-snug">{product.name}</h3>

      {product.tech && (
        <p className="text-xs font-mono tracking-[0.05em] text-[#2563EB] mb-3">{product.tech}</p>
      )}

      {product.features?.length > 0 && (
        <ul className="text-sm text-[#4A607A] space-y-1.5 mb-5">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check size={13} className="text-[#2563EB] mt-0.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4 border-t border-[#EAF3FC] space-y-1.5">
        {product.prices ? (
          product.prices.map((p, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-xs text-[#7C97B5]">{p.label}</span>
              <span className="inline-flex items-center text-[#0B3C6B] text-lg">
                <IndianRupee size={14} className="mr-0.5" />
                {p.value}
              </span>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-between flex-wrap gap-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center text-[#0B3C6B] text-lg">
                <IndianRupee size={14} className="mr-0.5" />
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#7C97B5] line-through">₹{product.originalPrice}</span>
              )}
            </div>
            <span className="text-xs font-medium text-[#2563EB]">Free Installation</span>
          </div>
        )}
      </div>

      <Link
        to="/contact"
        className="mt-4 inline-flex items-center justify-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
      >
        Enquire <ArrowRight size={14} />
      </Link>

      <div className="mt-3 flex items-center justify-between">
        <label className="flex items-center gap-1.5 text-xs text-[#7C97B5]">
          <input
            type="checkbox"
            checked={compare}
            onChange={() => setCompare(!compare)}
            className="accent-[#2563EB] w-3.5 h-3.5"
          />
          Compare
        </label>
        <Link to="/contact" className="flex items-center gap-1 text-xs text-[#2563EB] hover:text-[#1D4ED8]">
          <MessageCircle size={12} /> WhatsApp Quote
        </Link>
      </div>
    </div>
  );
}

/* ---------- self-contained SVG illustrations for RO parts
   (no icon-library / image-file dependency, so this always renders) ---------- */

function PartIllustration({ type }) {
  const stroke = "#2563EB";
  const common = { fill: "none", stroke, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

  switch (type) {
    case "filter":
      return (
        <svg width="44" height="44" viewBox="0 0 48 48">
          <rect x="14" y="6" width="20" height="36" rx="6" {...common} />
          <line x1="18" y1="15" x2="30" y2="15" {...common} />
          <line x1="18" y1="22" x2="30" y2="22" {...common} />
          <line x1="18" y1="29" x2="30" y2="29" {...common} />
        </svg>
      );
    case "membrane":
      return (
        <svg width="44" height="44" viewBox="0 0 48 48">
          <rect x="8" y="14" width="32" height="20" rx="10" {...common} />
          <path d="M14 24c2-4 4 4 6 0s4 4 6 0s4 4 6 0s4 4 6 0" {...common} />
        </svg>
      );
    case "power":
      return (
        <svg width="44" height="44" viewBox="0 0 48 48">
          <rect x="10" y="10" width="28" height="28" rx="6" {...common} />
          <path d="M26 16l-8 12h6l-2 10 10-14h-6l0-8z" fill={stroke} stroke="none" />
        </svg>
      );
    case "pump":
      return (
        <svg width="44" height="44" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="14" {...common} />
          <path d="M24 14v10l7 4" {...common} />
        </svg>
      );
    case "valve":
      return (
        <svg width="44" height="44" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="12" {...common} />
          <line x1="24" y1="4" x2="24" y2="12" {...common} />
          <line x1="24" y1="36" x2="24" y2="44" {...common} />
          <line x1="18" y1="18" x2="30" y2="30" {...common} />
        </svg>
      );
    case "uv":
      return (
        <svg width="44" height="44" viewBox="0 0 48 48">
          <path d="M24 6a11 11 0 0 1 7 19.5c-1.5 1.3-2.5 2.7-2.5 4.5v2h-9v-2c0-1.8-1-3.2-2.5-4.5A11 11 0 0 1 24 6z" {...common} />
          <line x1="20" y1="38" x2="28" y2="38" {...common} />
          <line x1="21" y1="42" x2="27" y2="42" {...common} />
        </svg>
      );
    case "housing":
      return (
        <svg width="44" height="44" viewBox="0 0 48 48">
          <rect x="6" y="16" width="10" height="24" rx="3" {...common} />
          <rect x="19" y="12" width="10" height="28" rx="3" {...common} />
          <rect x="32" y="16" width="10" height="24" rx="3" {...common} />
        </svg>
      );
    case "kit":
    default:
      return (
        <svg width="44" height="44" viewBox="0 0 48 48">
          <rect x="8" y="14" width="32" height="24" rx="4" {...common} />
          <path d="M8 20h32" {...common} />
          <path d="M19 28l4 4 8-8" {...common} />
        </svg>
      );
  }
}

function PartCard({ part }) {
  return (
    <div className="bg-white border border-[#D7E7FB] rounded-2xl p-5 flex flex-col hover:shadow-lg hover:shadow-[#2563EB]/10 transition-shadow">
      <div className="aspect-[4/3] w-full rounded-xl bg-[#EAF3FC] border border-[#D7E7FB] flex items-center justify-center overflow-hidden">
  <img
    src={part.img}
    alt={part.name}
    className="w-[75%] h-[75%] object-contain"
  />
</div>
      <h3 className="text-sm text-[#0B3C6B] mt-4 mb-1 leading-snug">{part.name}</h3>
      <p className="text-xs text-[#7C97B5] mb-4">{part.note}</p>
      <div className="mt-auto flex items-center justify-between pt-3 border-t border-[#EAF3FC]">
        <span className="inline-flex items-center text-[#0B3C6B] text-base">
          <IndianRupee size={13} className="mr-0.5" />
          {part.price}
        </span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-medium px-4 py-2 rounded-full transition-colors"
        >
          Enquire <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

/* ---------- section wrappers ---------- */

function CategorySection({ id, eyebrow, title, products }) {
  if (products.length === 0) return null;
  return (
    <section id={id}>
      <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#2563EB] mb-2">{eyebrow}</p>
      <h2 className="text-2xl md:text-3xl text-[#0B3C6B] mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  );
}

function PartsSection({ parts }) {
  if (parts.length === 0) return null;
  return (
    <section id="ro-parts">
      <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#2563EB] mb-2">Genuine Spares</p>
      <h2 className="text-2xl md:text-3xl text-[#0B3C6B] mb-2">RO Parts &amp; Accessories</h2>
      <p className="text-[#4A607A] max-w-xl mb-6">
        Filters, membranes, pumps and other genuine spare parts for your BlueGuard purifier.
      </p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {parts.map((part) => (
          <PartCard key={part.name} part={part} />
        ))}
      </div>
    </section>
  );
}

/* ---------- page ---------- */

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [sortOrder, setSortOrder] = useState("featured");

  const toggleTech = (t) =>
    setSelectedTechs((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const handleReset = () => {
    setSearch("");
    setActiveCategory("All");
    setSelectedTechs([]);
    setSortOrder("featured");
  };

  const filterAndSort = (list, categoryName) => {
    if (activeCategory !== "All" && activeCategory !== categoryName) return [];

    let result = list;

    if (search.trim()) {
      result = result.filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase()));
    }
    if (selectedTechs.length > 0) {
      result = result.filter((p) =>
        selectedTechs.every((t) => p.tech?.toLowerCase().includes(t.toLowerCase()))
      );
    }
    if (sortOrder === "low" || sortOrder === "high") {
      result = [...result].sort((a, b) => {
        const av = priceToNumber(a.price || a.prices?.[0]?.value);
        const bv = priceToNumber(b.price || b.prices?.[0]?.value);
        return sortOrder === "low" ? av - bv : bv - av;
      });
    } else if (sortOrder === "rating") {
      result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    return result;
  };

  const filteredDomestic = useMemo(
    () => filterAndSort(domesticRO, "Domestic RO"),
    [activeCategory, search, selectedTechs, sortOrder]
  );
  const filteredCommercial = useMemo(
    () => filterAndSort(commercialRO, "Commercial RO"),
    [activeCategory, search, selectedTechs, sortOrder]
  );
  const filteredChimneys = useMemo(
    () => filterAndSort(chimneys, "Kitchen Chimney"),
    [activeCategory, search, selectedTechs, sortOrder]
  );

  const noResults =
    filteredDomestic.length === 0 && filteredCommercial.length === 0 && filteredChimneys.length === 0;

  return (
    <main className="bg-white">
      <ProductsHero />

      <div className={`${container} py-10 md:py-14 flex flex-col md:flex-row gap-6 md:gap-8 items-start`}>
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          selectedTechs={selectedTechs}
          toggleTech={toggleTech}
          onReset={handleReset}
        />

        <div className="flex-1 w-full min-w-0 space-y-14">
          <SearchSortBar
            search={search}
            setSearch={setSearch}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          {noResults && (
            <div className="py-16 text-center text-[#7C97B5]">
              No products match your filters — try resetting them.
            </div>
          )}

          <CategorySection id="domestic-ro" eyebrow="For Your Home" title="Domestic RO" products={filteredDomestic} />
          <CategorySection id="commercial-ro" eyebrow="For Business" title="Commercial RO" products={filteredCommercial} />
          <CategorySection id="kitchen-chimney" eyebrow="For Your Kitchen" title="Household Chimneys" products={filteredChimneys} />
          <PartsSection parts={roParts} />
        </div>
      </div>
    </main>
  );
}
