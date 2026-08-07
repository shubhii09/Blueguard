import React from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  ShieldCheck,
  Award,
  Compass,
  MoveUpRight,
  MessagesSquare,
  Landmark,
  Leaf,
  Wrench,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";


const ideology = [
  {
    label: "Purpose",
    icon: Compass,
    body: "Our reason for being, and the reason we show up for it every day. It keeps us close to our customers and partners, and keeps our culture sharp as we build products that stay ready for tomorrow.",
  },
  {
    label: "Vision",
    icon: Landmark,
    body: "The pillar we stand by through every challenge. It sets the foundation of the company and runs through every person who works here.",
  },
  {
    label: "Mission",
    icon: MoveUpRight,
    body: "One direction, always: forward and up, like an arrow that doesn't waver once it's aimed.",
  },
  {
    label: "Values",
    icon: MessagesSquare,
    body: "Two edges of the same idea — a soft side that looks after our customers, and a sharp, focused side that looks after our business.",
  },
];

const technologies = [
  "RO + UF + TDS",
  "RO + UV + UF + TDS",
  "RO + UV + MTDS",
  "RO + UV + ATDS with Active Copper",
  "UV + TDS",
];

const credentials = [
  {
    icon: Award,
    title: "Certified nationally",
    body: "The only water purifier company recognised by some of India's most prestigious certifying agencies.",
  },
  {
    icon: Droplets,
    title: "Minerals retained",
    body: "Patented RO+UV+UF+TDS Controller purifies water while keeping the natural minerals your body needs.",
  },
  {
    icon: ShieldCheck,
    title: "Purity held in storage",
    body: "UV light inside the storage tank keeps purified water clean until the moment you pour it.",
  },
  {
    icon: Leaf,
    title: "Save Water Technology",
    body: "Built to protect the ecological balance — so purification doesn't come at the cost of wasted water.",
  },
];

/* ---------- signature: layered wave divider, blue only ---------- */

