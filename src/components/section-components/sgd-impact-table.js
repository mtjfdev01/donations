import React, { useState } from "react";
import "./sgd-table.css";
import { FaEye,  FaTimes } from "react-icons/fa";

const DATA = [
  {
    sdg: "1",
    title: "No Poverty",
    components: ["102 Homes", "20 Shops", "Dairy Farm"],
    direct: "Safe housing for asset-less families; rental income from shops; livestock ownership transfers wealth.",
    indirect: "Graduation model breaks intergenerational poverty; micro-enterprises stimulate local economy.",
    metric: "80% families achieve ≥ PKR 20,000/month income in 3 years."
  },
  {
    sdg: "2",
    title: "Zero Hunger",
    components: ["Dairy Farm", "Green Belts"],
    direct: "Milk/cheese production for 600+ residents; medicinal gardens provide nutrient-rich crops.",
    indirect: "Surplus dairy sold locally; training in organic farming for neighboring communities.",
    metric: "100% food self-sufficiency for residents; 30% surplus sales."
  },
  {
    sdg: "3",
    title: "Good Health",
    components: ["RO Plant", "Healthcare"],
    direct: "Elimination of waterborne diseases; prenatal/maternal care for women.",
    indirect: "Community health camps: WASH training reduces regional disease burden.",
    metric: "70% reduction in diarrhea cases; 95% antenatal coverage."
  },
  {
    sdg: "4",
    title: "Quality Education",
    components: ["Dream School", "KASB Center"],
    direct: "Free dual-curriculum education for orphans; digital literacy programs.",
    indirect: "Scholarships for external students; vocational certification recognized nationally.",
    metric: "100% resident children in school; 150+ certifications/year."
  },
  {
    sdg: "5",
    title: "Gender Equality",
    components: ["Women-Led Shops", "Skill Center"],
    direct: "100% female entrepreneurship; gender-sensitive counseling services.",
    indirect: "Challenging patriarchal norms; economic independence reduces GBV vulnerability.",
    metric: "70+ women-owned businesses; 90% financial autonomy rate."
  },
  {
    sdg: "6",
    title: "Clean Water",
    components: ["Solar Water Scheme", "RO Plant"],
    direct: "24/7 potable water for 1,100+ users; Islamic WASH (Taharah) compliance.",
    indirect: "Filtration access for 500 external families/day.",
    metric: "40,000 gallons/day capacity; zero water-quality complaints."
  },
  {
    sdg: "7",
    title: "Clean Energy",
    components: ["500 KVA Solar Grid"],
    direct: "Carbon-neutral operations; near-zero energy costs for vulnerable families.",
    indirect: "Surplus energy sold to grid; model for renewable adoption in rural Pakistan.",
    metric: "90% energy cost reduction; 35-ton CO₂ reduction/year."
  },
  {
    sdg: "8",
    title: "Decent Work",
    components: ["KASB Center", "Shops"],
    direct: "Formal employment for residents; fair-trade artisan cooperatives.",
    indirect: "Job placements in partner enterprises (e.g., textiles, IT).",
    metric: "200+ jobs created; PKR 15M annual collective income."
  },
  {
    sdg: "10",
    title: "Reduced Inequalities",
    components: ["Holistic Admission Policy"],
    direct: "Prioritization of double orphans/widows from minority groups (e.g., Hindu Dalits, Christians).",
    indirect: "Cross-faith community events; anti-stigma campaigns.",
    metric: "30% non-Muslim beneficiaries; zero discrimination reports."
  },
  {
    sdg: "11",
    title: "Sustainable Communities",
    components: ["Green Infrastructure"],
    direct: "Solar-powered public spaces; waste recycling systems.",
    indirect: "Training 500 locals/year in urban farming and eco-design.",
    metric: "80% waste recycled; 5-acre greenbelt expansion."
  },
  {
    sdg: "13",
    title: "Climate Action",
    components: ["Solar Grid", "Dairy Waste Mgmt"],
    direct: "Off-grid renewable energy; biogas from livestock waste.",
    indirect: "Carbon credits sold to fund education; climate-resilient crop training.",
    metric: "200+ MWh clean energy/year; 50% lower methane emissions."
  },
  {
    sdg: "16",
    title: "Peace & Justice",
    components: ["Islamic Institute", "Counseling"],
    direct: "Spiritual conflict resolution; legal aid for women’s inheritance rights.",
    indirect: "Partnerships with local police for GBV response; SDG-focused Friday sermons.",
    metric: "100% residents access legal aid; 20+ community mediation cases/year."
  }
];

export default function SdgImpactTable() {
    const [expandedRow, setExpandedRow] = useState(null);
    const toggleExpand = (i) => setExpandedRow(expandedRow === i ? null : i);
  
    return (
      <div>
      	<div className="section-title-area ltn__section-title-2--- text-center pt-50">
					<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">SGD Impact Mapping</h6>
					<h1 className="section-title">SDG Impact Matrix</h1>
          <span className="section-description w-90">
          Impact mapped through direct contributions (core activities) and indirect contributions (systemic ripple effects), measured against UN SDG indicators.
          </span>
				</div>
      <div className="sdg-table-wrapper">
        <div className="sdg-table-card">
          <table className="sdg-table">
            <colgroup>
              <col className="sdg-col" />
              <col className="project-col" />
              <col className="desktop-only" />
              <col className="desktop-only" />
              <col className="desktop-only" />
              <col className="mobile-only" />
            </colgroup>
  
            <thead>
              <tr className="sdg-table-headrow">
                <th>SDG</th>
                <th>Project Component</th>
                <th className="desktop-only">Direct Contribution</th>
                <th className="desktop-only">Indirect Contribution</th>
                <th className="desktop-only">Alignment Metrics</th>
                <th className="mobile-only">Contribution &amp; Matrix</th>
              </tr>
            </thead>
  
            <tbody>
              {DATA.map((row, i) => (
                <React.Fragment key={i}>
                  <tr>
                    <td className="sdg-id">
                      <span className="sdg-chip">{row.sdg}</span>
                      <div className="sdg-title">{row.title}</div>
                    </td>
                    <td>
                      <ul className="sdg-list">
                        {row.components.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </td>
  
                    {/* desktop cells */}
                    <td className="desktop-only">{row.direct}</td>
                    <td className="desktop-only">{row.indirect}</td>
                    <td className="desktop-only">{row.metric}</td>
  
                    {/* mobile-only toggle cell */}
                    <td className="mobile-only eye-cell">
                      {expandedRow === i ? (
                        <FaTimes onClick={() => toggleExpand(i)} aria-label="Hide details" />
                      ) : (
                        <FaEye onClick={() => toggleExpand(i)} aria-label="Show details" />
                      )}
                    </td>
                  </tr>
  
                  {/* mobile-only expandable details */}
                  {expandedRow === i && (
                    <tr className="mobile-only">
                      <td colSpan="3" className="mobile-details">
                        <div className="detail-block">
                          <strong>Direct Contribution</strong>
                          <p>{row.direct}</p>
                        </div>
                        <div className="detail-block">
                          <strong>Indirect Contribution</strong>
                          <p>{row.indirect}</p>
                        </div>
                        <div className="detail-block">
                          <strong>Alignment Metrics</strong>
                          <p>{row.metric}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
  
          <div className="sdg-note">
            * Apna Ghar — SDG alignment matrix (demo)
          </div>
        </div>
      </div>
      </div>
    );
  }