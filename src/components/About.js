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
            My background is in backend development for large-scale<br></br>
            systems and cloud enterprise applications, with experience<br></br>
            in scalable data processing, cloud integrations, and<br></br>
            performance optimization.
            <br></br>
            In my past internships, I worked on high-scale data pipelines,<br></br>
            query optimization, and cloud-based enterprise solutions.<br></br>
            I’m proficient in Python, C++, and Java, with expertise in<br></br>
            backend and data technologies like PostgreSQL, Snowflake,<br></br>
            GraphQL, AWS, and GCP.
            <br></br>
            Entering grad school, I became increasingly interested<br></br>
            in applied AI/ML and NLP, leading me to focus on research<br></br>
            and projects in this area. I’m excited about opportunities<br></br>
            at the intersection of AI, backend engineering, and scalable<br></br>
            cloud applications.
            <br></br>
            Learn more about my research and projects below.<br></br>
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