function WaveDivider({ flip = false }) {
  return (
    <svg
      viewBox="0 0 1200 80"
      className={`w-full h-16 md:h-20 ${flip ? "rotate-180" : ""}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z" fill="#0B3C6B" opacity="0.05" />
      <path d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50 L1200,80 L0,80 Z" fill="#2563EB" opacity="0.15" />
      <path d="M0,60 C200,30 400,70 600,45 C800,20 1000,70 1200,45 L1200,80 L0,80 Z" fill="#93C5FD" opacity="0.3" />
    </svg>
  );
}

/* ---------- hero graphic: a single clean purity mark — concentric
   rings closing in on a droplet, nothing literal, nothing busy ---------- */

function HeroGraphic() {
  return (
    <svg viewBox="0 0 640 640" className="w-full h-full" role="img" aria-labelledby="heroGraphicTitle">
      <title id="heroGraphicTitle">A blue droplet mark ringed by concentric purification lines</title>
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#EAF3FC" />
          <stop offset="100%" stopColor="#CFE3FB" />
        </radialGradient>
        <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      <rect width="640" height="640" fill="url(#bgGrad)" />

      {/* concentric rings — quiet, evenly spaced, no text crowding them */}
      <circle cx="320" cy="320" r="240" fill="none" stroke="#2563EB" strokeOpacity="0.12" strokeWidth="1.5" />
      <circle cx="320" cy="320" r="185" fill="none" stroke="#2563EB" strokeOpacity="0.18" strokeWidth="1.5" />
      <circle cx="320" cy="320" r="130" fill="none" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />

      {/* single clean droplet at the centre */}
      <path
        d="M320 220 C358 272 382 308 382 342 C382 385 355 414 320 414 C285 414 258 385 258 342 C258 308 282 272 320 220 Z"
        fill="url(#dropGrad)"
      />
      {/* light catch inside the droplet */}
      <path d="M296 300 C300 320 300 340 292 360" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* three small rising bubbles, echoing Save Water Technology */}
      <circle cx="470" cy="470" r="6" fill="#2563EB" fillOpacity="0.35" />
      <circle cx="500" cy="430" r="4" fill="#2563EB" fillOpacity="0.3" />
      <circle cx="180" cy="460" r="5" fill="#2563EB" fillOpacity="0.3" />
    </svg>
  );
}

/* ---------- page ---------- */

export default function About() {
  return (
    <main className="bg-white text-[#0B3C6B]">
      {/* HERO — big visual first */}
      <section className="relative overflow-hidden bg-[#0B3C6B]">
<div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid md:grid-cols-2 items-center gap-10 py-16 md:py-24">
          <div>
            <span className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-[#93C5FD] mb-5">
              Authorised RO Provider · Dehradun
            </span>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-white">
              Who We Are
            </h1>
            <p className="mt-6 text-[#CFE3FB] text-base md:text-lg leading-relaxed max-w-lg">
              Blue Guard purifies water while retaining the natural minerals a
              healthy body needs, with UV light in the storage tank keeping
              that purity intact until you drink it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Contact Us <MoveUpRight size={16} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-[#2E578F] hover:border-white text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                See RO Range
              </Link>
            </div>
          </div>
          <div className="aspect-square w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
            <HeroGraphic />
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* CREDENTIALS — white section */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-white">
<div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#2563EB] mb-3">
            Globally recognised technology
          </p>
          <h2 className="font-serif text-3xl md:text-4xl max-w-2xl mb-10 text-[#0B3C6B]">
            Purification that protects your health — and the water itself.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-[#EAF3FC] border border-[#D7E7FB] rounded-2xl p-6">
                <Icon size={22} className="text-[#2563EB] mb-4" />
                <h3 className="font-serif text-lg mb-2 text-[#0B3C6B]">{title}</h3>
                <p className="text-sm text-[#4A607A] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEOLOGY — light blue section */}
      <section className="bg-[#EAF3FC] px-6 md:px-10 py-16 md:py-20">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#2563EB] mb-3">
            Our Ideology
          </p>
          <h2 className="font-serif text-3xl md:text-4xl max-w-2xl mb-10 text-[#0B3C6B]">
            What moves us, and what we won't bend on.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {ideology.map(({ label, icon: Icon, body }) => (
              <div key={label} className="bg-white rounded-2xl p-8 border border-[#D7E7FB]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#2563EB]" />
                  </span>
                  <h3 className="font-serif text-xl text-[#0B3C6B]">{label}</h3>
                </div>
                <p className="text-sm text-[#4A607A] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORISED DEALER — white section */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-white">
<div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#2563EB] mb-3">
              Authorised RO Dealer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#0B3C6B]">Verma Engineering Works</h2>
            <p className="text-[#4A607A] leading-relaxed mb-4">
              One of the leading authorised water purifier dealers in Dehradun,
              Uttarakhand — at straightforward prices.
            </p>
            <p className="text-[#4A607A] leading-relaxed mb-4">
              Water quality changes street by street in Dehradun. That's why we
              fit RO or RO+UV systems based on your location's water and your
              household's needs, rather than one setup for everyone. Clean,
              mineral-rich water matters here — water-borne illness is a real
              risk when it isn't, and staying healthy starts with what comes out
              of the tap.
            </p>
            <p className="text-[#4A607A] leading-relaxed">
              Our trained team can also service a purifier you bought elsewhere.
              One call, and we'll send someone to your door.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-[#0B3C6B]">
              <PhoneCall size={18} className="text-[#2563EB]" />
              <span>Already own a purifier that's acting up? We still fix it.</span>
            </div>
          </div>

          <div className="bg-[#0B3C6B] rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-xl text-white mb-6">
              Purification combinations we install
            </h3>
            <ul className="space-y-3">
              {technologies.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[#CFE3FB] text-sm">
                  <CheckCircle2 size={16} className="text-[#93C5FD] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* CLOSING CTA — dark blue section */}
      <section className="bg-[#0B3C6B] px-6 md:px-10 py-16 md:py-20">
       <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto text-center">
          <Wrench size={22} className="text-[#93C5FD] mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Trained hands, close by.
          </h2>
          <p className="text-[#CFE3FB] leading-relaxed mb-8 max-w-xl mx-auto">
            Whether it's a new installation or a purifier that's stopped
            behaving, our Dehradun team is a call away.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors"
          >
            Contact Us <MoveUpRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-6 text-center text-xs text-[#93C5FD] bg-[#0B3C6B]">
        © {new Date().getFullYear()} Blue Guard · Verma Engineering Works, Dehradun
      </footer>
    </main>
  );
}
