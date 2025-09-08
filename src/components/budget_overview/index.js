import React from "react";
import "./index.css";

const DATA = [
  {
    component: "Land (44 Kanals)",
    cost: "44,000,000"
  },
  {
    component: "102 Homes + Solarization",
    cost: "173,400,000"
  },
  {
    component: "500 KVA Solar Grid",
    cost: "50,000,000"
  },
  {
    component: "Water Scheme + RO Plant",
    cost: "12,526,000"
  },
  {
    component: "Mosque + Islamic Institute",
    cost: "7,500,000"
  },
  {
    component: "KASB Skill Center",
    cost: "15,000,000"
  },
  {
    component: "Dairy Farm + Shops",
    cost: "25,000,000"
  }
];

export default function BudgetOverview() {
  const totalCost = DATA.reduce((sum, item) => {
    return sum + parseInt(item.cost.replace(/,/g, ''));
  }, 0);

  return (
    <div> 
      <div className="section-title-area ltn__section-title-2--- text-center pt-50">
        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Project Budget</h6>
        <h1 className="section-title">Budget Overview</h1>
      </div>
      <div className="budget-table-wrapper">
        <div className="budget-table-card">
          <table className="budget-table">
            <thead>
              <tr className="budget-table-headrow">
                <th>Component</th>
                <th>Cost (PKR)</th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((row, i) => (
                <tr key={i}>
                  <td className="budget-component">{row.component}</td>
                  <td className="budget-cost">{row.cost}</td>
                </tr>
              ))}
              <tr className="budget-total">
                <td>TOTAL</td>
                <td>{totalCost.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
          <div className="budget-note">
            Approx.  (~USD 1.17 million | GBP 880,000)
          </div>
        </div>
      </div>
    </div>
  );
}