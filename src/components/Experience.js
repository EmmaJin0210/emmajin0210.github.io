import React from "react";

const Experience = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="experience">
      <div className="container mx-auto grid md:grid-rows items-center justify-center md:justify-between display:flex">
        <div className="work-experience">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[300px] border-indigo-600 pb-2">
            Work Experience
          </h2>
          <ul>
            <p className="pb-5"> <b>SALESFORCE, INC.</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            06/2023-Present<br></br>
            <b>Software Engineering Intern</b> | <i>C++, SQL</i><br></br>
            &#x2022;&emsp;Implementing feature to create fingerprints for Logical Queries</p>
          </ul>
          <ul>
            <p className="pb-5"> <b>SALESFORCE, INC.</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            05/2022-08/2022<br></br>
            <b>Software Engineering Intern</b> | <i>C++, Python</i><br></br>
            &#x2022;&emsp;Built Tableau Desktop feature that allowed integrated translations</p>
          </ul>
          <ul>
            <p className="pb-5"> <b>ACTUALFOOD, LLC.</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            06/2021-08/2021<br></br>
            <b>Software Engineering Intern</b> | <i>React.js, Svelte.js, Meteor.js</i><br></br>
            &#x2022;&emsp;Prototyped and built nutritional insights app for medical professionals</p>
          </ul>
          <ul>
            <p className="pb-5"> <b>WALDEN LOCAL MEAT CO.</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;
            01/2021-02/2021<br></br>
            <b>Algorithm Development Intern</b> | <i>Python, Pandas</i><br></br>
            &#x2022;&emsp;Designed program that optimizes product allocation to packaging lines</p>
          </ul>
        </div>
    </div>
    <div className="container mx-auto grid md:grid-rows items-center justify-center md:justify-between">
        <div className="research-experience">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[360px] border-indigo-600 pb-2">
            Research Experience
          </h2>

          <ul>
            <p className="pb-5"> <b>STATISTICS DEPT., SWARTHMORE COLLEGE</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            09/2022-05/2023<br></br>
            <b>Research Assistant - Statistical Paleontology</b> | <i>R/RStudio</i><br></br>
            &#x2022;&emsp;Analyzed the current biodiversity crisis with mass and background extinctions</p>
          </ul>
          <ul>
            <p className="pb-5"> <b>COMPUTER SCIENCE DEPT., SWARTHMORE COLLEGE</b>
            &emsp;&emsp;&emsp;&emsp;
            12/2021-05/2022<br></br>
            <b>Research Assistant - BCI</b> | <i>Python, Scikit-learn, Matplotlib</i><br></br>
            &#x2022;&emsp;Wrote program to compare performance of ML/DL algorithms on BCI data</p>
          </ul>
          <ul>
            <p className="pb-5"> <b>STATISTICS DEPT., SWARTHMORE COLLEGE</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            01/2021-05/2021<br></br>
            <b>Research Assistant - Statistical Paleontology</b> | <i>R/RStudio</i><br></br>
            &#x2022;&emsp;Improved algorithm estimating duration of mass extinction with fossil records</p>
          </ul>
        </div>
    </div>
    <div className="container mx-auto grid md:grid-rows-2 items-center justify-center md:justify-between">
        <div className="education-experience">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[370px] border-indigo-600 pb-2">
            Education Experience
        </h2>

        <ul>
            <p className="pb-5"> <b>UNIVERSITY OF PENNSYLVANIA</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &nbsp;&nbsp;
            Expected 05/2025<br></br>
            <b>Masters of Science in Engineering, Computer and Information Science</b><br></br>
            </p>
          </ul>
          <ul>
            <p className="pb-5"> <b>SWARTHMORE COLLEGE</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;
            08/2019-05/2023<br></br>
            <b>Bachelor's of Arts, Computer Science, Statistics, English Literature</b><br></br>
            GPA: 3.89/ 4.0<br></br>
            </p>
          </ul>
        </div>
    </div>
    </section>
  );
};

export default Experience;