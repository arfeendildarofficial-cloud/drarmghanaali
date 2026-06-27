import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  Phone, MapPin, Clock, Check, Baby, Stethoscope, HeartPulse,
  Sparkles, ChevronDown, Mail, Instagram, Facebook, Menu, X, CalendarHeart,
} from "lucide-react";
import doctorPortraitAsset from "@/assets/heroImage.webp.asset.json";
const doctorPortrait = doctorPortraitAsset.url;
import ultrasoundRoom from "@/assets/ultrasound-room.jpg";
import consultationOffice from "@/assets/consultation-office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Armghana Ali — Gynecologist & Obstetrician in Islamabad" },
      { name: "description", content: "Book a consultation with Dr. Armghana Ali (MBBS, FCPS) at Hyaat Medical Center G-13 or Saeed Medical Center G-11. Obstetrics, gynecology, infertility & ultrasound." },
      { property: "og:title", content: "Dr. Armghana Ali — Gynecologist & Obstetrician in Islamabad" },
      { property: "og:description", content: "Compassionate women's healthcare across Islamabad." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        name: "Dr. Armghana Ali",
        medicalSpecialty: ["Obstetrics", "Gynecology"],
        areaServed: "Islamabad",
        address: [
          { "@type": "PostalAddress", streetAddress: "Hyaat Medical Center, G-13/1", addressLocality: "Islamabad", addressCountry: "PK" },
          { "@type": "PostalAddress", streetAddress: "Saeed Medical Center, G-11 Markaz", addressLocality: "Islamabad", addressCountry: "PK" },
        ],
      }),
    }],
  }),
  component: Index,
});

const sectors = ["G-10", "G-11", "G-13", "E-11", "F-10", "F-11", "I-8", "I-9", "D-12", "B-17", "DHA Phase 1", "DHA Phase 2", "Bahria Town"];

const services = [
  {
    icon: Baby,
    title: "Obstetrics & Maternity",
    image: ultrasoundRoom,
    desc: "From pre-conception counseling to postpartum care, we provide a nurturing environment for your journey to motherhood. Expert management of high-risk pregnancies and routine deliveries.",
    points: ["Prenatal Screening & Monitoring", "Labor & Delivery Management", "High-Risk Pregnancy Care", "Postpartum Wellness"],
    shape: "rounded-[80px_20px_80px_20px]",
  },
  {
    icon: HeartPulse,
    title: "Gynecology & Infertility",
    image: consultationOffice,
    desc: "Addressing reproductive health with sensitivity and advanced clinical expertise. We offer personalised treatment plans for hormonal issues, infertility, and surgical interventions.",
    points: ["Infertility Workup & Management", "PCOS & Hormonal Care", "Menstrual Disorders", "Family Planning Services"],
    shape: "rounded-[20px_80px_20px_80px]",
  },
];

const allServices = [
  { icon: Baby, title: "Antenatal & Postnatal Care" },
  { icon: Stethoscope, title: "Gynecological Consultations" },
  { icon: HeartPulse, title: "Infertility Treatment" },
  { icon: Sparkles, title: "Ultrasound & Diagnostics" },
];

const testimonials = [
  { quote: "Dr. Armghana's calm approach and thorough explanations made my first pregnancy journey so comfortable. She truly cares about her patients.", name: "Sarah Khan", role: "Patient, G-13" },
  { quote: "The best gynecologist in Islamabad. Her expertise in managing high-risk pregnancies is unmatched. Highly professional environment.", name: "Mariam W.", role: "Patient, G-11" },
  { quote: "I visited her for PCOS treatment. Within 3 months, I saw significant improvement. She is patient and listens to every concern.", name: "Zainab Qureshi", role: "Patient, E-11" },
];

const faqs = [
  { q: "How do I book an appointment?", a: "Fill the appointment form below or call the clinic directly. Our team confirms within 2 hours during working hours." },
  { q: "Which insurance and panels are accepted?", a: "We accept most major Pakistani health panels. Please confirm with reception when booking your visit." },
  { q: "Do you handle high-risk pregnancies?", a: "Yes. Dr. Armghana specialises in high-risk obstetrics including hypertensive, diabetic and previous-c-section pregnancies." },
  { q: "Are ultrasounds available in-clinic?", a: "Yes. Both clinics offer advanced obstetric and gynecological ultrasound performed by Dr. Armghana." },
  { q: "What should I bring to my first visit?", a: "Bring your CNIC, any previous medical reports, ultrasound CDs, prescriptions, and a list of current medications." },
];

