import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faGithub, faEnvelope, faPhone)

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently looking for 2025 New Grad positions. <br></br>
          Please feel free to contact me via any means below:
        </p>

        <div className='container md:mx-auto'>
            <div className='text-center text-2xl'>
                <a href="https://www.linkedin.com/in/emma-jin/">
                    <FontAwesomeIcon className='p-5' icon="fa-brands fa-linkedin" />
                </a>
                <a href="https://github.com/EmmaJin0210">
                    <FontAwesomeIcon className='p-5' icon="fa-brands fa-github" />
                </a>
                <a href="mailto:emma.mq.jin@gmail.com">
                    <FontAwesomeIcon className='p-5' icon="fa-solid fa-envelope" />
                </a>
                <a href="tel:+14844784779">
                    <FontAwesomeIcon className='p-5' icon="fa-solid fa-phone" />
                </a>     
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;