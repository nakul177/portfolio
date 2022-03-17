import "./about.css";
import img from "../../img/skillicon/1_Pp2FjqG32-Mg6R3RdFAJvg.jpeg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={img}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Hi Everyone, I am Nakul Uday Deshmukh from Khamgaon,Maharashtra.
I am a Hotel Management Graduate from UEI Goble College, Pune.
        </p>
        <p className="a-desc">
        During my studies I got in contact with the basic concepts of
          programming. Since then I've always wanted to become a developer.
          Fortunately I have discovered Masai School and joined without any
          hesitation.
        </p>
        {/* <div className="a-award">
          <img src="" alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
