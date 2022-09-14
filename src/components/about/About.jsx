import React from "react";
import "../about/about.css";
import Award from "../../img/award.png";
import Bipin from "../../img/profile1.jpg";
const About = () => {
  return (
    <div className="abt">
      <div className="abt-left">
        <div className="abt-card bg"></div>
        <div className="abt-card">
          <img src={Bipin} className="abt-img" alt="" srcset="" />
        </div>
      </div>
      <div className="abt-right">
        <h1 className="abt-title">About me</h1>
        <p className="abt-sub-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          excepturi veniam velit et sequi, nemo illo nihil commodi! Eligendi,
          veniam.
        </p>
        <p className="abt-disc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          doloribus hic ducimus consequuntur? Commodi porro modi laboriosam! Cum
          autem illo architecto nesciunt dolor saepe nam sed impedit, sint
          numquam explicabo.
        </p>
        <div className="abt-award">
          <img src={Award} className="abt-award-img" alt="" />
          <div className="abt-award-text">
            <h4 className="abt-award-title">Lorem ipsum dolor sit amet.</h4>
            <p className="abt-award-disc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dolorum tempora blanditiis cumque provident officiis sunt placeat
              quas harum aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
