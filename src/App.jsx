import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowRight,
  Instagram,
  Phone,
  Sparkles,
  Clapperboard,
  Gauge,
  Zap,
  Camera,
  Film,
  Waves,
} from "lucide-react";

const heroVideos = [
  {
    src: "/assets/bmw.mp4",
    title: "BMW POV / Cinematic Motion",
    tag: "Hero Reel",
  },
  {
    src: "/assets/pajero2.mp4",
    title: "Pajero Sport Energy",
    tag: "Aggressive Cinematic",
  },
  {
    src: "/assets/porsche.mp4",
    title: "Driving Sequence Edit",
    tag: "Fast Cut",
  },
  {  
    src: "/assets/craftitype.mp4",
    title: "Craftitype Brand Promo",
    tag: "Brand Promo",
  },
  {
    src: "/assets/swift.mp4",
    title: "Passenger POV Vlog",
    tag: "Vlog Motion",
  },
];

const projectCards = [
  {
    title: "Pajero Adventure",
    category: "Promo / Poster Motion",
    desc: "Adventure-focused automotive edit with dusty energy, bold framing, and premium promo feel.",
    meta: "Combines cinematic visuals with poster-style branding.",
    video: "/assets/pajero1.mp4",
    type: "vertical",
  },
  {
    title: "BMW Motion",
    category: "Cinematic Auto Edit",
    desc: "High-contrast car visuals cut for mood, motion, and premium impact.",
    meta: "Made to feel clean, modern, and aggressive without losing style.",
    video: "/assets/bmw_vertical.mp4",
    type: "vertical",
  },
  {
    title: "ESJEC Racing",
    category: "Club / Motorsport Edit",
    desc: "Created a high-energy edit for ESJEC Racing with motion, impact, and a team-driven feel.",
    meta: "Built to feel fast, sharp, and performance-focused.",
    video: "/assets/esjec.mp4",
    type: "vertical",
  },
  {
    title: "Cinematic Saree Edit",
    category: "Aesthetic / Visual Mood",
    desc: "A cinematic edit capturing elegance, motion, and visual softness, focused on creating a calm yet striking aesthetic experience.",
    meta: "Driven by smooth pacing, subtle transitions, and mood-based storytelling.",
    video: "/assets/saree.mp4",
    type: "vertical",
  },
  {
    title: "Porsche Motion",
    category: "Luxury Auto Edit",
    desc: "A premium car edit focused on sleek motion, clean detail, and high-end cinematic presence.",
    meta: "Built for a sharp, stylish, and premium visual impact.",
    video: "/assets/porsche_vertical.mp4",
    type: "vertical",
  },
  {
    title: "Concert Energy Edit",
    category: "Live Event / Hype",
    desc: "High-energy concert edit capturing crowd movement, lights, and beats with fast cuts and dynamic pacing.",
    meta: "Focused on intensity, rhythm, and real-time energy.",
    video: "/assets/concert.mp4",
    type: "vertical",
  },
  {
    title: "College Friends Reel",
    category: "Viral Social Reel",
    desc: "A friendship-based reel with emotional timing, youth energy, and strong social-media pacing.",
    meta: "One reel reached a wider audience and showed strong shareable energy.",
    video: "/assets/friends.mp4",
    type: "vertical",
  },
  {
    title: "Art Alley Reels",
    category: "Bridal Shop Content",
    desc: "Edited social reels for a bridal shop, shaping the visuals to feel elegant, polished, and made for attention on Instagram.",
    meta: "Built with style, softness, and scroll-stopping bridal presentation.",
    video: "/assets/artalley.mp4",
    type: "vertical",
  },
  {
    title: "Craftitype Promo",
    category: "Brand / Product Promo",
    desc: "A creative promo edit for Craftitype, showcasing custom keyboard stickers inspired by anime, movies, and pop culture.",
    meta: "Focused on product visuals, branding, and engaging creative presentation.",
    video: "/assets/craftitype_vertical.mp4",
    type: "vertical",
  },
  


];

