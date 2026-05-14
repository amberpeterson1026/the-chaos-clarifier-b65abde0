import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail, Calendar, MessageCircle, Workflow, Smartphone, Pencil,
  Users, BarChart3, Heart, Sparkles,
  ShieldCheck, Coffee, Compass, ArrowRight, Menu, X, Star, CheckSquare, Instagram,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-workspace.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({ component: Index });

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"}`}>
      <div className="container-soft flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="The Chaos Clarifier" className="h-11 w-11 rounded-full object-cover" />
          <span className="hidden sm:block font-display text-lg leading-tight">
            The Chaos Clarifier
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/75 hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
          Book a Call <ArrowRight className="h-4 w-4" />
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container-soft py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-foreground/80">{n.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm">
              Book a Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blush-soft/60 blur-3xl" aria-hidden />
      <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-sage-soft/50 blur-3xl" aria-hidden />
      <div className="container-soft relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 fade-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-sage">
            <span className="h-px w-8 bg-sage" /> More Clarity. Less Chaos.
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Behind-the-scenes <br className="hidden sm:block" />
            support for{" "}
            <span className="font-script text-blush text-[1.15em] font-normal">overwhelmed</span>{" "}
            business owners.
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I help small business owners organize the chaos behind their business
            so they can focus on what they do best. Supportive systems, organized
            workflows, and reliable support — designed for real humans.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition">
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium hover:bg-secondary/50 transition">
              View Services
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sage" /> Trusted partnership</div>
            <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-blush" /> Judgment-free support</div>
          </div>
        </div>
        <div className="lg:col-span-5 fade-up-delay-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-sage-soft/40 -rotate-2" aria-hidden />
            <img
              src={heroImg}
              alt="Calm minimal workspace with sage eucalyptus and blush notebook"
              width={1536} height={1152}
              className="relative rounded-[2rem] object-cover w-full aspect-[4/5] shadow-2xl shadow-foreground/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 max-w-[230px] border border-border">
              <p className="font-script text-2xl text-blush leading-none">a calm exhale</p>
              <p className="mt-2 text-xs text-muted-foreground">for your business behind the scenes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-soft grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-blush-soft/50 rotate-2" aria-hidden />
            <img src={founderImg} alt="Founder of The Chaos Clarifier" loading="lazy"
              width={1024} height={1280}
              className="relative rounded-[2rem] object-cover w-full aspect-[4/5] shadow-xl" />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.25em] text-sage">A note from your clarifier</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            You don't need to <br />
            <span className="font-script text-blush text-[1.15em] font-normal">do everything</span> alone.
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I've spent years inside busy businesses — managing operations,
              untangling inboxes, and quietly making sure nothing falls through
              the cracks. I know what burnout looks like, and I know what calm,
              capable support feels like on the other side.
            </p>
            <p>
              My work is the behind-the-scenes part — the systems, the schedule,
              the follow-ups, the workflows. I bring order without judgment,
              structure without rigidity, and steady support so you can come
              back to the parts of your business that lit you up in the
              first place.
            </p>
            <p className="font-display text-xl text-foreground italic">
              "Think of me as the calm, capable person you trust to help untangle your business."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Mail, title: "Email & Inbox Management", desc: "Keep your inbox organized and stress-free." },
  { icon: Calendar, title: "Calendar & Scheduling", desc: "Manage appointments, meetings, and reminders." },
  { icon: Workflow, title: "Operations & Systems", desc: "Streamline processes, SOPs, and workflows." },
  { icon: MessageCircle, title: "Client & Customer Communication", desc: "Timely follow-ups and stronger relationships." },
  { icon: Smartphone, title: "Social Media Support", desc: "Content scheduling, captions & engagement." },
  { icon: Pencil, title: "Documents & Spreadsheets", desc: "Create, organize, and maintain important files." },
  { icon: Users, title: "Onboarding & Training Support", desc: "Systems, checklists, and team support." },
  { icon: BarChart3, title: "Reporting & Admin Tasks", desc: "Data entry, reports, and general admin." },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container-soft">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sage">What I help with</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            Calm, capable support — <span className="font-script text-blush font-normal">tailored</span> to you.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Pick the pieces that feel heaviest. We'll lift them off your plate together.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-card rounded-3xl p-7 border border-border hover:border-sage/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-sage/5">
              <div className="h-12 w-12 rounded-2xl bg-sage-soft/60 flex items-center justify-center text-sage group-hover:bg-blush-soft group-hover:text-blush transition-colors duration-500">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const packages = [
  {
    name: "Essential Support", tag: "Stay on top of the day-to-day", price: "$250", suffix: "/month",
    features: [
      "Up to 10 hours per month",
      "Email & calendar management",
      "Admin tasks & data entry",
      "Customer communication",
      "Social media scheduling",
      "Monthly check-in & recap",
    ],
    blurb: "Perfect for small businesses that need a little extra help staying organized.",
    featured: false,
  },
  {
    name: "Growth Support", tag: "Build systems. Save time. Grow.", price: "$500", suffix: "/month",
    features: [
      "Up to 20 hours per month",
      "Everything in Essential",
      "Operations & workflow support",
      "SOP creation & process docs",
      "Weekly check-ins & planning",
      "Priority support",
    ],
    blurb: "Ideal for businesses ready to streamline systems and improve consistency.",
    featured: true,
  },
  {
    name: "Premium Support", tag: "More freedom. More focus. More impact.", price: "$1,000", suffix: "/month",
    features: [
      "Up to 40 hours per month",
      "Everything in Growth",
      "Full operations management",
      "Team onboarding & training",
      "Advanced reporting",
      "Strategy & growth support",
    ],
    blurb: "Full-service support for busy business owners who want a true partner.",
    featured: false,
  },
];

