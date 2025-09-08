import React from "react";

const EligibilityCriteria = () => {
  const items = [
    {
      iconClass: "flaticon-female",
      title: "Widows & Divorced Women",
      desc: "Without male guardianship, financially vulnerable",
    },
    {
      iconClass: "flaticon-family",
      title: "Abandoned Women-headed Families",
      desc: "Deserted or socially excluded women with dependent children",
    },
    {
      iconClass: "flaticon-charity",
      title: "Double Orphans",
      desc: "Children who have lost both parents",
    },
    {
      iconClass: "flaticon-zakat", // fallback to any available icon in your set
      title: "Zakat Eligible Individuals",
      desc: "Minimum 70% of residents will be verified as Zakat eligible",
    },
  ];

  return (
    <section className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70 no-hover">
      <div className="container">
        {/* Section header */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                Eligibility Criteria
              </h6>
              <h1 className="section-title">Who We Prioritize</h1>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center go-top">
          {items.map((it, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={idx}>
              <div
                className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---"
                role="group"
                aria-label={it.title}
              >
                <span className="category-icon" aria-hidden="true">
                  <i className={it.iconClass} />
                </span>

                <span className="category-title">{it.title}</span>
                <span className="category-brief">{it.desc}</span>

                {/* keep CTA area out for this section (static info only) */}
                {/* If you want a small badge or note, add it here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
