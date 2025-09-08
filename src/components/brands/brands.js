import React, { useMemo } from 'react';
import './index.css'; // <-- import the global CSS

let publicUrl = process.env.PUBLIC_URL+'/'
const brandsData = [
    {
        image: publicUrl + "assets/img/logo20.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo1.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    // {
    //     image: publicUrl + "assets/img/logo2.png",
    //     link: 'https://www.mtjfoundation.org',
    //     alt: 'MTJF Logo'
    // },
    // {
    //     image: publicUrl + "assets/img/logo2.png",
    //     link: 'https://www.mtjfoundation.org',
    //     alt: 'MTJF Logo'
    // },
    { 
        image: publicUrl + "assets/img/logo3.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo4.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo5.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo6.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo7.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo8.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo9.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo10.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo11.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo12.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo13.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo14.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo15.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    },
    {
        image: publicUrl + "assets/img/logo16.png",
        link: 'https://www.mtjfoundation.org',
        alt: 'MTJF Logo'
    }
];


const BrandArea = ({ className = '', speed = 70 }) => {
  // Duplicate once for seamless loop
  const marqueeItems = useMemo(() => [...brandsData, ...brandsData], []);

  // Ensure a sensible duration (don’t let 500s look “frozen”)
  const durationSec = Math.max(1, Number(speed) || 20);

  return (
    <section
      className={`brands-section ${className}`}
      // drive the CSS var that the animation uses
      style={{ ['--duration']: `${durationSec}s` }}
    >
      <div className="brands-container">
        <h2 className="title">Commitment to Global Goals</h2>

        <div className="brands-marquee" aria-label="Partner brands scrolling list pt-10">
          <div
            className="brands-track"
            role="list"
            aria-live="off"
            // hard fallback in case var is ignored/overridden
            style={{ animation: `brands-scroll ${durationSec}s linear infinite` }}
          >
            {marqueeItems.map((brand, i) => (
              <div className="brand-item" role="listitem" key={`brand-${i}`}>
                {/* <a href={brand.link} target="_blank" rel="noopener noreferrer" title={brand.alt}> */}
                  <img src={brand.image} alt={brand.alt} width="120" height="60" loading="lazy" />
                {/* </a> */}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandArea;