function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32">
      <div className="container-soft">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sage">Ways to work together</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            Support that grows with <span className="font-script text-blush font-normal">your season</span>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name}
              className={`relative rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-1 ${
                p.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-foreground/20 md:scale-[1.03]"
                  : "bg-card border-border hover:border-sage/40 hover:shadow-xl hover:shadow-sage/5"
              }`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blush text-primary-foreground text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                  Most loved
                </span>
              )}
              <p className={`text-xs uppercase tracking-[0.2em] ${p.featured ? "text-primary-foreground/70" : "text-sage"}`}>{p.tag}</p>
              <h3 className="mt-3 font-display text-3xl">{p.name}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.suffix}</span>
              </div>
              <ul className="mt-8 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Heart className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-blush-soft" : "text-blush"}`} fill="currentColor" />
                    <span className={p.featured ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition ${
                p.featured
                  ? "bg-primary-foreground text-primary hover:opacity-90"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}>
                Inquire
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Custom blends welcome — every business has its own rhythm.
        </p>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Heart, title: "Approachable & human", desc: "Real conversations, never stiff or transactional." },
  { icon: ShieldCheck, title: "Judgment-free organization", desc: "However messy it feels — we start exactly where you are." },
  { icon: MessageCircle, title: "Reliable communication", desc: "You'll always know what's happening and what's next." },
  { icon: Sparkles, title: "Emotionally intelligent", desc: "Support that reads the room and adapts to your season." },
  { icon: Workflow, title: "Systems built for humans", desc: "Workflows that feel light to use, not another thing to manage." },
  { icon: Coffee, title: "Calm, capable partnership", desc: "Steady presence so the backend never feels lonely again." },
];

function Why() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-sage">Why clients stay</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            It's not just the work — <br />
            it's <span className="font-script text-blush font-normal">how it feels</span> to work together.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card rounded-3xl p-7 border border-border">
              <div className="h-11 w-11 rounded-full bg-blush-soft/70 flex items-center justify-center text-blush">
                <r.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", icon: Compass, title: "Book a Discovery Call", desc: "We chat about where you are, what's heaviest, and what calm could look like." },
  { n: "02", icon: CheckSquare, title: "Build a Personalized Plan", desc: "I map a support plan tailored to your business, season, and capacity." },
  { n: "03", icon: Coffee, title: "Breathe Easier With Ongoing Support", desc: "I quietly handle the backend while you return to the work that lights you up." },
];

function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-soft">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sage">How it works</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            Three gentle steps to a <span className="font-script text-blush font-normal">lighter</span> business.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-sage/50">{s.n}</span>
                <div className="h-12 w-12 rounded-full bg-sage-soft/70 flex items-center justify-center text-sage">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-border" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { q: "She brought calm to my business. I didn't realize how heavy I'd been carrying it all until it lifted.", a: "Maya R.", role: "Brand Photographer" },
  { q: "I finally feel organized. My inbox is gentle, my calendar makes sense, and my clients feel taken care of.", a: "Lila S.", role: "Boutique Owner" },
  { q: "It feels like having a business partner who genuinely cares — not just a contractor checking boxes.", a: "Erin K.", role: "Wellness Coach" },
];

function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container-soft">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-sage">Kind words</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            From the women who <span className="font-script text-blush font-normal">trusted me</span> with theirs.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.a} className="bg-card rounded-3xl p-8 border border-border flex flex-col">
              <div className="font-display text-5xl text-blush leading-none">"</div>
              <blockquote className="mt-2 text-foreground/85 leading-relaxed flex-1">{t.q}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-display text-lg">{t.a}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-soft">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground px-8 sm:px-16 py-20 md:py-28 text-center">
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blush/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sage/20 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl mx-auto">
            <Heart className="h-8 w-8 mx-auto text-blush" fill="currentColor" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Your business doesn't have to feel <span className="font-script text-blush font-normal">this heavy</span>.
            </h2>
            <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed">
              Let's create systems and support that help your business run more
              smoothly — without the overwhelm.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-8 py-4 text-sm font-medium hover:opacity-90 transition">
                Book Your Discovery Call <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:hello@thechaosclarifier.com" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-medium hover:bg-primary-foreground/10 transition">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="container-soft grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Chaos Clarifier" className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-display text-lg leading-tight">The Chaos Clarifier</div>
              <div className="text-xs text-muted-foreground">More Clarity. Less Chaos.</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Calm, behind-the-scenes business support for overwhelmed founders.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-sage">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="text-foreground/75 hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-sage">Connect</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-blush" /> hello@thechaosclarifier.com</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-blush" /> @thechaosclarifier</li>
          </ul>
        </div>
      </div>
      <div className="container-soft mt-12 pt-6 border-t border-border flex flex-col sm:flex-row gap-3 justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} The Chaos Clarifier. Made with care.</p>
        <p className="font-script text-base text-blush">a calm exhale.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Why />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
