import React from "react";
import "./index.css";

export default function MonitoringFramework() {
  return (
    <div className="monitoring-wrapper">
      <div className="monitoring-content">
        <h1 className="monitoring-title">Monitoring Framework</h1>
        
        <div className="monitoring-section">
          <h3 className="monitoring-subtitle">Data Sources</h3>
          <p>IoT sensors (water/energy usage), biometric attendance (school/skill center), sales ledgers (shops/dairy).</p>
        </div>

        <div className="monitoring-section">
          <h3 className="monitoring-subtitle">Evaluation</h3>
          <p>Annual SDG scorecard by UNDP Pakistan; third-party impact audits.</p>
        </div>

        <div className="monitoring-section">
          <h3 className="monitoring-subtitle">Beneficiary Feedback</h3>
          <p>Digital grievance portal + community Shura councils.</p>
        </div>

        <div className="monitoring-divider"></div>

        <div className="monitoring-quote">
          <p className="quote-text">"The most beloved deed to Allah is to make a Muslim happy, remove his hardship, or settle his debt."</p>
          <p className="quote-author">— Prophet Muhammad ﷺ (Al-Adab Al-Mufrad)</p>
        </div>

        <div className="monitoring-conclusion">
          <p>APNA GHAR embodies this hadith by converging faith, justice, and sustainability to advance 12/17 SDGs.</p>
        </div>
      </div>
    </div>
  );
}