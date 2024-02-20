import React from 'react';
import '../About.css'; // Assuming you will create a corresponding CSS file
import bikeImage from '../assets/bike.png.webp';

function About() {
  return (
    <div className='base'>

      <div className='about-first'>
        <h1>
          ABOUT US
        </h1>
      </div>

      <div className='about-second'>
        <text>
          MoveEasy started off as a platform to address inefficiencies in the last mile logistics sector and transform the way goods are transported around cities, enabling businesses to move anything on-demand. We've grown manifold since then, positively impacting the productivity of businesses, creating tremendous value for our partner-drivers and delivering happiness to a growing list of cities.
          <br>
          </br>
          But our journey has just begun, our goal is to deliver the world's best end-to-end logistics platform and revolutionize the transport logistics sector.
        </text>
        <div className='about-second img'>
          <img src={bikeImage} alt="Bike" />
        </div>
      </div>
      
      <div className='about-third'>
        <div className='about-third img'>
          <img src={bikeImage} alt="Bike" />
        </div>
        <text>          
          MoveEasy started off as a platform to address inefficiencies in the last mile logistics sector and transform the way goods are transported around cities, enabling businesses to move anything on-demand. We've grown manifold since then, positively impacting the productivity of businesses, creating tremendous value for our partner-drivers and delivering happiness to a growing list of cities.
          <br>
          </br>
          But our journey has just begun, our goal is to deliver the world's best end-to-end logistics platform and revolutionize the transport logistics sector.  
        </text> 
      </div>

    </div>
  );
}

export default About;
