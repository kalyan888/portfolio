import Header from "../Header/Header";
import { skillsList } from "../constants/constants";
import "./About.css";

function About() {
  const renderSkillsList = () => {
    return (
      <>
        {skillsList.map((skill) => (
          <li className="skill-item" key={skill.id}>
            {skill.name}
          </li>
        ))}
      </>
    );
  };
  return (
    <>
      <Header />
      <div className="about-page">
        <h1 className="about-section-heading">
          <span className="about-section-heading-span">ABOU</span>T ME
        </h1>
        <div className="about-me-container">
          <p className="about-section-description">
            I&apos;m Kalyan an aspiring Full stack developer from Kakinada,
            Andhra Pradesh. I have a diverse set of skills, raging from design
            to HTML, CSS, JavaScript and ReactJS.
          </p>

          <a
            href="https://docs.google.com/document/d/1-2GztRX4WSKVvK8pxWM9WewNgS-KecSo8V1z1UQyWOo/edit"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="resume-btn" type="button">
              Resume
            </button>
          </a>
        </div>
        <div className="education-and-skills-container">
          <div className="education-details-container">
            <h1 className="education-and-skills-heading">Education</h1>
            <ul className="education-details-list">
              <li>
                <div className="education">
                  <p className="qualification">Graduation</p>
                  <p className="education-place">
                    Aditya College Of Engineering
                  </p>
                </div>
              </li>
              <li>
                <div className="education">
                  <p className="qualification">Diploma</p>
                  <p className="education-place">Aditya Polytechnic College</p>
                </div>
              </li>
              <li>
                <div className="education">
                  <p className="qualification">High School</p>
                  <p className="education-place">
                    Pragati Little Public School
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="skills-container">
            <h1 className="education-and-skills-heading">Skills</h1>
            <ul className="skills-list">
              {renderSkillsList()}
              {/* <li className="skill-item">HTML</li>
              <li className="skill-item">CSS</li>
              <li className="skill-item">Java Script</li>
              <li className="skill-item">Bootstrap</li>
              <li className="skill-item">ReactJS</li>
              <li className="skill-item">ExpressJS</li>
              <li className="skill-item">Node</li>
              <li className="skill-item">Python</li>
              <li className="skill-item">SQLite</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
