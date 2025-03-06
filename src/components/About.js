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
            My background is in backend and fullstack development for<br></br>
            large-scale systems and cloud enterprise applications, with<br></br>
            experience in scalable data processing, cloud integrations,<br></br>
            and performance optimization. In my past internships, I worked<br></br>
            on high-scale data pipelines, query optimization, and<br></br>
            cloud-based enterprise solutions.<br></br>
          </p>
          <p className="pb-5">
            After entering grad school, I became increasingly interested<br></br>
            in applied AI/ML and NLP, leading me to focus on research<br></br>
            and projects in this area. I also developed a strong interest<br></br>
            in distributed systems, working on projects involving fault<br></br>
            tolerance, scalability, and reliable data transmission. I’m<br></br>
            excited about opportunities in applied AI/ML, backend engineering,<br></br>
            and scalable cloud applications.
          </p>
          <p className="pb-5">
            In my free time, aside from building projects, I enjoy<br></br>
            distance running, figure skating, and taiko (Japanese drumming)!<br></br>
          </p>
          <p className="pb-5">
            Learn more about my research and projects below.<br></br>
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