import React from "react";
import "./index.css";

const DATA = [
  {
    synergyCluster: "Women's Nexus (SDGs 1,5,8)",
    componentsInvolved: "KASB Center + Shops + Dream School",
    impactAmplification: "Economic autonomy → Education → Reduced GBV → Poverty exit (87% projected success rate)."
  },
  {
    synergyCluster: "Water-Energy-Food (SDGs 2,6,7)",
    componentsInvolved: "Solar Grid + RO Plant + Dairy Farm",
    impactAmplification: "Clean energy powers water/food systems → Healthier livestock → Higher incomes → SDG 1."
  },
  {
    synergyCluster: "Faith & Ecology (SDGs 11,13,16)",
    componentsInvolved: "Mosque + Green Belts + Waste Mgmt",
    impactAmplification: "Quranic environmental stewardship → Community-led conservation → Social cohesion."
  }
];

export default function SdgSynergies() {
  return (
    <div>
    	<div className="section-title-area ltn__section-title-2--- text-center pt-50">
			<h1 className="section-title">SDG Synergies Matrix</h1>
		</div>
    <div className="synergy-table-wrapper">
      <div className="synergy-table-card">
        <table className="synergy-table">
          <thead>
            <tr className="synergy-table-headrow">
              <th>Synergy Cluster</th>
              <th>Components Involved</th>
              <th>Impact Amplification</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((row, i) => (
              <tr key={i}>
                <td className="synergy-cluster">{row.synergyCluster}</td>
                <td className="synergy-components">{row.componentsInvolved}</td>
                <td className="synergy-impact">{row.impactAmplification}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="synergy-note">
          * SDG Synergies Matrix
        </div>
      </div>
    </div>
    </div>
  );
}