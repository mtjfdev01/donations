import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const CERTIFICATES_DATA = [
  {
    id: 1,
    title: "Shariah Compliance Certificate",
    image: "/assets/img/certificates/shariah-compliance.jpg",
    description: "ALHAMD SHARIAH ADVISORY SERVICES - Zakat Fund Compliance",
  },
  {
    id: 2,
    title: "236 Exemption",
    image: "/assets/img/certificates/236-exemption.jpg",
    description: "Federal Board of Revenue - Tax Exemption Certificate",
  },
  {
    id: 3,
    title: "Intellectual Property Organization",
    image: "/assets/img/certificates/ipo-trademark.jpg",
    description: "Trade Mark Registration - Government of Pakistan",
  },
  {
    id: 4,
    title: "Pakistan Certificate of Philanthropy",
    image: "/assets/img/certificates/philanthropy.jpg",
    description: "NPO Good Governance - Excellence Recognition",
  },
];

export default function Certificates() {
  const n = CERTIFICATES_DATA.length;

  // slides per view (responsive)
  const [spv, setSpv] = useState(4);

  // autoplay + position
  const [isAuto, setIsAuto] = useState(true);
  const [current, setCurrent] = useState(n); // start at first "original" in extended list
  const [withTransition, setWithTransition] = useState(true);

  const intervalRef = useRef(null);
  const resumeRef = useRef(null);

  // Build extended data for infinite loop: [clones-before] + [originals] + [clones-after]
  const before = CERTIFICATES_DATA.map((c) => ({ ...c, _k: `b-${c.id}` }));
  const originals = CERTIFICATES_DATA.map((c) => ({ ...c, _k: `o-${c.id}` }));
  const after = CERTIFICATES_DATA.map((c) => ({ ...c, _k: `a-${c.id}` }));
  const EXT = [...before, ...originals, ...after]; // total = 3n

  // --- Responsive SPV (match your design: 4/3/2/1) ---
  const computeSPV = () => {
    const w = window.innerWidth;
    if (w <= 480) return 1;
    if (w <= 768) return 2;
    if (w <= 1024) return 3;
    return 4;
  };

  useEffect(() => {
    const onResize = () => {
      const nextSpv = computeSPV();
      setSpv(nextSpv);

      // Re-center on first original to avoid partial positions after resize
      setWithTransition(false);
      setCurrent(n);
      requestAnimationFrame(() => setWithTransition(true));
    };

    setSpv(computeSPV());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [n]);

  // --- Autoplay ---
  useEffect(() => {
    clearInterval(intervalRef.current);
    if (!isAuto) return;
    intervalRef.current = setInterval(() => setCurrent((p) => p + 1), 4000);
    return () => clearInterval(intervalRef.current);
  }, [isAuto]);

  const pauseThenResume = () => {
    setIsAuto(false);
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setIsAuto(true), 5000);
  };

  const next = () => {
    setCurrent((p) => p + 1);
    pauseThenResume();
  };

  const prev = () => {
    setCurrent((p) => p - 1);
    pauseThenResume();
  };

  const lastStart = Math.max(0, n - spv); // last valid starting index within originals
  const goTo = (i /* 0..lastStart */) => {
    setWithTransition(true);
    setCurrent(n + Math.max(0, Math.min(i, lastStart)));
    pauseThenResume();
  };

  // --- Infinite snap (simple & robust) ---
  const onTransitionEnd = () => {
    // If we've moved into the right-side clones, snap back by n
    if (current >= 2 * n) {
      setWithTransition(false);
      setCurrent((p) => p - n);
      requestAnimationFrame(() => setWithTransition(true));
      return;
    }
    // If we've moved into the left-side clones, snap forward by n
    if (current < n) {
      setWithTransition(false);
      setCurrent((p) => p + n);
      requestAnimationFrame(() => setWithTransition(true));
    }
  };

  // --- Translate calculation ---
  // Each item is an equal fraction of the track: step = 100 / totalSlides
  const total = EXT.length; // 3n
  const step = 100 / total;
  const translatePercent = current * step;

  // Dots
  const activeDot = Math.min(
    lastStart,
    ((current - n) % n + n) % n // normalize to 0..n-1
  );

  // Inline width that ALWAYS matches SPV (fixes your mobile 25% issue)
  const slideBasis = `${100 / spv}%`;

  return (
    <section className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-title">Official Certificates</h2>

        <div
          className="certificates-slider"
          onMouseEnter={() => setIsAuto(false)}
          onMouseLeave={() => setIsAuto(true)}
          aria-roledescription="carousel"
        >
          <div
            className={`certificates-track${withTransition ? "" : " no-transition"}`}
            style={{ transform: `translateX(-${translatePercent}%)` }}
            onTransitionEnd={onTransitionEnd}
          >
            {EXT.map((c, idx) => (
              <div
                key={c._k + "-" + idx}
                className="certificate-slide"
                style={{ flex: `0 0 ${slideBasis}`, maxWidth: slideBasis }}
              >
                <div className="certificate-card">
                  <div className="certificate-image">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      draggable="false"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const ph = e.currentTarget.nextElementSibling;
                        if (ph) ph.style.display = "flex";
                      }}
                    />
                    <div className="certificate-placeholder" aria-hidden="true">
                      <span>{c.title}</span>
                    </div>
                  </div>
                  <div className="certificate-content">
                    <h3 className="certificate-title">{c.title}</h3>
                    <p className="certificate-description">{c.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-nav prev-btn" aria-label="Previous" onClick={prev}>
            ‹
          </button>
          <button className="slider-nav next-btn" aria-label="Next" onClick={next}>
            ›
          </button>

          <div className="slider-dots" role="tablist" aria-label="Slides">
            {Array.from({ length: lastStart + 1 }).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === activeDot ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                role="tab"
                aria-selected={i === activeDot}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
