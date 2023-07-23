import Header from "../Header/Header";
import { projectsData } from "../constants/constants";
import "./Projects.css";

function ProjectsSection() {
  const renderProjectsList = () => {
    return (
      <>
        {projectsData.map((project) => (
          <li className="project-item" key={project.id}>
            <a
              className="project-links"
              href={project.projectUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="project-image"
                src={project.imageUrl}
                alt="work"
              />
              <p className="project-name">{project.name}</p>
            </a>
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="projects-container">
        <div className="glass">
          <div className="projects-section">
            <h1 className="projects-heading">My Work</h1>
            <ul className="projects-list">{renderProjectsList()}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;
