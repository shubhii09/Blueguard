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
  X,
  ChevronDown,
  ChevronUp,
  Filter,
  Sparkles,
  Tag,
  Droplets,
  Zap,
} from "lucide-react";
import {
  domesticRO,
  commercialRO,
  chimneys,
  roParts,
  allTechs,
  categories,
  tankCapacities,
  tdsLimits,
  priceRanges,
  priceToNumber,
} from "./ProductData";

const container = "w-[92%] md:w-[88%] xl:w-[82%] max-w-7xl mx-auto";

/* ---------- Product Image ---------- */
function ProductImage({ product }) {
  return (
    <div className="aspect-[4/3] w-full rounded-xl bg-[#EAF3FC] border border-[#D7E7FB] flex items-center justify-center overflow-hidden relative group">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

/* ---------- Hero Section ---------- */
function ProductsHero({ totalCount }) {
  return (
    <section className="relative overflow-hidden bg-[#0B3C6B] text-white">
      <div className={`${container} py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10`}>
        <div className="max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#93C5FD] bg-white/10 px-3 py-1.5 rounded-full mb-4 border border-white/10">
            <Sparkles size={13} className="text-[#93C5FD]" />
            BlueGuard Official Catalog
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Explore All Purifiers &amp; Appliances
          </h1>
          <p className="mt-3 text-[#CFE3FB] text-sm md:text-base leading-relaxed max-w-xl">
            Filter by purification technology, tank capacity, TDS limit, price range, or category to find your perfect machine.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15">
          <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center font-bold text-lg text-white">
            {totalCount}
          </div>
          <div className="text-left">
            <div className="text-xs text-[#93C5FD] uppercase font-mono tracking-wider">Products Ready</div>
            <div className="text-sm font-medium text-white">With Free Installation</div>
          </div>
        </div>
      </div>

      {/* Decorative background curve */}
      <svg viewBox="0 0 1200 40" className="w-full h-6 md:h-10 fill-[#F8FAFC]" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 C300,40 900,40 1200,0 L1200,40 L0,40 Z" />
      </svg>
    </section>
  );
}

/* ---------- Filter Controls Component (Used in Sidebar and Mobile Drawer) ---------- */
function FilterContent({
  activeCategory,
  setActiveCategory,
  selectedTechs,
  toggleTech,
  selectedCapacity,
  setSelectedCapacity,
  selectedTds,
  setSelectedTds,
  selectedPriceIndex,
  setSelectedPriceIndex,
  onlySale,
  setOnlySale,
  onlyBestseller,
  setOnlyBestseller,
  onReset,
  activeFilterCount,
  categoryCounts,
}) {
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#EAF3FC]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#EAF3FC] flex items-center justify-center text-[#2563EB]">
            <SlidersHorizontal size={16} />
          </div>
          <div>
            <h3 className="font-bold text-[#0B3C6B] text-base">Filter Catalog</h3>
            {activeFilterCount > 0 && (
              <span className="text-xs text-[#2563EB] font-medium">
                {activeFilterCount} active {activeFilterCount === 1 ? "filter" : "filters"}
              </span>
            )}
          </div>
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs text-[#2563EB] hover:text-[#1D4ED8] bg-[#EAF3FC] hover:bg-[#D7E7FB] font-medium px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <RotateCcw size={12} /> Reset
          </button>
        )}
      </div>

      {/* 1. Category Filter */}
      <div className="space-y-2.5">
        <div
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between cursor-pointer group"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C6B] flex items-center gap-1.5">
            <Tag size={13} className="text-[#2563EB]" /> Category
          </span>
          {collapsedSections.category ? (
            <ChevronDown size={14} className="text-[#7C97B5]" />
          ) : (
            <ChevronUp size={14} className="text-[#7C97B5]" />
          )}
        </div>

        {!collapsedSections.category && (
          <div className="flex flex-col gap-1 pt-1">
            {categories.map((c) => {
              const isActive = activeCategory === c;
              const count = categoryCounts[c] ?? 0;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`flex items-center justify-between text-left text-xs font-medium px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-sm shadow-[#2563EB]/30 font-semibold"
                      : "text-[#0B3C6B] hover:bg-[#EAF3FC] bg-slate-50/60"
                  }`}
                >
                  <span>{c}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                      isActive ? "bg-white/20 text-white" : "bg-[#D7E7FB]/60 text-[#2563EB]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <hr className="border-[#EAF3FC]" />

      {/* 2. Price Range Filter */}
      <div className="space-y-2.5">
        <div
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C6B] flex items-center gap-1.5">
            <IndianRupee size={13} className="text-[#2563EB]" /> Price Range
          </span>
          {collapsedSections.price ? (
            <ChevronDown size={14} className="text-[#7C97B5]" />
          ) : (
            <ChevronUp size={14} className="text-[#7C97B5]" />
          )}
        </div>

        {!collapsedSections.price && (
          <div className="grid grid-cols-1 gap-1.5 pt-1">
            {priceRanges.map((range, idx) => {
              const isSelected = selectedPriceIndex === idx;
              return (
                <label
                  key={range.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs cursor-pointer border transition-all ${
                    isSelected
                      ? "border-[#2563EB] bg-[#EAF3FC] text-[#0B3C6B] font-semibold"
                      : "border-slate-100 hover:border-[#D7E7FB] hover:bg-slate-50 text-[#4A607A]"
                  }`}
                >
                  <input
                    type="radio"
                    name="priceRange"
                    checked={isSelected}
                    onChange={() => setSelectedPriceIndex(idx)}
                    className="accent-[#2563EB] w-3.5 h-3.5"
                  />
                  {range.label}
                </label>
              );
            })}
          </div>
        )}
      </div>

      <hr className="border-[#EAF3FC]" />

      {/* 3. Purification Technology */}
      <div className="space-y-2.5">
        <div
          onClick={() => toggleSection("tech")}
          className="flex items-center justify-between cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C6B] flex items-center gap-1.5">
            <Droplets size={13} className="text-[#2563EB]" /> Technology
          </span>
          {collapsedSections.tech ? (
            <ChevronDown size={14} className="text-[#7C97B5]" />
          ) : (
            <ChevronUp size={14} className="text-[#7C97B5]" />
          )}
        </div>

        {!collapsedSections.tech && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {allTechs.map((t) => {
              const isChecked = selectedTechs.includes(t);
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleTech(t)}
                  className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all ${
                    isChecked
                      ? "bg-[#2563EB] text-white border-[#2563EB]"
                      : "bg-white text-[#4A607A] border-slate-200 hover:border-[#2563EB] hover:text-[#2563EB]"
                  }`}
                >
                  {t} {isChecked && "✓"}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <hr className="border-[#EAF3FC]" />

      {/* 4. Tank Capacity Filter */}
      <div className="space-y-2.5">
        <div
          onClick={() => toggleSection("capacity")}
          className="flex items-center justify-between cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C6B] flex items-center gap-1.5">
            <Zap size={13} className="text-[#2563EB]" /> Tank Capacity
          </span>
          {collapsedSections.capacity ? (
            <ChevronDown size={14} className="text-[#7C97B5]" />
          ) : (
            <ChevronUp size={14} className="text-[#7C97B5]" />
          )}
        </div>

        {!collapsedSections.capacity && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tankCapacities.map((cap) => {
              const isSelected = selectedCapacity === cap;
              return (
                <button
                  key={cap}
                  type="button"
                  onClick={() => setSelectedCapacity(cap)}
                  className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all ${
                    isSelected
                      ? "bg-[#0B3C6B] text-white border-[#0B3C6B]"
                      : "bg-white text-[#4A607A] border-slate-200 hover:border-[#0B3C6B]"
                  }`}
                >
                  {cap}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <hr className="border-[#EAF3FC]" />

      {/* 5. TDS Limit Filter */}
      <div className="space-y-2.5">
        <div
          onClick={() => toggleSection("tds")}
          className="flex items-center justify-between cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C6B] flex items-center gap-1.5">
            <Filter size={13} className="text-[#2563EB]" /> Max TDS Level
          </span>
          {collapsedSections.tds ? (
            <ChevronDown size={14} className="text-[#7C97B5]" />
          ) : (
            <ChevronUp size={14} className="text-[#7C97B5]" />
          )}
        </div>

        {!collapsedSections.tds && (
          <div className="grid grid-cols-1 gap-1.5 pt-1">
            {tdsLimits.map((tds) => {
              const isSelected = selectedTds === tds;
              return (
                <label
                  key={tds}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs cursor-pointer border transition-all ${
                    isSelected
                      ? "border-[#2563EB] bg-[#EAF3FC] text-[#0B3C6B] font-semibold"
                      : "border-slate-100 hover:border-[#D7E7FB] text-[#4A607A]"
                  }`}
                >
                  <input
                    type="radio"
                    name="tdsLimit"
                    checked={isSelected}
                    onChange={() => setSelectedTds(tds)}
                    className="accent-[#2563EB] w-3.5 h-3.5"
                  />
                  {tds}
                </label>
              );
            })}
          </div>
        )}
      </div>

      <hr className="border-[#EAF3FC]" />

      {/* 6. Quick Filters / Badges */}
      <div className="space-y-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C6B] block">
          Special Offers
        </span>
        <div className="space-y-2 pt-1">
          <label className="flex items-center gap-2 text-xs text-[#0B3C6B] cursor-pointer">
            <input
              type="checkbox"
              checked={onlySale}
              onChange={(e) => setOnlySale(e.target.checked)}
              className="accent-[#2563EB] w-3.5 h-3.5 rounded"
            />
            On Discount / Sale Only
          </label>
          <label className="flex items-center gap-2 text-xs text-[#0B3C6B] cursor-pointer">
            <input
              type="checkbox"
              checked={onlyBestseller}
              onChange={(e) => setOnlyBestseller(e.target.checked)}
              className="accent-[#2563EB] w-3.5 h-3.5 rounded"
            />
            Top Bestsellers Only
          </label>
        </div>
      </div>
    </div>
  );
}

/* ---------- Search and Sort Bar ---------- */
function SearchSortBar({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  onOpenMobileFilter,
  activeFilterCount,
  totalMatching,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 bg-white border border-[#D7E7FB] rounded-2xl p-3 md:p-3.5 shadow-sm">
      {/* Mobile Filter Toggle Button */}
      <button
        onClick={onOpenMobileFilter}
        className="md:hidden flex items-center justify-center gap-2 bg-[#0B3C6B] text-white font-medium text-xs py-2.5 px-4 rounded-xl"
      >
        <SlidersHorizontal size={15} /> Filters
        {activeFilterCount > 0 && (
          <span className="bg-[#2563EB] text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Search Input */}
      <div className="flex items-center gap-2 flex-1 bg-[#F8FAFC] border border-[#EAF3FC] rounded-xl px-4 py-2.5 focus-within:border-[#2563EB] focus-within:bg-white transition-all">
        <Search size={16} className="text-[#7C97B5] shrink-0" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, model or technology..."
          className="bg-transparent outline-none text-xs md:text-sm text-[#0B3C6B] placeholder:text-[#7C97B5] w-full"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="text-[#7C97B5] hover:text-[#0B3C6B] p-0.5"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Sort Select */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="hidden lg:inline text-xs text-[#7C97B5] font-medium whitespace-nowrap">
          Sort By:
        </span>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-auto text-xs md:text-sm font-medium text-[#0B3C6B] bg-[#F8FAFC] border border-[#EAF3FC] hover:border-[#D7E7FB] rounded-xl px-4 py-2.5 outline-none cursor-pointer"
        >
          <option value="featured">Featured First</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}

/* ---------- Active Filters Bar ---------- */
function ActiveFilterChips({
  activeCategory,
  setActiveCategory,
  selectedTechs,
  toggleTech,
  selectedCapacity,
  setSelectedCapacity,
  selectedTds,
  setSelectedTds,
  selectedPriceIndex,
  setSelectedPriceIndex,
  onlySale,
  setOnlySale,
  onlyBestseller,
  setOnlyBestseller,
  search,
  setSearch,
  onReset,
}) {
  const chips = [];

  if (activeCategory !== "All") {
    chips.push({
      label: `Category: ${activeCategory}`,
      clear: () => setActiveCategory("All"),
    });
  }
  if (selectedPriceIndex > 0) {
    chips.push({
      label: `Price: ${priceRanges[selectedPriceIndex].label}`,
      clear: () => setSelectedPriceIndex(0),
    });
  }
  selectedTechs.forEach((t) => {
    chips.push({
      label: `Tech: ${t}`,
      clear: () => toggleTech(t),
    });
  });
  if (selectedCapacity !== "All") {
    chips.push({
      label: `Capacity: ${selectedCapacity}`,
      clear: () => setSelectedCapacity("All"),
    });
  }
  if (selectedTds !== "All") {
    chips.push({
      label: `TDS: ${selectedTds}`,
      clear: () => setSelectedTds("All"),
    });
  }
  if (onlySale) {
    chips.push({
      label: "On Sale Only",
      clear: () => setOnlySale(false),
    });
  }
  if (onlyBestseller) {
    chips.push({
      label: "Top Bestseller",
      clear: () => setOnlyBestseller(false),
    });
  }
  if (search.trim()) {
    chips.push({
      label: `Search: "${search}"`,
      clear: () => setSearch(""),
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 pt-1 pb-3">
      <span className="text-xs text-[#7C97B5] font-medium mr-1">Applied Filters:</span>
      {chips.map((chip, idx) => (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 text-xs bg-[#EAF3FC] text-[#0B3C6B] font-medium px-3 py-1 rounded-full border border-[#D7E7FB]"
        >
          {chip.label}
          <button
            onClick={chip.clear}
            className="hover:bg-[#2563EB] hover:text-white rounded-full p-0.5 transition-colors"
          >
            <X size={11} />
          </button>
        </span>
      ))}
      <button
        onClick={onReset}
        className="text-xs text-[#2563EB] hover:underline font-medium ml-2"
      >
        Clear All
      </button>
    </div>
  );
}

/* ---------- Product Card ---------- */
function ProductCard({ product }) {
  const [compare, setCompare] = useState(false);

  return (
    <div className="bg-white border border-[#D7E7FB] rounded-2xl p-5 flex flex-col hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300 group">
      <div className="flex items-center gap-2 mb-3 min-h-[26px]">
        {product.badge && (
          <span className="text-xs font-semibold text-white bg-[#2563EB] px-3 py-1 rounded-full shadow-sm shadow-[#2563EB]/20">
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span className="text-xs font-bold text-[#2563EB] bg-[#EAF3FC] border border-[#D7E7FB] px-2.5 py-1 rounded-full ml-auto">
            {Math.round((1 - priceToNumber(product.price) / priceToNumber(product.originalPrice)) * 100)}% OFF
          </span>
        )}
      </div>

      <ProductImage product={product} />

      <div className="flex items-center gap-1.5 mt-4 text-xs">
        <div className="flex items-center text-amber-500">
          <Star size={13} className="fill-amber-400 text-amber-400" />
        </div>
        <span className="text-[#0B3C6B] font-bold">{product.rating}</span>
        <span className="text-[#7C97B5]">({product.reviews} reviews)</span>
      </div>

      <h3 className="text-base font-bold text-[#0B3C6B] mt-1.5 mb-1 leading-snug group-hover:text-[#2563EB] transition-colors">
        {product.name}
      </h3>

      {product.tech && (
        <p className="text-xs font-mono tracking-wider font-semibold text-[#2563EB] mb-3">
          {product.tech}
        </p>
      )}

      {/* Specifications Badges */}
      <div className="flex flex-wrap gap-1 mb-4">
        {product.tankCapacity && product.tankCapacity !== "N/A" && (
          <span className="text-[11px] bg-slate-100 text-[#4A607A] font-medium px-2 py-0.5 rounded">
            Tank: {product.tankCapacity}
          </span>
        )}
        {product.tdsLimit && product.tdsLimit !== "N/A" && (
          <span className="text-[11px] bg-slate-100 text-[#4A607A] font-medium px-2 py-0.5 rounded">
            TDS: {product.tdsLimit}
          </span>
        )}
      </div>

      {product.features?.length > 0 && (
        <ul className="text-xs text-[#4A607A] space-y-1.5 mb-5">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check size={13} className="text-[#2563EB] mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4 border-t border-[#EAF3FC] space-y-1.5">
        {product.prices ? (
          product.prices.map((p, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-xs text-[#7C97B5]">{p.label}</span>
              <span className="inline-flex items-center text-[#0B3C6B] font-bold text-lg">
                <IndianRupee size={15} className="mr-0.5" />
                {p.value}
              </span>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-between flex-wrap gap-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center text-[#0B3C6B] font-bold text-xl">
                <IndianRupee size={16} className="mr-0.5" />
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#7C97B5] line-through">₹{product.originalPrice}</span>
              )}
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              Free Install
            </span>
          </div>
        )}
      </div>

      <Link
        to="/contact"
        className="mt-4 inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-[#2563EB]/20"
      >
        Enquire Now <ArrowRight size={14} />
      </Link>

      <div className="mt-3 flex items-center justify-between pt-2 border-t border-dashed border-slate-100">
        <label className="flex items-center gap-1.5 text-xs text-[#7C97B5] cursor-pointer">
          <input
            type="checkbox"
            checked={compare}
            onChange={() => setCompare(!compare)}
            className="accent-[#2563EB] w-3.5 h-3.5"
          />
          Compare
        </label>
        <Link
          to="/contact"
          className="flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:text-[#1D4ED8]"
        >
          <MessageCircle size={13} /> WhatsApp Quote
        </Link>
      </div>
    </div>
  );
}

/* ---------- Part Card ---------- */
function PartCard({ part }) {
  return (
    <div className="bg-white border border-[#D7E7FB] rounded-2xl p-5 flex flex-col hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300">
      <div className="aspect-[4/3] w-full rounded-xl bg-[#EAF3FC] border border-[#D7E7FB] flex items-center justify-center overflow-hidden">
        <img
          src={part.img}
          alt={part.name}
          className="w-[75%] h-[75%] object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF3FC] px-2 py-0.5 rounded">
          {part.category || "Genuine Spare"}
        </span>
        <h3 className="text-sm font-bold text-[#0B3C6B] mt-2 mb-1 leading-snug">
          {part.name}
        </h3>
        <p className="text-xs text-[#7C97B5] mb-3">{part.note}</p>
      </div>

      <div className="mt-auto flex items-center justify-between pt-3 border-t border-[#EAF3FC]">
        <span className="inline-flex items-center text-[#0B3C6B] font-bold text-base">
          <IndianRupee size={14} className="mr-0.5" />
          {part.price}
        </span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors"
        >
          Order <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

/* ---------- Category Section Wrapper ---------- */
function CategorySection({ id, eyebrow, title, products }) {
  if (products.length === 0) return null;
  return (
    <section id={id} className="space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
          {eyebrow}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3C6B]">
          {title} <span className="text-sm font-normal text-[#7C97B5]">({products.length})</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id || p.name} product={p} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Spare Parts Section ---------- */
function PartsSection({ parts }) {
  if (parts.length === 0) return null;
  return (
    <section id="ro-parts" className="space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
          Genuine Spares
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3C6B]">
          RO Parts &amp; Accessories <span className="text-sm font-normal text-[#7C97B5]">({parts.length})</span>
        </h2>
        <p className="text-sm text-[#4A607A] mt-1">
          High-performance filters, membranes, pumps and genuine accessories for long-lasting purity.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {parts.map((part) => (
          <PartCard key={part.id || part.name} part={part} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Main Component ---------- */
export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [selectedCapacity, setSelectedCapacity] = useState("All");
  const [selectedTds, setSelectedTds] = useState("All");
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(0);
  const [onlySale, setOnlySale] = useState(false);
  const [onlyBestseller, setOnlyBestseller] = useState(false);
  const [sortOrder, setSortOrder] = useState("featured");

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const toggleTech = (t) =>
    setSelectedTechs((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const handleReset = () => {
    setSearch("");
    setActiveCategory("All");
    setSelectedTechs([]);
    setSelectedCapacity("All");
    setSelectedTds("All");
    setSelectedPriceIndex(0);
    setOnlySale(false);
    setOnlyBestseller(false);
    setSortOrder("featured");
  };

  // Calculate active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (activeCategory !== "All") count++;
    if (selectedPriceIndex > 0) count++;
    if (selectedTechs.length > 0) count += selectedTechs.length;
    if (selectedCapacity !== "All") count++;
    if (selectedTds !== "All") count++;
    if (onlySale) count++;
    if (onlyBestseller) count++;
    if (search.trim()) count++;
    return count;
  }, [
    activeCategory,
    selectedPriceIndex,
    selectedTechs,
    selectedCapacity,
    selectedTds,
    onlySale,
    onlyBestseller,
    search,
  ]);

  // Main Filter Logic Function
  const filterList = (list, itemCategory) => {
    if (activeCategory !== "All" && activeCategory !== itemCategory) return [];

    let result = list;

    // Search query
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tech?.toLowerCase().includes(q) ||
          p.features?.some((f) => f.toLowerCase().includes(q))
      );
    }

    // Price range
    const range = priceRanges[selectedPriceIndex];
    if (range && (range.min > 0 || range.max < Infinity)) {
      result = result.filter((p) => {
        const val = p.numericPrice || priceToNumber(p.price);
        return val >= range.min && val <= range.max;
      });
    }

    // Technology
    if (selectedTechs.length > 0) {
      result = result.filter((p) =>
        selectedTechs.every((t) => p.tech?.toLowerCase().includes(t.toLowerCase()))
      );
    }

    // Tank capacity
    if (selectedCapacity !== "All") {
      result = result.filter((p) => p.tankCapacity === selectedCapacity);
    }

    // TDS Limit
    if (selectedTds !== "All") {
      result = result.filter((p) => p.tdsLimit === selectedTds);
    }

    // Only sale / discount
    if (onlySale) {
      result = result.filter((p) => p.originalPrice);
    }

    // Only bestsellers
    if (onlyBestseller) {
      result = result.filter(
        (p) => p.badge?.toLowerCase().includes("bestseller") || p.badge?.toLowerCase().includes("top")
      );
    }

    // Sorting
    if (sortOrder === "low" || sortOrder === "high") {
      result = [...result].sort((a, b) => {
        const av = a.numericPrice || priceToNumber(a.price);
        const bv = b.numericPrice || priceToNumber(b.price);
        return sortOrder === "low" ? av - bv : bv - av;
      });
    } else if (sortOrder === "rating") {
      result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  };

  const filteredDomestic = useMemo(
    () => filterList(domesticRO, "Domestic RO"),
    [
      activeCategory,
      search,
      selectedPriceIndex,
      selectedTechs,
      selectedCapacity,
      selectedTds,
      onlySale,
      onlyBestseller,
      sortOrder,
    ]
  );

  const filteredCommercial = useMemo(
    () => filterList(commercialRO, "Commercial RO"),
    [
      activeCategory,
      search,
      selectedPriceIndex,
      selectedTechs,
      selectedCapacity,
      selectedTds,
      onlySale,
      onlyBestseller,
      sortOrder,
    ]
  );

  const filteredChimneys = useMemo(
    () => filterList(chimneys, "Kitchen Chimney"),
    [
      activeCategory,
      search,
      selectedPriceIndex,
      selectedTechs,
      selectedCapacity,
      selectedTds,
      onlySale,
      onlyBestseller,
      sortOrder,
    ]
  );

  const filteredParts = useMemo(
    () => filterList(roParts, "RO Parts & Accessories"),
    [
      activeCategory,
      search,
      selectedPriceIndex,
      selectedTechs,
      selectedCapacity,
      selectedTds,
      onlySale,
      onlyBestseller,
      sortOrder,
    ]
  );

  const categoryCounts = useMemo(() => {
    return {
      All: domesticRO.length + commercialRO.length + chimneys.length + roParts.length,
      "Domestic RO": domesticRO.length,
      "Commercial RO": commercialRO.length,
      "Kitchen Chimney": chimneys.length,
      "RO Parts & Accessories": roParts.length,
    };
  }, []);

  const totalMatching =
    filteredDomestic.length +
    filteredCommercial.length +
    filteredChimneys.length +
    filteredParts.length;

  const noResults = totalMatching === 0;

  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      <ProductsHero totalCount={categoryCounts.All} />

      <div className={`${container} py-8 md:py-12 flex flex-col md:flex-row gap-8 items-start`}>
        {/* Desktop Sidebar Filter */}
        <aside className="hidden md:block w-72 shrink-0 sticky top-6 bg-white border border-[#D7E7FB] rounded-2xl p-5 shadow-sm max-h-[85vh] overflow-y-auto custom-scrollbar">
          <FilterContent
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            selectedTechs={selectedTechs}
            toggleTech={toggleTech}
            selectedCapacity={selectedCapacity}
            setSelectedCapacity={setSelectedCapacity}
            selectedTds={selectedTds}
            setSelectedTds={setSelectedTds}
            selectedPriceIndex={selectedPriceIndex}
            setSelectedPriceIndex={setSelectedPriceIndex}
            onlySale={onlySale}
            setOnlySale={setOnlySale}
            onlyBestseller={onlyBestseller}
            setOnlyBestseller={setOnlyBestseller}
            onReset={handleReset}
            activeFilterCount={activeFilterCount}
            categoryCounts={categoryCounts}
          />
        </aside>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden bg-slate-900/60 backdrop-blur-sm">
            <div className="w-[85%] max-w-sm bg-white h-full p-6 overflow-y-auto shadow-2xl flex flex-col">
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="font-bold text-[#0B3C6B] text-lg">Filters</span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-[#0B3C6B]"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="py-4 flex-1">
                <FilterContent
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  selectedTechs={selectedTechs}
                  toggleTech={toggleTech}
                  selectedCapacity={selectedCapacity}
                  setSelectedCapacity={setSelectedCapacity}
                  selectedTds={selectedTds}
                  setSelectedTds={setSelectedTds}
                  selectedPriceIndex={selectedPriceIndex}
                  setSelectedPriceIndex={setSelectedPriceIndex}
                  onlySale={onlySale}
                  setOnlySale={setOnlySale}
                  onlyBestseller={onlyBestseller}
                  setOnlyBestseller={setOnlyBestseller}
                  onReset={handleReset}
                  activeFilterCount={activeFilterCount}
                  categoryCounts={categoryCounts}
                />
              </div>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#2563EB] text-white font-bold rounded-xl mt-4"
              >
                Apply &amp; Show ({totalMatching}) Results
              </button>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 w-full min-w-0 space-y-8">
          <SearchSortBar
            search={search}
            setSearch={setSearch}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onOpenMobileFilter={() => setMobileFilterOpen(true)}
            activeFilterCount={activeFilterCount}
            totalMatching={totalMatching}
          />

          <ActiveFilterChips
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            selectedTechs={selectedTechs}
            toggleTech={toggleTech}
            selectedCapacity={selectedCapacity}
            setSelectedCapacity={setSelectedCapacity}
            selectedTds={selectedTds}
            setSelectedTds={setSelectedTds}
            selectedPriceIndex={selectedPriceIndex}
            setSelectedPriceIndex={setSelectedPriceIndex}
            onlySale={onlySale}
            setOnlySale={setOnlySale}
            onlyBestseller={onlyBestseller}
            setOnlyBestseller={setOnlyBestseller}
            search={search}
            setSearch={setSearch}
            onReset={handleReset}
          />

          {/* No Results Empty State */}
          {noResults && (
            <div className="py-16 px-6 bg-white rounded-2xl border border-[#D7E7FB] text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 bg-[#EAF3FC] text-[#2563EB] rounded-2xl flex items-center justify-center mx-auto">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C6B]">No Products Found</h3>
              <p className="text-sm text-[#7C97B5] max-w-md mx-auto">
                No items match your selected filters and search query. Try broadening your criteria or resetting filters.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#1D4ED8] transition-colors"
              >
                <RotateCcw size={15} /> Reset All Filters
              </button>
            </div>
          )}

          {/* Filtered Sections */}
          <CategorySection
            id="domestic-ro"
            eyebrow="For Your Home"
            title="Domestic RO Water Purifiers"
            products={filteredDomestic}
          />
          <CategorySection
            id="commercial-ro"
            eyebrow="For Commercial Use"
            title="Commercial RO Systems"
            products={filteredCommercial}
          />
          <CategorySection
            id="kitchen-chimney"
            eyebrow="For Modern Kitchens"
            title="Kitchen Auto-Clean Chimneys"
            products={filteredChimneys}
          />
          <PartsSection parts={filteredParts} />
        </div>
      </div>
    </main>
  );
}

