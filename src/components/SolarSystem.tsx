import React from "react";
import '../assets/styles/SolarSystem.scss';

export default function SolarSystem() {
  return (
    <div className="solar_system">
    <div className="sun"></div>
      <div className="mercury_orbit">
        <div className="mercury"></div>
      </div>
      <div className="venus_orbit">
        <div className="venus"></div>
      </div>
      <div className="earth_orbit">
        <div className="earth">
          <div className="moon_orbit">
            <div className="moon"></div>
          </div>
        </div>
      </div>
      <div className="mars_orbit">
        <div className="mars"></div>
      </div>
      <div className="jupiter_orbit">
        <div className="jupiter"></div>
      </div>
      <div className="saturn_orbit">
        <div className="saturn">
          <div className="saturn_ring"></div>
        </div>
      </div>
      <div className="uranus_orbit">
        <div className="uranus"></div>
      </div>
      <div className="naptune_orbit">
        <div className="naptune"></div>
      </div>
    </div>
  );
}