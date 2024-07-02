import Intro from "../Content/Intro";
import "./Home.scss";

function HomePage() {
  return (
    <>
      <div className="home-content">
        <div className="home_content-intro">
          <Intro />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default HomePage;
