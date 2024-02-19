import React from 'react';
import '../About.css'; // Assuming you will create a corresponding CSS file

function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">ABOUT US</h1>
      <div className="about-content">
        <p>
          MoveEasy started off as a platform to address inefficiencies in the last mile logistics sector and
          transform the way goods are transported around cities, enabling businesses to move anything on-demand.
          We've grown manifold since then, positively impacting the productivity of businesses, creating tremendous
          value for our partner-drivers and delivering happiness to a growing list of cities.
        </p>
        <p>
          But our journey has just begun, our goal is to deliver the world's best end-to-end logistics platform
          and revolutionize the transport logistics sector.
        </p>
        <img src="/path-to-your-image.jpg" alt="MoveEasy Team" className="about-image" />
        <p>
          MoveEasy is strongly committed towards improving the quality of life of our partner drivers. Our partners
          enjoy flexible working hours, increased earnings and an effective work life balance along with additional
          benefits like discounted insurance and fuel costs.
        </p>
        <img src="/path-to-another-image.jpg" alt="MoveEasy Operations" className="about-image" />
      </div>
    </div>
  );
}

export default About;
;