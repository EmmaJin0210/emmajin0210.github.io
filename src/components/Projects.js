import React from "react";
import procrastimate from "../assets/Study_buddy_300x300.jpeg";
import parlom from "../assets/parlom_300x300.png";
import swatCSPassword from "../assets/swatCS_300x300.png";

const Projects = () => {
  const projects = [
    {
      img: swatCSPassword,
      title: "SwatCS Password Service",
      desc: "Password service platform for Swarthmore College CS students. Built with Python Flask. ",
      link: "https://password.cs.swarthmore.edu/",
    },
    {
      img: procrastimate,
      title: "ProcrastiMate",
      desc: "iOS app for students to find nearby study-buddies. Built with Swift and Parse(Back4App).",
      link: "https://github.com/21Pod/StudyBuddy/",
    },
    {
      img: parlom,
      title: "Parlom",
      desc: "Orchestra management platform for teachers and managers. Built with React, TypeScript, and Python.",
      link: "https://docs.google.com/presentation/d/1AsegOWpB6A-QrOS4XbYci1dYX8z0m--ZbD_un60fGVY/edit?usp=sharing",
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