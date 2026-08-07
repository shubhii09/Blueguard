import React from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Tag,
  User,
  ArrowLeft,
  Scale,
  HeartPulse,
  Utensils,
  Activity,
  Wind,
  Moon,
  Sparkles,
  Droplets,
} from "lucide-react";
import warmWater from "../assets/images/Warm-Water-Benefits1.webp";

/* ---------- palette: blue + white only, same as About / Blog ---------- */

const benefits = [
  {
    icon: Scale,
    title: "Weight loss",
    body: "Start your day with a glass of warm water and honey — great for maintaining a healthy metabolism and helping with weight loss.",
  },
  {
    icon: HeartPulse,
    title: "Menstrual cramps",
    body: "Drinking warm water before bed during menstrual cramps has a soothing effect on abdominal muscles.",
  },
  {
    icon: Utensils,
    title: "Digestion",
    body: "A glass of warm water with honey and lemon right when you wake up helps your body digest food better — hot water helps break down the oil in what you've eaten.",
  },
  {
    icon: Activity,
    title: "Constipation",
    body: "Often caused by too little water in the body — warm water before bed and on waking helps improve bowel movements and reduces episodes of constipation.",
  },
  {
    icon: Wind,
    title: "Throat irritation & congestion",
    body: "An excellent remedy against throat irritation, cough and cold — it dissolves phlegm and clears it from the respiratory tract.",
  },
  {
    icon: Moon,
    title: "Sleep cycle",
    body: "Relaxes and soothes body muscles and nerves before bed, which in turn induces a good night's sleep.",
  },
  {
    icon: Sparkles,
    title: "Skin health",
    body: "Aids detoxification by raising your body's temperature and helping release toxins through the skin.",
  },
];

/* ---------- top image: a clearly marked placeholder slot ----------
   Swap the <img src="..."> below with your own photo, or a free-license
   one from unsplash.com / pexels.com — search "warm water honey lemon".
   Recommended size: 1600x900 or larger, landscape.
--------------------------------------------------------------------- */

function CoverImage() {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl">
      <img
        src={warmWater}
        alt="Benefits of drinking warm water"
        className="w-full h-[300px] md:h-[480px] object-contain rounded-2xl"
      />
    </div>
  );
}

      <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
        <Droplets size={32} className="text-[#2563EB] mb-3" />
        <p className="text-sm text-[#4A607A] max-w-xs">
          Add your photo here — replace this block with an{" "}
          <code className="bg-white px-1.5 py-0.5 rounded text-[#2563EB]">
            &lt;img /&gt;
          </code>{" "}
          pointing to your own image.
        </p>
      </div>
 
export default function BlogPostWarmWater() {
  return (
    <main className="bg-white text-[#0B3C6B]">
      <article className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-10 md:py-14">        {/* back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[#2563EB] hover:text-[#1D4ED8] mb-8"
        >
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        {/* meta row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#4A607A] mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Tag size={13} className="text-[#93C5FD]" /> RO
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User size={13} className="text-[#93C5FD]" /> admin
          </span>
          <a href="#comments" className="inline-flex items-center gap-1.5 hover:text-[#2563EB]">
            <MessageCircle size={13} className="text-[#93C5FD]" /> Leave a Comment
          </a>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl text-[#0B3C6B] leading-tight mb-8">
          Benefits Of Drinking Warm Water At Every Age
        </h1>

        <CoverImage />

        {/* intro */}
        <div className="mt-10 space-y-5 text-[#4A607A] leading-relaxed">
          <p>
            You'll find a million articles on the net telling you the
            benefits of drinking warm water. Let's be honest — the world is
            divided into two types of people: those who like their water
            warm, and those who want it super chilled. We all know water is
            essential for survival. Keeping your body hydrated matters for
            digestion, healthy skin, and avoiding prolonged headaches.
          </p>
          <p className="font-medium text-[#0B3C6B]">
            Benefits of drinking warm water throughout the day include:
          </p>
        </div>

        {/* benefits list */}
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-[#EAF3FC] border border-[#D7E7FB] rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-9 h-9 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[#2563EB]" />
                </span>
                <h3 className="font-serif text-base text-[#0B3C6B]">{title}</h3>
              </div>
              <p className="text-sm text-[#4A607A] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* closing */}
        <div className="mt-10 space-y-5 text-[#4A607A] leading-relaxed">
          <p>
            The right amount of warm water depends on age, weather, and how
            active you are day to day — but from Ayurveda to ancient
            Japanese practice, everyone agrees on the benefits of building
            this into a daily habit.
          </p>
          <p>
            Our bodies need to stay properly fuelled and hydrated to keep
            functioning smoothly, whether you're a child or an adult. Some
            reports also suggest that warm water can help ward off throat
            infections and support the right electrolyte balance by helping
            flush out toxins.
          </p>
          <p>
            As we age, our chances of catching infections increase too — and
            with everything the last few years have brought, building small
            habits like this can genuinely help. Don't take our word for
            it — try warm water for two months and see the difference
            yourself.
          </p>
        </div>

        {/* post navigation */}
        <div className="mt-14 pt-6 border-t border-[#EAF3FC]">
          <Link
            to="/blog/blueguard-active-copper-maxx"
            className="inline-flex items-center gap-1.5 text-sm text-[#2563EB] hover:text-[#1D4ED8]"
          >
            <ArrowLeft size={15} /> Previous Post: Blueguard Active Copper Maxx
          </Link>
        </div>

        {/* comment form */}
        <div id="comments" className="mt-16 pt-10 border-t border-[#EAF3FC]">
          <h2 className="font-serif text-2xl text-[#0B3C6B] mb-1">Leave a Comment</h2>
          <p className="text-sm text-[#4A607A] mb-6">
            Your email address will not be published. Required fields are marked *
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <textarea
              placeholder="Type here.."
              rows={5}
              className="w-full rounded-xl border border-[#D7E7FB] bg-[#EAF3FC] px-4 py-3 text-sm text-[#0B3C6B] placeholder:text-[#7C97B5] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-[#0B3C6B] mb-1.5">Name*</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#D7E7FB] px-4 py-2.5 text-sm text-[#0B3C6B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#0B3C6B] mb-1.5">Email*</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-[#D7E7FB] px-4 py-2.5 text-sm text-[#0B3C6B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#0B3C6B] mb-1.5">Website</label>
              <input
                type="url"
                className="w-full rounded-xl border border-[#D7E7FB] px-4 py-2.5 text-sm text-[#0B3C6B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>

            <label className="flex items-center gap-2 text-xs text-[#4A607A]">
              <input type="checkbox" className="accent-[#2563EB]" />
              Save my name, email, and website in this browser for the next time I comment.
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Post Comment
            </button>
          </form>
        </div>
      </article>
    </main>
  );
}
