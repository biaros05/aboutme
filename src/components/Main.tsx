import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import SolarSystem from "./SolarSystem";
import avatar from '../assets/images/avatar.jpg';

function Main() {

  return (
    <div className="container">
      <SolarSystem/>
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/biaros05" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bianca-rossetti-743ab92a7/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Bianca Rossetti</h1>
          <p>Computer Science Student</p>
          <p>Aspiring Junior Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/biaros05" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bianca-rossetti-743ab92a7" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;