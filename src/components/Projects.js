import React from "react";
import procrastimate from "../assets/Study_buddy_300x300.jpeg";
import swatCSPassword from "../assets/swatCS_300x300.png";
import chatLingual from "../assets/chatlingual_300x300.jpg";
import haskellChat from "../assets/haskellchat_300x300.png";
import devflow from "../assets/devflow_300x300.png";
import penncloud from "../assets/penncloud_300x300.jpg";

const Projects = () => {
  const projects = [
    {
      img: chatLingual,
      title: "ChatLingual",
      desc: "LLM-powered multimodal language tutor supporting real-time audio and text conversations.",
      skills: "Python, PyTorch, Hugging Face, OpenAI, FastAPI, WebSockets, Transformers, NLP",
      link: "https://github.com/EmmaJin0210/LLMLanguageTutor/tree/demo-v1",
    },
    {
      img: swatCSPassword,
      title: "SwatCS Password Service",
      desc: "Password service platform for Swarthmore College CS students. Built with Python Flask.",
      skills: "Python, Flask, SQL, Authentication, Web Security",
      link: "https://password.cs.swarthmore.edu/",
    },
    {
      img: haskellChat,
      title: "HaskellChat",
      desc: "Distributed, fault-tolerant chat server with FIFO ordering and load balancing.",
      skills: "Haskell, Distributed Systems, WebSockets, Load Balancing, Concurrency",
      link: "https://github.com/EmmaJin0210/haskellChat",
    },
    {
      img: devflow,
      title: "DevFlow",
      desc: "All-in-one note-code editor with GPT-powered outline suggestion.",
      skills: "React, JavaScript, HTML, CSS, OpenAI, Git, Figma, Heroku",
      link: "https://emmajin0210.github.io/DevFlow-Public/",
    },
    {
      img: procrastimate,
      title: "ProcrastiMate",
      desc: "iOS app for students to find nearby study-buddies. Built with Swift and Parse(Back4App).",
      skills: "Swift, Parse, iOS Development, REST APIs, UI/UX Design",
      link: "https://github.com/21Pod/StudyBuddy/",
    },
    {
      img: penncloud,
      title: "PennCloud (course project but cool : ))",
      desc: "Distributed cloud storage with load balancing, webmail, and file management.",
      skills: "C++, Distributed Systems, Load Balancing, Replication, Fault Tolerance, Key-Value Stores",
      link: "https://docs.google.com/document/d/1eR5kaILgbaLI0UpCm-b9uu_hoknsul2Ofx2-zeTBG-o/edit?usp=sharing",
    },
  ];

  return (
    <section className="bg-secondery text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            Check out some interesting projects I have worked on!
          </p>
        </div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} width={200} height={200} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
              <p className="py-5 text-center font-bold px-2 text-white">
                  {project.title}
                </p>
                <p className="py-5 text-center text-white">
                  {project.desc}
                </p>
                <p className="py-5 text-center text-white">
                  {project.skills}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.link}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;