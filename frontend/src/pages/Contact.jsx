import React, { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

/* ---------- palette: blue + white only, same as About / Blog ---------- */

/* ---------- custom brand marks — lucide doesn't carry accurate
   Facebook / X / Google logos, so these are small inline SVGs ---------- */

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.35A21 21 0 0 0 13.9 4c-2.3 0-3.9 1.4-3.9 4v2.4H7.4v3h2.6V21h3.5Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.9 10.7 20.4 3h-1.6l-5.6 6.7L8.7 3H3l6.8 9.7L3 21h1.6l6-7.1L15.3 21H21l-7.1-10.3Zm-2.1 2.5-.7-1L5.6 4.2h2.4l4.5 6.3.7 1 5.9 8.3h-2.4l-4.9-6.9Z" />
    </svg>
  );
}

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21.3 12.2c0-.7-.06-1.4-.19-2H12v3.8h5.2a4.5 4.5 0 0 1-1.94 2.95v2.4h3.14c1.84-1.7 2.9-4.2 2.9-7.15Z"
      />
      <path
        fill="currentColor"
        d="M12 21.5c2.6 0 4.8-.86 6.4-2.34l-3.14-2.4c-.87.58-2 .93-3.26.93-2.5 0-4.63-1.7-5.38-3.97H3.38v2.48A9.5 9.5 0 0 0 12 21.5Z"
        opacity="0.85"
      />
      <path
        fill="currentColor"
        d="M6.62 13.72a5.7 5.7 0 0 1 0-3.44V7.8H3.38a9.5 9.5 0 0 0 0 8.4l3.24-2.48Z"
        opacity="0.7"
      />
      <path
        fill="currentColor"
        d="M12 6.31c1.42 0 2.68.49 3.68 1.44l2.76-2.76C16.79 3.36 14.6 2.5 12 2.5A9.5 9.5 0 0 0 3.38 7.8l3.24 2.48c.75-2.27 2.88-3.97 5.38-3.97Z"
        opacity="0.55"
      />
    </svg>
  );
}

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: GoogleIcon, label: "Google", href: "#" },
];

const infoItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "Ajabpur Khurd, Near Bengali Kothi, Dehradun",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "surenderkumar003@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "9761596029, 9359543399",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire this up to your form endpoint / email service
  };

  return (
    <main className="bg-[#EAF3FC]">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto w-[90%] lg:w-[80%] max-w-6xl">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#2563EB] mb-3 text-center md:text-left">
            Get In Touch
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-[#0B3C6B] mb-12 text-center md:text-left">
            We're Ready, Let's Talk.
          </h1>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-white rounded-2xl border border-[#D7E7FB] p-6 md:p-10 space-y-5"
            >
              <div>
                <label className="block text-xs font-medium text-[#0B3C6B] mb-1.5">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D7E7FB] px-4 py-3 text-sm text-[#0B3C6B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0B3C6B] mb-1.5">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D7E7FB] px-4 py-3 text-sm text-[#0B3C6B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0B3C6B] mb-1.5">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#D7E7FB] px-4 py-3 text-sm text-[#0B3C6B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors"
              >
                SEND MESSAGE <Send size={15} />
              </button>
            </form>

            {/* contact info */}
            <div className="lg:col-span-2 bg-[#0B3C6B] rounded-2xl p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-xl text-white mb-6">Contact Info</h2>
                <div className="space-y-6">
                  {infoItems.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-4">
                      <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Icon size={17} className="text-[#93C5FD]" />
                      </span>
                      <div>
                        <p className="text-xs font-mono tracking-[0.1em] uppercase text-[#93C5FD] mb-1">
                          {label}
                        </p>
                        <p className="text-sm text-[#CFE3FB] leading-relaxed">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
