import React from "react";
import { Link } from "react-router-dom";
import { Droplets, Fan, IndianRupee, ArrowRight } from "lucide-react";

// img import
import ro1 from "../assets/images/blury-table-designify-4.png";
import ro2 from "../assets/images/sale-designify-1.png";
import ro3 from "../assets/images/blury-table-designify.png";
import ro4 from "../assets/images/blury-table-designify-2.webp";
import ro5 from "../assets/images/blury-table-designify-5.webp";
import ro6 from "../assets/images/blury-table-designify-6.webp";

// commercial import
import ro7 from "../assets/images/blury-table-designify-7.png";
import ro8 from "../assets/images/blury-table-designify-8.webp";
import ro9 from "../assets/images/blury-table-designify-9.webp";

// chimney import
import ro10 from "../assets/images/Chimney-e1702964936222.webp";
import ro11 from "../assets/images/Chimney-e1702964936222.webp";
import ro12 from "../assets/images/Chimney2-e1702964902990.webp";

/* ---------- palette: blue + white only, same as About / Blog / Contact ---------- */

const domesticRO = [
  {
    name: "BlueGuard Camry Black",
    tech: "RO + UV + UF + TDS + Alkaline",
    img: ro1,
    specs: [
      { label: "Storage", value: "8 ltr" },
      { label: "Capacity", value: "15 LPH" },
    ],
    prices: [{ value: "13,500" }],
  },
  {
    name: "BlueGuard Camry White",
    tech: "RO + UV + UF + TDS + Alkaline",
    img: ro2,
    specs: [
      { label: "Storage", value: "8 ltr" },
      { label: "Capacity", value: "15 LPH" },
    ],
    prices: [{ value: "12,500" }],
  },
  {
    name: "BlueGuard Swift Plus",
    tech: "RO + UV + TDS + Alkaline",
    img: ro3,
    specs: [
      { label: "Storage", value: "16 ltr" },
      { label: "Capacity", value: "15 LPH" },
    ],
    prices: [{ value: "13,500" }],
  },
  {
    name: "BlueGuard Grand Plus",
    tech: "RO + UV + TDS + Alkaline",
    img: ro4,
    specs: [
      { label: "Storage", value: "12 ltr" },
      { label: "Capacity", value: "15 LPH" },
    ],
    prices: [{ value: "12,500" }],
  },
  {
    name: "BlueGuard Pearl Plus",
    tech: "RO + UV + TDS + Alkaline",
    img: ro5,
    specs: [
      { label: "Storage", value: "10 ltr" },
      { label: "Capacity", value: "15 LPH" },
    ],
    prices: [{ value: "15,500" }],
  },
  {
    name: "BlueGuard Alfa Black",
    tech: "RO + UV + UF + TDS + Alkaline",
    img: ro6,
    specs: [
      { label: "Storage", value: "12 ltr" },
      { label: "Capacity", value: "15 LPH" },
    ],
    prices: [{ value: "12,500" }],
  },
];

const commercialRO = [
  {
    name: "BlueGuard 25 LPH RO",
    img: ro7,
    tech: "RO + UV + TDS",
    specs: [
      { label: "Storage", value: "8 ltr" },
      { label: "Capacity", value: "25 LPH" },
    ],
    prices: [{ value: "18,900" }],
  },
  {
    name: "BlueGuard 50/150 LPH RO",
    img: ro8,
    tech: "RO + UV + TDS",
    specs: [],
    prices: [
      { label: "50 LPH", value: "38,990" },
      { label: "150 LPH", value: "70,500" },
    ],
  },
  {
    name: "BlueGuard 500/1000 LPH RO",
    img: ro9,
    tech: "RO + UV + TDS",
    specs: [],
    prices: [
      { label: "500 LPH", value: "1,30,000" },
      { label: "1000 LPH", value: "1,95,000" },
    ],
  },
];

const chimneys = [
  {
    name: "BlueGuard SC BK 60",
    tech: "Autoclean – Heat Auto Clean",
    img: ro10,
    specs: [
      { label: "Width", value: "60 cm" },
      { label: "Finish", value: "Black Tempered Glass" },
      { label: "Suction", value: "1200 m³/hr" },
      { label: "Control", value: "Motion sensor touch control" },
    ],
    prices: [{ value: "15,5000" }],
  },
  {
    name: "BlueGuard Novio",
    tech: "Autoclean – Heat Auto Clean",
    img: ro11,
    specs: [
      { label: "Width", value: "60 cm / 90 cm" },
      { label: "Finish", value: "Black" },
      { label: "Suction", value: "1200 m³/hr" },
      { label: "Filter", value: "Filter-less" },
      { label: "Control", value: "Touch / Motion" },
      { label: "Lamp", value: "LED x 2" },
    ],
    prices: [{ value: "14,990" }],
  },
  {
    name: "BlueGuard Feel 3D",
    tech: "",
    img: ro12,
    specs: [
      { label: "Width", value: "60 cm" },
      { label: "Finish", value: "Stainless steel + Curved glass" },
      { label: "Suction", value: "1095 m³/hr" },
      { label: "Filter", value: "Baffle filter" },
      { label: "Control", value: "Motion sensor touch control" },
    ],
    prices: [{ value: "12,450" }],
  },
];