function Index() {
  return (
    <div className="min-h-screen bg-bloom-50 font-body text-bloom-950 selection:bg-bloom-100">
      <SideRail />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Locations />
        <ServiceAreas />
        <Testimonials />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#locations", label: "Locations" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-bloom-50/95 border-b border-bloom-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-4">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden h-11 w-11 -ml-2 inline-flex items-center justify-center rounded-full text-bloom-700 hover:bg-bloom-100/70 active:scale-95 transition"
        >
          <Menu className="w-6 h-6" strokeWidth={1.75} />
        </button>
        <a href="#home" className="font-display text-xl sm:text-2xl text-bloom-700 truncate md:col-start-1">Dr. Armghana Ali</a>
        <div className="flex items-center gap-2 sm:gap-8 justify-self-end">
          <nav className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-bloom-400 transition-colors">{n.label}</a>
            ))}
          </nav>
          {/* Mobile compact call button */}
          <a
            href="tel:+923001234567"
            aria-label="Call clinic"
            className="md:hidden h-11 w-11 inline-flex items-center justify-center rounded-full bg-bloom-100 text-bloom-700 hover:bg-bloom-100/80 active:scale-95 transition"
          >
            <Phone className="w-5 h-5" strokeWidth={1.75} />
          </a>
          <a href="#book" className="hidden sm:inline-flex items-center bg-bloom-700 text-white px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium hover:bg-bloom-950 transition-colors shadow-lg shadow-bloom-700/20 active:scale-95 duration-200 shrink-0">
            Book Consultation
          </a>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-bloom-950/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          style={{ backgroundColor: "#fef0f5" }}
          className={`absolute top-0 left-0 h-full w-[82%] max-w-sm shadow-2xl flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-bloom-100">
            <span className="font-display text-xl text-bloom-700">Dr. Armghana Ali</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full text-bloom-700 hover:bg-bloom-100 active:scale-95 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 px-3 py-6 flex flex-col gap-1 text-base">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-bloom-950 hover:bg-bloom-100/70 font-medium tracking-wide transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-8 pt-4 border-t border-bloom-100 space-y-3">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-bloom-700 text-white py-3.5 rounded-full text-sm font-medium hover:bg-bloom-950 transition-colors shadow-lg shadow-bloom-700/20"
            >
              <CalendarHeart className="w-4 h-4" />
              Book Consultation
            </a>
            <a
              href="tel:+923001234567"
              className="flex items-center justify-center gap-2 bg-bloom-100 text-bloom-700 py-3 rounded-full text-sm font-medium hover:bg-bloom-100/70 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call the Clinic
            </a>
            <div className="flex items-center justify-center gap-4 pt-2 text-bloom-700/70">
              <a href="#" aria-label="Instagram" className="hover:text-bloom-700 transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-bloom-700 transition"><Facebook className="w-5 h-5" /></a>
              <a href="mailto:contact@drarmghana.com" aria-label="Email" className="hover:text-bloom-700 transition"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

function SideRail() {
  const items = [
    { id: "home", label: "Home" },
    { id: "services", label: "Care" },
    { id: "about", label: "Expertise" },
    { id: "locations", label: "Clinics" },
    { id: "book", label: "Visit" },
  ];
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-6">
      {items.map((it, i) => (
        <a key={it.id} href={`#${it.id}`} className="group flex items-center gap-4">
          <span className={`size-2 rounded-full transition-colors ${i === 0 ? "bg-bloom-700 ring-4 ring-bloom-700/10" : "bg-bloom-400/40 group-hover:bg-bloom-700"}`} />
          <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">{it.label}</span>
        </a>
      ))}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-[reveal-up_0.8s_cubic-bezier(0.19,1,0.22,1)_both]">
          <span className="inline-block py-1 px-4 rounded-full bg-bloom-100 text-bloom-700 text-xs font-semibold tracking-widest uppercase mb-6">
            Consultant Gynecologist & Obstetrician
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-bloom-950 leading-[0.9] mb-8">
            Dedicated care <br/>
            <span className="italic text-bloom-400">for every stage.</span>
          </h1>
          <p className="text-lg text-bloom-950/70 max-w-md leading-relaxed mb-10">
            Providing compassionate, evidence-based healthcare for women in Islamabad. Specialising in high-risk obstetrics, infertility, and advanced gynecology.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-white border border-bloom-100 flex items-center justify-center text-bloom-700 font-bold text-xs">MBBS</div>
              <div className="size-12 rounded-full bg-white border border-bloom-100 flex items-center justify-center text-bloom-700 font-bold text-xs">FCPS</div>
            </div>
            <div className="h-12 w-px bg-bloom-100 mx-2" />
            <div className="text-sm">
              <p className="font-semibold">15+ Years</p>
              <p className="text-bloom-950/60">Clinical Experience</p>
            </div>
          </div>
        </div>

        <div className="relative animate-[reveal-up_1s_cubic-bezier(0.19,1,0.22,1)_both] [animation-delay:200ms]">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-bloom-100/50 rounded-full blur-3xl" />
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-t-[240px] rounded-b-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img src={doctorPortrait} alt="Dr. Armghana Ali" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-8 -right-2 sm:-right-8 bg-white p-6 rounded-3xl shadow-xl max-w-[220px] border border-bloom-50">
            <p className="text-xs font-bold uppercase tracking-tighter text-bloom-400 mb-1">Patient Trust</p>
            <p className="font-display text-lg leading-tight italic">"A gentle approach to complex care."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-widest text-bloom-400">About the Doctor</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-6 text-bloom-950">
            Expertise guided by <span className="italic text-bloom-700">empathy.</span>
          </h2>
          <div className="space-y-5 text-bloom-950/70 leading-relaxed">
            <p>Dr. Armghana Ali is a distinguished Consultant Obstetrician & Gynecologist based in Islamabad, dedicated to providing holistic healthcare for women across all stages of life.</p>
            <p>Her clinical practice is built on a foundation of empathy and evidence-based medicine — every patient leaves heard, understood and empowered in their health decisions.</p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat n="15+" label="Years experience" />
            <Stat n="5K+" label="Patients served" />
            <Stat n="2" label="Clinic locations" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <Credential title="MBBS" sub="Medical Degree" />
            <Credential title="FCPS" sub="Gynae & Obs" />
            <Credential title="PMC" sub="Registered" />
            <Credential title="SOGP" sub="Member" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl lg:text-4xl text-bloom-700">{n}</p>
      <p className="text-xs uppercase tracking-widest text-bloom-950/50 mt-1">{label}</p>
    </div>
  );
}

