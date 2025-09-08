import React from "react";
import "./index.css";

const DATA = [
  {
    objective: "Impact: Reduce poverty",
    indicator: "80% families self-sufficient in 5 yrs",
    verification: "Income surveys"
  },
  {
    objective: "Outcome: Skill development",
    indicator: "150 women trained/year per skill",
    verification: "KASB graduation records"
  },
  {
    objective: "Output: Water access",
    indicator: "1,100+ daily users",
    verification: "Filtration plant logs"
  },
  {
    objective: "Activity: Build solar grid",
    indicator: "500 KVA operational by 2026",
    verification: "Energy production reports"
  }
];

export default function LogicalFramework() {
  return (
    <div>
        <div className="section-title-area ltn__section-title-2--- text-center pt-50">
			<h1 className="section-title">Logical Framework (LFA) Matrix</h1>
		</div>
    <div className="lf-table-wrapper">
      <div className="lf-table-card">
        <table className="lf-table">
          <thead>
            <tr className="lf-table-headrow">
              <th>Objective</th>
              <th>Indicator</th>
              <th>Verification</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((row, i) => (
              <tr key={i}>
                <td className="lf-objective">{row.objective}</td>
                <td className="lf-indicator">{row.indicator}</td>
                <td className="lf-verification">{row.verification}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="lf-note">
          * Logical Framework (LFA) Matrix
        </div>
      </div>
    </div>
    </div>
  );
}