const services = [
  {
    icon: Clapperboard,
    title: "Cinematic Editing",
    desc: "Moody visuals, pacing, atmosphere, and clean storytelling for content that feels intentional.",
  },
  {
    icon: Zap,
    title: "Phonk & Aggressive Cuts",
    desc: "Fast transitions, hard beat sync, energy spikes, and bold editing for high-impact reels.",
  },
  {
    icon: Gauge,
    title: "POV Driving Edits",
    desc: "Passenger-seat and car-motion edits built around speed, feel, and road presence.",
  },
  {
    icon: Sparkles,
    title: "Promo Content",
    desc: "Edits for clubs, pages, events, and creative brands that need a premium visual push.",
  },
  {
    icon: Film,
    title: "Vlog Storytelling",
    desc: "Smooth sequence-building, natural flow, and edits that make everyday footage more watchable.",
  },
  {
    icon: Camera,
    title: "Poster & Photo Design",
    desc: "Stylized posters, graphic compositions, and image-based edits with strong visual presence.",
  },
];

const stats = [
  { number: "01", label: "Brand identity", detail: "zeroo6" },
  { number: "06", label: "Creative lanes", detail: "editing, posters, visuals" },
  { number: "∞", label: "Approach", detail: "every project gets its own feel" },
];

const proofs = [
  {
    title: "Instagram presence",
    body: "Portfolio direction shaped around your zeroo6 Instagram identity and QR branding.",
  },
  {
    title: "ESJEC Racing work",
    body: "Real edit work done for a college racing club with performance-driven visuals.",
  },
  {
    title: "Art Alley content",
    body: "Creative reel edits made for an art-focused page and visual storytelling.",
  },
];

function VideoTile({ item, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.93, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
        scale: { duration: 0.6 },
        rotateX: { duration: 0.8 }
      }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      className={`relative overflow-hidden rounded-[20px] w-full transition duration-700 ease-out 
      ${item.type === "landscape"
        ? "aspect-video"
        : "aspect-[9/16]"
      } group-hover:contrast-125 group-hover:saturate-150`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,60,0.25),transparent_50%)] opacity-0 group-hover:opacity-100 transition duration-500" />
      <video
        ref={ref}
        src={item.video}
        muted
        loop
        playsInline
        autoPlay
        webkit-playsinline="true"
        x5-playsinline="true"
        className="aspect-[9/16] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.08] group-hover:contrast-125 group-hover:saturate-150"
      />
      <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,0,60,0.18),transparent_45%)]" />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/65">
            {item.category}
          </span>
          <div className="rounded-full border border-red-500/30 bg-red-500/10 p-2 text-red-300 shadow-[0_0_20px_rgba(255,0,64,0.18)]">
            <Play size={14} fill="currentColor" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/68">{item.desc}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-red-300/80">{item.meta}</p>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -1, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07
      }}
      className="group rounded-[24px] border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:border-red-500/30 hover:bg-red-500/[0.04]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/25 bg-red-500/10 text-red-300 shadow-[0_0_20px_rgba(255,0,55,0.15)]">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{service.desc}</p>
    </motion.div>
  );
}

export default function VideoEditorPortfolioSite() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: -500, y: -500 });
  const cursorVisible = useRef(false);
  const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const midX = rect.width / 2;
  const midY = rect.height / 2;

  const rotateY = ((x - midX) / midX) * 15;
  const rotateX = ((midY - y) / midY) * 15;

  setTilt({ x: rotateX, y: rotateY });
};

