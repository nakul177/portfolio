import "./about.css";
import img from "../../img/skillicon/1_Pp2FjqG32-Mg6R3RdFAJvg.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={img} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hi Everyone, I am Nakul Uday Deshmukh from Khamgaon,Maharashtra. I am
          a Hotel Management Graduate from UEI Goble College, Pune.
        </p>
        <p className="a-desc">
          A Passionate full-stack web Developer with 4+ months of hands-on
          experience in developing scalable websites/applications using a wide
          range of front end and back-end skills like HTML, CSS, JavaScript,
          Mongodb, Express, Redux, NodeJs, React etc. Developed 4+ websites from
          scratch. I hope to work in a dynamic organization that helps enhance
          my technical skills and knowledge. I would like to work in an
          organization that challenges me on a daily basis and helps me grow and
          develop alongside the organization..
        </p>
        <div className="a-award">
         <button className="button-resume"><a href="https://drive.google.com/file/d/1lQQmN5GFEIcoy8EDpDa4EW99gazwDDmw/view?usp=sharing"> Resume</a></button>
         <button className="button-github"><a href="https://github.com/nakul177"> Github </a></button>
        </div>
      </div>
    </div>
  );
};

export default About;