function Credential({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="p-6 border-l-2 border-bloom-400 bg-bloom-50 rounded-r-2xl">
      <span className="block font-display text-2xl text-bloom-700">{title}</span>
      <span className="text-xs uppercase tracking-widest text-bloom-950/50">{sub}</span>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-bloom-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-bloom-400">Specialties</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-4">Comprehensive Women's Health</h2>
          <p className="text-bloom-950/60 max-w-xl mx-auto">Specialised services across Islamabad sectors — delivered with clinical excellence and personal warmth.</p>
        </div>

        {services.map((s, i) => (
          <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24 ${i < services.length - 1 ? "mb-24 lg:mb-32" : ""}`}>
            <div className="lg:w-1/2 w-full">
              <div className={`aspect-square overflow-hidden ${s.shape}`}>
                <img src={s.image} alt={s.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="inline-flex items-center justify-center size-12 rounded-2xl bg-bloom-100 text-bloom-700 mb-6">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl mb-6">{s.title}</h3>
              <p className="text-bloom-950/70 text-lg leading-relaxed mb-8">{s.desc}</p>
              <ul className="space-y-4">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="size-6 rounded-full bg-bloom-100 flex items-center justify-center text-bloom-700 shrink-0">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {allServices.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded-3xl border border-bloom-100/60 hover:border-bloom-400 transition-colors">
              <s.icon className="size-7 text-bloom-700 mb-4" />
              <p className="font-display text-lg leading-tight">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const clinics = [
    {
      name: "Hyaat Medical Center",
      address: "G-13/1, Islamabad",
      days: "Mon, Wed, Fri",
      hours: "04:00 PM — 07:00 PM",
      phone: "+92 51 123 4567",
      tel: "tel:+92511234567",
      map: "https://maps.google.com/?q=Hyaat+Medical+Center+G-13+Islamabad",
    },
    {
      name: "Saeed Medical Center",
      address: "G-11 Markaz, Islamabad",
      days: "Tue, Thu, Sat",
      hours: "05:00 PM — 08:00 PM",
      phone: "+92 51 765 4321",
      tel: "tel:+92517654321",
      map: "https://maps.google.com/?q=Saeed+Medical+Center+G-11+Markaz+Islamabad",
    },
  ];
  return (
    <section id="locations" className="py-24 bg-bloom-100/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-bloom-400">Visit</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-2">Clinic Locations</h2>
            <p className="text-bloom-950/60">Convenient care across Islamabad Markaz areas.</p>
          </div>
          <a href="#book" className="text-sm font-bold text-bloom-700 underline underline-offset-8 hover:text-bloom-950 transition-colors">Request an Appointment →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {clinics.map((c) => (
            <div key={c.name} className="bg-white p-8 lg:p-10 rounded-[40px] shadow-sm border border-bloom-100/50 hover:shadow-xl transition-all duration-500">
              <h3 className="font-display text-2xl lg:text-3xl mb-8">{c.name}</h3>
              <div className="space-y-5 text-sm text-bloom-950/70">
                <Row icon={MapPin} label={c.address} />
                <Row icon={Clock} label={`${c.days} • ${c.hours}`} />
                <Row icon={Phone}>
                  <a href={c.tel} className="text-bloom-700 font-semibold hover:text-bloom-950 transition-colors">{c.phone}</a>
                </Row>
              </div>
              <div className="pt-6 mt-6 border-t border-bloom-50 flex flex-wrap gap-4">
                <a href={c.map} target="_blank" rel="noopener" className="text-sm font-semibold text-bloom-700 underline underline-offset-4 hover:text-bloom-950">Get directions →</a>
                <a href={c.tel} className="text-sm font-semibold text-bloom-950/70 hover:text-bloom-700">Call clinic →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, label, children }: { icon: any; label?: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="size-4 text-bloom-700 mt-0.5 shrink-0" />
      <div className="min-w-0">{children ?? label}</div>
    </div>
  );
}

function ServiceAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-bloom-400">Service Areas</span>
        <h2 className="font-display text-3xl lg:text-4xl mt-3 mb-8">Serving women across Islamabad</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((s) => (
            <span key={s} className="px-5 py-2 rounded-full bg-bloom-50 border border-bloom-100 text-sm font-medium text-bloom-700">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-bloom-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-bloom-400">Patient Voices</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3">Trusted by families in Islamabad</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-8 rounded-3xl border border-bloom-100/60">
              <p className="font-display text-xl italic leading-snug text-bloom-950 mb-6">"{t.quote}"</p>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs uppercase tracking-widest text-bloom-400 mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Request received", { description: "Our team will call you within 2 hours to confirm." });
    }, 700);
  }
  return (
    <section id="book" className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-bloom-700 rounded-[40px] lg:rounded-[60px] p-8 sm:p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-20 -mt-20 blur-2xl animate-[blob-float_10s_infinite_ease-in-out]" />
          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-bloom-100">Appointments</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-4">Request an Appointment</h2>
            <p className="opacity-80 mb-12 max-w-lg">Leave your details and our team will contact you within 2 working hours to confirm your visit.</p>

            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Full Name"><input required type="text" className={inputCls} placeholder="Enter your name" /></Field>
              <Field label="Phone Number"><input required type="tel" className={inputCls} placeholder="+92 ..." /></Field>
              <Field label="Preferred Clinic">
                <select className={inputCls + " appearance-none"}>
                  <option className="text-bloom-950">Hyaat Medical Center (G-13)</option>
                  <option className="text-bloom-950">Saeed Medical Center (G-11)</option>
                </select>
              </Field>
              <Field label="Preferred Date"><input type="date" className={inputCls} /></Field>
              <Field label="Reason for Visit" full>
                <textarea rows={3} className={inputCls + " rounded-3xl"} placeholder="Brief description (optional)" />
              </Field>
              <div className="md:col-span-2">
                <button disabled={submitting} type="submit" className="w-full bg-white text-bloom-700 py-5 rounded-full font-bold text-lg hover:bg-bloom-50 hover:scale-[1.01] active:scale-95 transition-all shadow-xl disabled:opacity-60">
                  {submitting ? "Sending..." : "Send Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls = "w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:bg-white focus:text-bloom-950 transition-all placeholder:text-white/40 text-white";

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={`space-y-2 ${full ? "md:col-span-2" : ""}`}>
      <label className="text-xs font-bold uppercase tracking-widest opacity-80 block">{label}</label>
      {children}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-bloom-400">Questions</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3">Frequently asked</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="border border-bloom-100 rounded-3xl overflow-hidden bg-bloom-50/40">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left">
                <span className="font-display text-lg text-bloom-950">{f.q}</span>
                <ChevronDown className={`size-5 text-bloom-700 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-bloom-950/70 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bloom-950 text-bloom-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-3xl text-white mb-4">Dr. Armghana Ali</div>
          <p className="text-sm text-bloom-50/60 max-w-sm leading-relaxed">
            Compassionate Obstetric and Gynecological care in Islamabad. Registered Consultant (MBBS, FCPS) committed to women's health and wellness.
          </p>
          <div className="flex gap-3 mt-6">
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Mail} />
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-bloom-400 mb-5">Clinics</h4>
          <ul className="space-y-3 text-sm text-bloom-50/70">
            <li>Hyaat Medical, G-13/1</li>
            <li>Saeed Medical, G-11 Markaz</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-bloom-400 mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-bloom-50/70">
            <li><a href="#services" className="hover:text-bloom-200">Services</a></li>
            <li><a href="#about" className="hover:text-bloom-200">About</a></li>
            <li><a href="#book" className="hover:text-bloom-200">Book Visit</a></li>
            <li><a href="#faq" className="hover:text-bloom-200">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-bloom-50/40">
        <p>© {new Date().getFullYear()} Dr. Armghana Ali. All rights reserved.</p>
        <p>Serving G-10, G-11, G-13, E-11, F-10 and surrounding sectors.</p>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="size-10 rounded-full bg-white/10 hover:bg-bloom-700 grid place-items-center transition-colors">
      <Icon className="size-4" />
    </a>
  );
}
