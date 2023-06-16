import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently looking for Software Engineering internships for summer 2024. Please feel free 
          to contact me via any means below:
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> emma.mq.jin@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +1 4844784779
        </p>
      </div>
    </section>
  );
};

export default Contact;