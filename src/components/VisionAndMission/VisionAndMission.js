import React from "react";
import './VisionAndMission.css';
const VisionAndMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="row">
          {/* Vision - Left Side */}
          <div className="col-lg-6">
            <div className="vision-content">
              <div className="section-header">
                <h2 className="section-title">Our Vision</h2>
                <div className="title-separator"></div>
              </div>
              <div className="content-text">
                <p>
                  To become the leading Islamic financial advisory firm globally, 
                  recognized for our commitment to ethical principles, innovative 
                  solutions, and sustainable financial growth that aligns with 
                  Islamic values and international best practices.
                </p>
                <p>
                  We envision a world where Islamic finance serves as a beacon 
                  of ethical financial practices, providing accessible, transparent, 
                  and socially responsible financial solutions to individuals, 
                  businesses, and communities worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Mission - Right Side */}
          <div className="col-lg-6">
            <div className="mission-content">
              <div className="section-header">
                <h2 className="section-title">Our Mission</h2>
                <div className="title-separator"></div>
              </div>
              <div className="content-text">
                <p>
                  To deliver comprehensive, Shariah-compliant financial advisory 
                  services that empower our clients to achieve their financial 
                  goals while maintaining the highest standards of ethical conduct 
                  and Islamic principles.
                </p>
                <p>
                  Through expert guidance, innovative solutions, and unwavering 
                  commitment to our values, we strive to build lasting partnerships 
                  that contribute to the growth and stability of the Islamic 
                  finance industry and the prosperity of our global community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
