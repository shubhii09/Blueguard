import React from "react";
import { Link } from "react-router-dom";
import { Droplets, Atom, CalendarDays, User, ArrowRight } from "lucide-react";

/* ---------- palette: same as About — blue + white only
   --navy  #0B3C6B   --blue  #2563EB   --sky #93C5FD
   --pale  #EAF3FC   --white #FFFFFF   --slate #4A607A
------------------------------------------------------- */

const posts = [
  {
    slug: "benefits-of-drinking-warm-water",
    title: "Benefits Of Drinking Warm Water At Every Age",
    excerpt:
      "You'll find a million articles on the net telling you to drink more water — here's what warm water specifically does for digestion, sleep and skin.",
    author: "admin",
    date: "26 Oct 2021",
    cover: "warm",
  },
  {
    slug: "blueguard-active-copper-maxx",
    title: "Blueguard Active Copper Maxx",
    excerpt:
      "The goodness of copper with Zn + Mg + Ca — how a trace of copper in your drinking water supports immunity and everyday wellness.",
    author: "admin",
    date: "25 Oct 2021",
    cover: "copper",
  },
];

/* ---------- illustrated covers, in place of stock photography ---------- */

function CoverArt({ type }) {
  if (type === "copper") {
    return (
      <svg viewBox="0 0 400 220" className="w-full h-full" role="img" aria-label="Copper mineral illustration">
        <defs>
          <linearGradient id="copperBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0B3C6B" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#copperBg)" />
        {/* molecule motif: nodes + bonds, echoing Zn / Mg / Ca */}
        <g stroke="#93C5FD" strokeOpacity="0.6" strokeWidth="2">
          <line x1="200" y1="110" x2="140" y2="70" />
          <line x1="200" y1="110" x2="260" y2="70" />
          <line x1="200" y1="110" x2="150" y2="155" />
          <line x1="200" y1="110" x2="255" y2="160" />
        </g>
        <circle cx="200" cy="110" r="26" fill="#FFFFFF" />
        <circle cx="140" cy="70" r="10" fill="#93C5FD" />
        <circle cx="260" cy="70" r="10" fill="#93C5FD" />
        <circle cx="150" cy="155" r="9" fill="#60A5FA" />
        <circle cx="255" cy="160" r="9" fill="#60A5FA" />
        <text x="200" y="116" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0B3C6B">Cu</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" role="img" aria-label="Glass of warm water with rising steam">
      <defs>
        <linearGradient id="warmBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF3FC" />
          <stop offset="100%" stopColor="#CFE3FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#warmBg)" />
      {/* steam curls */}
      <path d="M175 70 C165 55 185 45 175 30" stroke="#93C5FD" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M200 75 C190 58 212 48 200 28" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M225 70 C215 55 235 45 225 30" stroke="#93C5FD" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* glass */}
      <path d="M160 95 L240 95 L228 175 C227 183 220 189 212 189 L188 189 C180 189 173 183 172 175 Z" fill="#FFFFFF" fillOpacity="0.6" stroke="#2563EB" strokeWidth="2" />
      <path d="M167 120 L233 120 L225 173 C224 180 218 185 211 185 L189 185 C182 185 176 180 175 173 Z" fill="#2563EB" fillOpacity="0.85" />
    </svg>
  );
}

/* ---------- hero banner: illustrated, on-theme, no stock photo ---------- */

function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3C6B]">
      <div className="mx-auto w-[90%] lg:w-[80%] max-w-6xl py-16 md:py-24 flex items-center justify-between gap-10">
        <div>
          <span className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
            Blue Guard Journal
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.05]">
            Blog
          </h1>
          <p className="mt-4 text-[#CFE3FB] max-w-md leading-relaxed">
            Notes on water quality, purification technology and everyday
            wellness — from the Blue Guard team in Dehradun.
          </p>
        </div>
        <div className="hidden md:block shrink-0">
          <svg width="160" height="160" viewBox="0 0 160 160" aria-hidden="true">
            <circle cx="80" cy="80" r="76" fill="none" stroke="#2563EB" strokeOpacity="0.35" strokeWidth="1.5" />
            <circle cx="80" cy="80" r="56" fill="none" stroke="#93C5FD" strokeOpacity="0.4" strokeWidth="1.5" />
            <path
              d="M80 40 C96 64 106 82 106 98 C106 118 95 132 80 132 C65 132 54 118 54 98 C54 82 64 64 80 40 Z"
              fill="#2563EB"
            />
          </svg>
        </div>
      </div>
      <svg viewBox="0 0 1200 60" className="w-full h-10 md:h-14" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="#EAF3FC" />
      </svg>
    </section>
  );
}

/* ---------- blog card ---------- */

function BlogCard({ post }) {
  return (
    <article className="bg-white border border-[#D7E7FB] rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:shadow-[#2563EB]/10 transition-shadow">
      <div className="aspect-[16/9] w-full">
        <CoverArt type={post.cover} />
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h2 className="font-serif text-xl md:text-2xl text-[#0B3C6B] mb-3 leading-snug">
          {post.title}
        </h2>
        <p className="text-sm text-[#4A607A] leading-relaxed mb-5 flex-1">
          {post.excerpt}
        </p>

 <Link
  to={
    post.slug === "benefits-of-drinking-warm-water"
      ? "/Blogone"
      : "/Blogtwo"
  }
  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8] mb-5"
>
  Read More <ArrowRight size={14} />
</Link>

        <div className="flex items-center gap-4 pt-4 border-t border-[#EAF3FC] text-xs text-[#4A607A]">
          <span className="inline-flex items-center gap-1.5">
            <User size={13} className="text-[#93C5FD]" /> {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={13} className="text-[#93C5FD]" /> {post.date}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ---------- page ---------- */

export default function Blog() {
  return (
    <main className="bg-[#EAF3FC]">
      <BlogHero />

      <section className="px-6 py-16 md:py-20 bg-[#EAF3FC]">
        <div className="mx-auto w-[90%] lg:w-[80%] max-w-6xl">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
