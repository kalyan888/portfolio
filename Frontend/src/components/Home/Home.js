import Header from "../Header/Header";
import ReactParticles from "../ParticleContainer/ParticlesContainer";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <ReactParticles />
        <div className="profile">
          <div className="front-desc">
            <h1 className="user-name">Kalyan</h1>
            <h3 className="user-designation">Frontend Developer</h3>
          </div>
          <img
            className="profile-img-1"
            src="https://res.cloudinary.com/covid-dashboard/image/upload/v1627543858/Me/image.jpg"
            alt="profile-img"
          />
          <img
            className="profile-img-2"
            src="https://res.cloudinary.com/covid-dashboard/image/upload/v1626506808/Me/IMG_20200317_160927-01_ea7otw.jpg"
            alt="profile-img"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
