import React from "react";
import ProfilePhoto from "../assets/grad_photo_1_c.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, this is Emma! Thank you for visiting my website.<br></br>
            I am a current student at the University of Pennsylvania <br></br>
            and an aspiring Software Engineer.
          </p>
          <p className="pb-5">
            I especially enjoy full-stack and backend development,<br></br>
            and am proficient in frameworks such as Python Flask,<br></br>
            Django, and React.js. 
          </p>
          <p className="pb-5">
            In my free time, aside from building projects, I enjoy<br></br>
            distance running, cycling, figure skating, and taiko<br></br>
            (Japanese drumming)!
          </p>
          
        </div>

        <div className="about-img">
          <img
            src={ProfilePhoto}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;