import React from "react";
import '../assets/styles/Project.scss';
import UNO from '../assets/images/UNO.png';
import medical from '../assets/images/medical.png';
import recipes from '../assets/images/recipes.png';
import webproject from '../assets/images/website-desktop.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/biaros05/MedicalAppointmentApp" target="_blank" rel="noreferrer"><img src={medical} className="zoom" alt="" width="100%" /></a>
                <a href="https://github.com/biaros05/MedicalAppointmentApp" target="_blank" rel="noreferrer"><h2>Medical Appointment App</h2></a>
                <p>This app allows doctors to book appointments with patients, track them through notes and their profiles, and allows patients to update their profiles with updated information. Admin users can create and update other users' roles, as well as have access to all features.</p>
            </div>
            <div className="project">
                <a href="https://github.com/biaros05/StreamingVSCable" target="_blank" rel="noreferrer"><img src={webproject} className="zoom" alt="" width="100%"/></a>
                <a href="https://github.com/biaros05/StreamingVSCable" target="_blank" rel="noreferrer"><h2>Streaming VS Cable Services</h2></a>
                <p>Full stack MERN app which sifts an API and performs necessary calculations to filter only the data necessary for the sake of our website, and populates our Mongo DB. Using this data, our web app visualizes data for streaming VS cable companies, allowing users to decide which they think wins the competition... :)</p>
            </div>
            <div className="project">
                <a href="https://github.com/biaros05/UNOgame" target="_blank" rel="noreferrer"><img src={UNO} className="zoom" alt="" width="100%"/></a>
                <a href="https://github.com/biaros05/UNOgame" target="_blank" rel="noreferrer"><h2>Uno Console Card Game</h2></a>
                <p>This console game, coded entirely in Java, allows users to play UNO in their console. Fun ASCII art and colours were used in order to visualize real UNO cards!</p>
            </div>
            <div className="project">
                <a href="https://github.com/biaros05/RecipeApp" target="_blank" rel="noreferrer"><img src={recipes} className="zoom" alt="" width="100%"/></a>
                <a href="https://github.com/biaros05/RecipeApp" target="_blank" rel="noreferrer"><h2>Recipe App</h2></a>
                <p>This Recipe App coded in C#, using Avalonia for the frontend GUI, allows users to create an account, post recipes, as well as save them to their profile. Users can also search for recipes by filtering through various tags.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;