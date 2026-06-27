import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import constructionImg from "@/assets/construction.jpg";
import bricksImg from "@/assets/bricks.jpg";
import Logo from "@/assets/tig.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tostyam Infa Group. | Interior Design, Construction & Bricks" },
      { name: "description", content: "An integrated design and build group crafting interiors, structures and the materials that shape them." },
      { property: "og:title", content: "Tostyam Infra Group — Interiors, Construction & Bricks" },
      { property: "og:description", content: "An integrated design and build group crafting interiors, structures and the materials that shape them." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Divisions />
      <Philosophy />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { label: "Interiors", href: "#interiors" },
    { label: "Construction", href: "#construction" },
    { label: "Bricks", href: "#bricks" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
           <img
            src={Logo}
            alt="Tostyam Infa Logo"
            className="w-18 h-18 object-contain"
           />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="text-sm border border-foreground/80 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors">
          Start a project
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-accent" />
              Est. 2026 — Three disciplines, one studio
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[6.5rem] leading-[0.95] tracking-tight">
              Spaces, structures<br />
              and the <em className="text-accent">material</em><br />
              between them.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              TIG is an integrated design and build group. We compose interiors, raise the buildings that hold them, and manufacture the bricks they are built from.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#projects" className="bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent transition-colors">
                Explore our work
              </a>
              <a href="#divisions" className="text-sm flex items-center gap-2 group">
                Our three divisions
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={heroImg} alt="Architectural facade detail" className="w-full h-full object-cover" width={1024} height={1280} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 text-sm">
              <Stat n="120+" l="Projects delivered" />
              <Stat n="27 yr" l="In practice" />
              <Stat n="3" l="Disciplines" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-2xl">{n}</div>
      <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{l}</div>
    </div>
  );
}

const DIVISIONS = [
  {
    id: "interiors",
    no: "01",
    title: "Interior Design",
    tag: "Residential · Hospitality · Workplace",
    body: "Interiors composed for how you actually live and work. From a single room to a full programme, our studio shapes light, material and proportion into spaces that feel inevitable.",
    points: ["Concept & spatial planning", "FF&E and custom joinery", "Lighting design", "Site supervision"],
    img: interiorImg,
  },
  {
    id: "construction",
    no: "02",
    title: "Construction",
    tag: "Residential · Commercial · Turnkey",
    body: "A construction practice built on engineering discipline and craftsmanship. We deliver projects of every scale on programme and on budget, with a quality bar set by our own design teams.",
    points: ["Turnkey contracting", "Project & cost management", "Structural & MEP coordination", "Renovation & retrofit"],
    img: constructionImg,
  },
  {
    id: "bricks",
    no: "03",
    title: "Bricks",
    tag: "Manufacturing · Supply · Trade",
    body: "Our own kilns produce premium fired clay bricks for builders, contractors and architects. Honest material, consistent batches, delivered at scale.",
    points: ["Solid & perforated clay bricks", "Custom batch firing", "Pallet & bulk supply", "Architect specification"],
    img: bricksImg,
  },
];

function Divisions() {
  return (
    <section id="divisions" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">— Three divisions</div>
            <h2 className="font-serif text-4xl lg:text-6xl max-w-2xl leading-[1.02]">
              One group. Three crafts, working in concert.
            </h2>
          </div>
          <p className="hidden lg:block max-w-sm text-muted-foreground">
            Independent specialists under a single roof — so a project can move from drawing, to site, to material without ever leaving the family.
          </p>
        </div>

        <div className="space-y-px bg-border">
          {DIVISIONS.map((d, i) => (
            <Division key={d.id} d={d} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Division({ d, reverse }: { d: (typeof DIVISIONS)[number]; reverse: boolean }) {
  return (
    <article id={d.id} className="bg-background">
      <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div className="relative">
          <div className="aspect-[5/4] overflow-hidden rounded-sm">
            <img src={d.img} alt={d.title} loading="lazy" width={1024} height={820} className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-4 text-muted-foreground text-sm">
            <span className="font-serif text-3xl text-foreground">{d.no}</span>
            <span className="uppercase tracking-[0.18em] text-xs">{d.tag}</span>
          </div>
          <h3 className="font-serif text-4xl lg:text-5xl mt-5">{d.title}</h3>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">{d.body}</p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md text-sm">
            {d.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="text-accent mt-1.5">◆</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 self-start hover:gap-3 transition-all">
            Enquire about {d.title.toLowerCase()} <span>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Philosophy() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">— Our philosophy</div>
        <p className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
          "A building is only as honest as the brick it's made of, and a room only as considered as the hands that shaped it. We build the whole chain, so nothing is left to chance."
        </p>
        <div className="mt-10 text-sm text-muted-foreground">
          — Founder &amp; Principal Architect
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { t: "Verdant House", c: "Private residence · Interiors + Build", y: "2024" },
  { t: "Atrium 14", c: "Commercial tower · Construction", y: "2023" },
  { t: "Kiln Series No. 7", c: "Brickworks · Manufacturing", y: "2024" },
  { t: "The Olive Hotel", c: "Hospitality · Interiors", y: "2023" },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">— Selected work</div>
            <h2 className="font-serif text-4xl lg:text-5xl">Recent projects</h2>
          </div>
          <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground">View archive →</a>
        </div>
        <ul className="border-t border-border">
          {PROJECTS.map((p) => (
            <li key={p.t} className="border-b border-border group">
              <a href="#" className="grid grid-cols-12 gap-4 py-6 lg:py-8 items-center hover:px-4 transition-all duration-300">
                <span className="col-span-1 text-xs text-muted-foreground">{p.y}</span>
                <span className="col-span-7 sm:col-span-6 font-serif text-2xl lg:text-3xl">{p.t}</span>
                <span className="col-span-3 sm:col-span-4 text-sm text-muted-foreground hidden sm:block">{p.c}</span>
                <span className="col-span-1 text-right text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-background/60 mb-6">— Let's build</div>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[0.98]">
            Tell us about<br />your project.
          </h2>
          <p className="mt-8 max-w-md text-background/70 leading-relaxed">
            Whether it's a single room, an entire building, or a pallet of bricks — start the conversation. We respond within two working days.
          </p>
        </div>
        <div className="lg:col-span-5 space-y-8 text-sm">
          <ContactRow label="General" v="hello@tig.group" />
          <ContactRow label="Interiors" v="interiors@tig.group" />
          <ContactRow label="Construction" v="build@tig.group" />
          <ContactRow label="Bricks (trade)" v="trade@tig.group" />
          <ContactRow label="Studio" v="Bhubaneswar, Odisha" />
          <ContactRow label="Phone" v="+91 80 4000 0000" />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, v }: { label: string; v: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-background/15">
      <span className="text-background/50 uppercase tracking-wider text-xs">{label}</span>
      <span className="col-span-2">{v}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/60 border-t border-background/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div>© {new Date().getFullYear()} Toatyam infra group. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background">Instagram</a>
          <a href="#" className="hover:text-background">LinkedIn</a>
          <a href="#" className="hover:text-background">Press</a>
        </div>
      </div>
    </footer>
  );
}
