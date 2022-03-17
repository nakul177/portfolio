import React from "react";
import "./Skill.css";
import css from "../../img/skillicon/images_preview_rev_1.png";
import html from "../../img/skillicon/512px-HTML5_logo_and_wordmark.svg.png"
import react from "../../img/skillicon/recat.png"
import redux from "../../img/skillicon/redux.png"
import java from "../../img/skillicon/java.png"
import git from "../../img/skillicon/git.png"
import mongo from "../../img/skillicon/mongo.png"
import node from "../../img/skillicon/node.png"

const Skill = () => {
  return (
    <div className="skill">
      <div className="left">
        <div className="skilltext">
          <h1>Professional Skill</h1>
        </div>
        <div className="img-div">
          <div className="box1">
            <a href="https://whatwg.org/">
              <img src={css} alt="" />
              <h2>CSS</h2>
            </a>
            <a href="https://www.w3.org/">
              <img src={html} alt="" />
              <h2>HTML</h2>
            </a>
            <a href="https://www.javascript.com/">
              <img src={java} alt="" />
              <h2>JavaScript</h2>
            </a>
            <a href="https://reactjs.org/">
              <img src={react} alt="" />
              <h2>Recat.js</h2>
            </a>
          </div>
          <div className="box2">
            <a href="https://redux.js.org/">
              <img src={redux} alt="" />
              <h2>Redux</h2>
            </a>
            <a href="https://nodejs.org/en/">
              <img src={node} alt="" />
              <h2>Node.js</h2>
            </a>
            <a href="https://www.mongodb.com/">
              <img src={mongo} alt="" />
              <h2>MongoDB</h2>
            </a>
            <a href="https://git-scm.com/">
              <img src={git} alt="" />
              <h2>Git</h2>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Skill;