const resetTilt = () => {
  setTilt({ x: 0, y: 0 });
};
  const [activeVideo, setActiveVideo] = useState(0);
  const [booted, setBooted] = useState(false);
  const heroVideoRef = useRef(null);

  const activeHero = useMemo(
    () => heroVideos[activeVideo % heroVideos.length],
    [activeVideo]
  );

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % heroVideos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [activeHero]);

  useEffect(() => {
    let animFrame;
    let target = { x: -500, y: -500 };
    let current = { x: -500, y: -500 };

    const move = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      current.x = lerp(current.x, target.x, 0.1);
      current.y = lerp(current.y, target.y, 0.1);
      setCursor({ x: current.x, y: current.y });
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-red-500/30 selection:text-white">
      <AnimatePresence>
        {!booted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, letterSpacing: "0.6em" }}
                animate={{ opacity: 1, scale: 1, letterSpacing: "0.18em" }}
                transition={{ duration: 0.7 }}
                className="text-5xl font-black uppercase text-red-500 drop-shadow-[0_0_30px_rgba(255,0,55,0.6)] md:text-7xl"
              >
                zeroo6
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 180 }}
                transition={{ duration: 1.1, delay: 0.4 }}
                className="mx-auto mt-6 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
              />
              <p className="mt-5 text-xs uppercase tracking-[0.45em] text-white/40">
                loading motion
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 opacity-[0.08] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,51,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,20,20,0.08),transparent_25%),linear-gradient(to_bottom,#000000,#040404,#000000)]" />
      {/* 🔴 CURSOR GLOW */}
      <div
        className="pointer-events-none fixed z-[999] transition-none"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,0,55,0.22) 0%, rgba(255,0,55,0.10) 30%, rgba(255,0,55,0.04) 55%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(6px)",
        }}
      />
      <main className="relative z-10">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <video
              key={activeHero.src}
              ref={heroVideoRef}
              muted
              loop
              playsInline
              autoPlay
              className="h-full w-full object-cover opacity-45 contrast-125 saturate-125"
            >
              <source src={activeHero.src} />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.88)_12%,rgba(0,0,0,0.56)_48%,rgba(0,0,0,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.96),rgba(0,0,0,0.18),rgba(0,0,0,0.72))]" />
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(255,255,255,0.03)_4px)]" />
          </div>

          <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 lg:px-16">
            <div className="flex items-center gap-4">
              <img
                src="/assets/z1.webp"
                alt="zeroo6 logo"
                className="h-10 w-10 rounded-xl object-cover shadow-[0_0_25px_rgba(255,0,40,0.28)]"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-white">
                  zeroo6
                </p>
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">
                  cinematic editor
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/zeroo6.i?igsh=cXhyaXFkcDY3MWYx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-red-500/30 hover:bg-red-500/10"
            >
              <Instagram size={14} /> Instagram
            </a>
          </header>

          <div className="relative z-20 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-16 pt-4 md:px-10 lg:px-16">
            <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.15 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-red-300 shadow-[0_0_24px_rgba(255,0,64,0.12)]"
                >
                  <Waves size={14} /> motion. mood. impact.
                </motion.div>

                <div className="relative">

                  {/* 🔴 GLOW */}
                  <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-red-500/20 blur-[120px] rounded-full pointer-events-none" />

                  <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl xl:text-[6.6rem]"
                  >
                    <motion.span
                      className="block"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      not just
                    </motion.span>
                    <motion.span
                      className="block text-red-500"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      editing videos
                    </motion.span>
                    <motion.span
                      className="block text-white/80"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      building energy
                    </motion.span>
                  </motion.h1>

                </div>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.38 }}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
                >
                  zeroo6 is the creative identity of Leston D Almeida — shaping cinematic edits,
                  aggressive fast cuts, POV driving visuals, promo reels, vlog motion, poster design,
                  and social content that feels alive while you scroll.
                </motion.p>

                  <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetTilt}
                    style={{
                       transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                       transformStyle: "preserve-3d"
                    }}
                    initial={{ opacity: 0, x: 24, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                    transition={{
                      duration: 1,
                      delay: 0.35,
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className="flex flex-row flex-wrap gap-4 lg:ml-10 xl:ml-16 mt-6 lg:mt-12 transition-transform duration-300 will-change-transform"
                  >
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(255,0,55,0.28)] transition hover:scale-[1.03] hover:bg-red-500"
                  >
                    View Work <ArrowRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/85 transition hover:border-red-500/30 hover:bg-red-500/10"
                  >
                    Let’s Work
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="grid gap-4"
              >
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/45">
                    <span>active motion preview</span>
                    <span>{activeHero.tag}</span>
                  </div>
                  <div className="relative overflow-hidden rounded-[22px] border border-red-500/20">
                    <video
                      src={activeHero.src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="h-[270px] w-full object-cover contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-red-300/80">
                        current sequence
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{activeHero.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/8 bg-white/[0.03] p-3 md:p-4"
                    >
                      <div className="text-2xl md:text-3xl font-black text-red-500">{item.number}</div>
                      <div className="mt-1 text-[9px] md:text-[11px] uppercase tracking-[0.18em] text-white/45">
                        {item.label}
                      </div>
                      <div className="mt-1 text-xs md:text-sm text-white/75">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/6 bg-white/[0.02] py-4 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-10 whitespace-nowrap w-max"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-10">
                {["cinematic edits", "aggressive cuts", "promo reels", "vlog motion", "pov driving", "poster design", "photo editing", "beat sync", "fast cuts", "zeroo6"].map((text) => (
                  <span key={text} className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/42">
                    {text}
                    <span className="text-red-500/60">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>

        </section>
        
        <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-red-300/75">selected work</p>
              <div className="relative overflow-hidden mt-3">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl"
                >
                  the portfolio scrolls like an edit
                </motion.h2>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-transparent mt-3"
              />
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/62 md:text-base">
              Every piece has a different mood based on the project. There is no one-template style
              here — just the right energy, pacing, and visual language for the job.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((item, index) => (
              <div key={item.title} className="group">
                <VideoTile item={item} index={index} />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.38em] text-red-300/75">what i do</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-5xl"
            >
              built for motion, mood and brand feel
            </motion.h2>
            
            <p className="mt-5 text-base leading-relaxed text-white/62">
              From phonk-heavy cuts to cinematic promo pieces, zeroo6 focuses on making the viewer
              feel the timing — not just watch the footage.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[32px] border border-white/8 bg-white/[0.03] p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.38em] text-red-300/75">visual identity</p>
            <div className="relative overflow-hidden mt-4">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl font-black uppercase tracking-tight text-white"
              >
                zeroo6 as a brand
              </motion.h2>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-transparent mt-3"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-transparent mt-3"
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/62">
              Sharp red branding, dark contrast, cinematic mood, and aggressive energy shape the
              zeroo6 identity. The site keeps your personal visuals confidential while still making
              the brand feel recognizable and strong.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[24px] border border-red-500/20 bg-black">
                <img src="/assets/z1.webp" alt="zeroo6 logotype" className="h-56 w-full object-cover" />
              </div>
              <div className="flex items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-black p-4">
                <img src="/assets/z2.webp" alt="zeroo6 symbol" className="h-56 w-full object-contain" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="rounded-[32px] border border-white/8 bg-gradient-to-br from-white/[0.04] to-red-500/[0.04] p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.38em] text-red-300/75">proof of work</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white">
              real projects, real direction
            </h2>
            <div className="mt-8 space-y-5">
              {proofs.map((proof) => (
                <div key={proof.title} className="rounded-[22px] border border-white/8 bg-black/40 p-5">
                  <h3 className="text-lg font-semibold text-white">{proof.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{proof.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[22px] border border-red-500/20 bg-red-500/8 p-5 text-sm leading-relaxed text-white/70">
              Not every edit is made to look the same. The style changes with the subject, beat,
              mood, and purpose — which is exactly what makes the work feel custom instead of copied.
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-32 md:px-10 lg:px-16">
          <div className="relative overflow-clip rounded-[34px] border border-red-500/20 bg-[linear-gradient(135deg,rgba(255,0,60,0.12),rgba(255,255,255,0.03),rgba(0,0,0,0.85))] p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/12 blur-3xl" />
            <div className="absolute -bottom-20 left-20 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.38em] text-red-300/80">contact</p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 max-w-3xl text-3xl font-black uppercase tracking-tight text-white md:text-5xl"
                >
                  let's build something that looks and feels hard.
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-transparent mt-3"
                />
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68">
                  Reels, promo cuts, POV driving edits, cinematic sequences, posters, and social
                  content — built with energy and shaped for impact.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="tel:6363601317"
                    className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(255,0,55,0.28)] transition hover:scale-[1.03] hover:bg-red-500"
                  >
                    <Phone size={16} /> 6363601317
                  </a>
                  <a
                    href="https://www.instagram.com/zeroo6.i?igsh=cXhyaXFkcDY3MWYx"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/85 transition hover:border-red-500/30 hover:bg-red-500/10"
                  >
                    <Instagram size={16} /> @zeroo6.i
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/45 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">scan & connect</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Instagram QR</h3>
                  </div>
                  <img src="/assets/z2.webp" alt="06 brand mark" className="h-12 w-12 rounded-xl object-cover" />
                </div>
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black">
                  <img src="/assets/qr.png" alt="Instagram QR" className="w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}