import React from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Tag,
  User,
  ArrowLeft,
  ArrowRight,
  Brain,
  HeartPulse,
  Baby,
  Sparkles,
  Bone,
  Atom,
  Activity,
  Bandage,
  Droplets,
} from "lucide-react";


/* ---------- palette: blue + white only, same as About / Blog ---------- */

const careAreas = [
  {
    number: "01",
    icon: Brain,
    title: "Brain and nervous system",
    body: "Copper is crucial for the normal development of the brain and nervous system. It plays a role in the production and maintenance of myelin, which insulates nerve cells, so ensuring the proper transmission of nerve impulses.",
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "Immunity and heart health",
    body: "Copper is said to boost immunity and also cure anaemia, which helps the body defend itself from infection and heal quickly. Research studies have indicated that copper can help increase HDL (good cholesterol) and decrease LDL (bad cholesterol). The right balance lowers the chances of cardiovascular disease.",
  },
  {
    number: "03",
    icon: Baby,
    title: "Growth and development",
    body: "Copper is essential for infant growth, bone strength, red and white blood cell maturation, iron transport, cholesterol and glucose metabolism, heart muscle contraction and brain development.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Skincare protection",
    body: "Copper has numerous skin benefits. It helps in the Development of Collagen and Elastin in the skin. It also helps skin repair and protect from sun damage.",
  },
];

const minerals = [
  { icon: Bone, name: "Calcium", body: "Essential for building and maintaining strong bones." },
  { icon: Atom, name: "Copper", body: "Boosts immunity and acts as an antioxidant." },
  { icon: Activity, name: "Magnesium", body: "Helps steady heart rhythm and promotes normal blood pressure." },
  { icon: Bandage, name: "Zinc", body: "Helps in cell growth and wound healing." },
];

/* ---------- top image: 5 reasons infographic ---------- */


export default function BlogPostActiveCopper() {
  return (
    <main className="bg-white text-[#0B3C6B]">
      <article className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-10 md:py-14">

        {/* back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[#2563EB] hover:text-[#1D4ED8] mb-8"
        >
          <ArrowLeft size={15} />
          Back to Blog
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
          Blueguard Active Copper Maxx
        </h1>

     

        {/* intro */}
        <div className="mt-10 space-y-2 text-[#4A607A] leading-relaxed">
          <p className="font-serif text-xl text-[#0B3C6B]">How copper takes care of you</p>
          <p>Copper helps you maintain good health in various ways:</p>
        </div>

        {/* care areas */}
        <div className="mt-8 space-y-5">
          {careAreas.map(({ number, icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-[#EAF3FC] border border-[#D7E7FB] rounded-2xl p-6 flex gap-5"
            >
              <div className="shrink-0">
                <span className="w-11 h-11 rounded-full bg-white border border-[#D7E7FB] flex items-center justify-center">
                  <Icon size={19} className="text-[#2563EB]" />
                </span>
              </div>
              <div>
                <p className="text-xs font-mono tracking-[0.15em] text-[#93C5FD] mb-1">{number}</p>
                <h3 className="font-serif text-lg text-[#0B3C6B] mb-2">{title}</h3>
                <p className="text-sm text-[#4A607A] leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* mineral benefits grid */}
        <div className="mt-14">
          <h2 className="font-serif text-2xl text-[#0B3C6B] mb-1">
            Benefits of Zn + Mg + Ca + Cu
          </h2>
          <p className="text-sm text-[#4A607A] mb-6">
            The goodness of copper, alongside the minerals that round it out.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {minerals.map(({ icon: Icon, name, body }) => (
              <div
                key={name}
                className="bg-[#0B3C6B] rounded-2xl p-6 text-center flex flex-col items-center"
              >
                <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#93C5FD]" />
                </span>
                <h3 className="font-serif text-base text-white mb-2">{name}</h3>
                <p className="text-xs text-[#CFE3FB] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* post navigation */}
        <div className="mt-14 pt-6 border-t border-[#EAF3FC] flex justify-end">
          <Link
            to="/blog/benefits-of-drinking-warm-water"
            className="inline-flex items-center gap-1.5 text-sm text-[#2563EB] hover:text-[#1D4ED8]"
          >
            Next Post: Benefits Of Drinking Warm Water At Every Age <ArrowRight size={15} />
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
