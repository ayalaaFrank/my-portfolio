import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import '../style/Projects.css';

const projects = [
  {
    id: 1,
    title: "Chinese Auction Website",
    description: "An advanced website for managing Chinese auctions, including a CMS system and intuitive user interface.",
    image: img1,
    github: "https://github.com/ayalaaFrank/AngularProject.git"
  },
  {
    id: 2,
    title: "Lechem Basar Restaurant Website",
    description: "A showcase website and ordering system for Lechem Basar restaurant, including a dynamic menu and online orders.",
    image: img2,
    github: "https://github.com/ayalaaFrank/miniReactProject.git"
  },
  {
    id: 3,
    title: "Real Estate Application",
    description: "An application for managing real estate assets with advanced search, filtering, and asset management interface.",
    image: img3,
    github: "https://github.com/ayalaaFrank/serverProjectWorkers.git"
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Selected projects:</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}