/* ---------- product image ---------- */

function ProductImage({ product }) {
  return (
    <div className="aspect-[4/3] w-full rounded-xl bg-[#EAF3FC] border border-[#D7E7FB] flex items-center justify-center overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  );
}

/* ---------- hero: illustrated, on-theme, no stock photo ---------- */

function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3C6B]">
      <div className="mx-auto w-[90%] lg:w-[80%] max-w-6xl py-16 md:py-24 flex items-center justify-between gap-10">
        <div>
          <span className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
            Blue Guard Range
          </span>

          <h1 className="text-4xl md:text-6xl text-white leading-[1.05]">
            Our Products
          </h1>

          <p className="mt-4 text-[#CFE3FB] max-w-md leading-relaxed">
            Domestic and commercial RO purifiers, plus chimneys — built for
            Dehradun's water and your kitchen.
          </p>
        </div>

        <div className="hidden md:block shrink-0">
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            aria-hidden="true"
          >
            <circle
              cx="75"
              cy="75"
              r="70"
              fill="none"
              stroke="#2563EB"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />

            <circle
              cx="75"
              cy="75"
              r="50"
              fill="none"
              stroke="#93C5FD"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />

            <rect
              x="52"
              y="45"
              width="46"
              height="66"
              rx="8"
              fill="#FFFFFF"
              fillOpacity="0.9"
            />

            <rect
              x="60"
              y="56"
              width="30"
              height="18"
              rx="3"
              fill="#2563EB"
            />

            <circle
              cx="75"
              cy="92"
              r="7"
              fill="#2563EB"
              fillOpacity="0.7"
            />
          </svg>
        </div>
      </div>

      <svg
        viewBox="0 0 1200 60"
        className="w-full h-10 md:h-14"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
          fill="#EAF3FC"
        />
      </svg>
    </section>
  );
}

/* ---------- product card ---------- */

function ProductCard({ product, kind }) {
  return (
    <div className="bg-white border border-[#D7E7FB] rounded-2xl p-5 flex flex-col hover:shadow-lg hover:shadow-[#2563EB]/10 transition-shadow">
      
      <ProductImage product={product} />

      <h3 className="text-lg text-[#0B3C6B] mt-5 mb-1">
        {product.name}
      </h3>

      {product.tech && (
        <p className="text-xs font-mono tracking-[0.05em] text-[#2563EB] mb-4">
          {product.tech}
        </p>
      )}

      {product.specs.length > 0 && (
        <ul className="text-sm text-[#4A607A] space-y-1.5 mb-5">
          {product.specs.map((s) => (
            <li
              key={s.label}
              className="flex justify-between gap-3"
            >
              <span className="text-[#7C97B5]">{s.label}</span>

              <span className="text-[#0B3C6B] font-medium text-right">
                {s.value}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4 border-t border-[#EAF3FC] space-y-2">
        {product.prices.map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-between"
          >
            {p.label && (
              <span className="text-xs text-[#7C97B5]">
                {p.label}
              </span>
            )}

            <span className="inline-flex items-center text-[#0B3C6B] text-lg ml-auto">
              <IndianRupee size={15} className="mr-0.5" />
              {p.value}
            </span>
          </div>
        ))}
      </div>

      <Link
  to="/contact"
  className="mt-5 inline-flex items-center justify-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
>
  Enquire <ArrowRight size={14} />
</Link>
    </div>
  );
}

/* ---------- category section ---------- */

function CategorySection({ eyebrow, title, products, kind, alt }) {
  return (
    <section
      className={`px-6 py-14 md:py-16 ${
        alt ? "bg-[#EAF3FC]" : "bg-white"
      }`}
    >
      <div className="w-[80%] mx-auto">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#2563EB] mb-3">
          {eyebrow}
        </p>

        <h2 className="text-3xl md:text-4xl text-[#0B3C6B] mb-10">
          {title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.name}
              product={p}
              kind={kind}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

export default function Products() {
  return (
    <main className="bg-white">
      
      <ProductsHero />

      <CategorySection
        eyebrow="For Your Home"
        title="Domestic RO"
        products={domesticRO}
        kind="ro"
      />

      <CategorySection
        eyebrow="For Business"
        title="Commercial RO"
        products={commercialRO}
        kind="ro"
        alt
      />

      <CategorySection
        eyebrow="For Your Kitchen"
        title="Household Chimneys"
        products={chimneys}
        kind="chimney"
      />

    </main>
  );
}
