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
            <p className="pb-5">
              <b>SALESFORCE, INC.</b>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              05/2024 – 08/2024<br></br>
              <b>Software Engineering Intern, Data Cloud Activation</b> | <i>Java, JavaScript, Bazel, S3, Spark, GCS, Git</i><br></br>
              &#x2022;&emsp;Built a production-scheduled feature to drive targeted marketing campaigns, reducing promotional oversaturation
            </p>
          </ul>
          <ul>
            <p className="pb-5">
              <b>TABLEAU SOFTWARE, LLC.</b>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;
              06/2023 – 08/2023<br></br>
              <b>Software Engineering Intern, Query Processing</b> | <i>C++, Python, Bazel, Splunk, Git, AWS EC2, Agile</i><br></br>
              &#x2022;&emsp;Developed a fingerprint feature for user queries, enabling bulk comparisons to improve query optimization efficiency
            </p>
          </ul>
          <ul>
            <p className="pb-5">
              <b>TABLEAU SOFTWARE, LLC.</b>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;
              05/2022 – 08/2022<br></br>
              <b>Software Engineering Intern, Product Internationalization</b> | <i>C++, Python, Ruby, XML, Protobuf, Docker</i><br></br>
              &#x2022;&emsp;Implemented a high-demand feature for integrating custom translations into Tableau workbooks, significantly reducing manual editing time
            </p>
          </ul>
          <ul>
            <p className="pb-5">
              <b>ACTUALFOOD, LLC.</b>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              06/2021 – 08/2021<br></br>
              <b>Software Engineering Intern</b> | <i>JavaScript, React, Svelte, REST APIs, HTML, Git, Figma</i><br></br>
              &#x2022;&emsp;Spearheaded API identification and built proof-of-concept for a nutritional insights platform targeting medical professionals
            </p>
          </ul>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-rows items-center justify-center md:justify-between">
        <div className="research-experience">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[360px] border-indigo-600 pb-2">
            Research
          </h2>
          <ul>
            <p className="pb-5"> <b>COMPUTER SCIENCE DEPT., UNIV. OF PENNSYLVANIA</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            01/2025-Present<br></br>
            Advised by: Liam Dugan, Prof. Chris Callison-Burch
            <b>Difficulty-Controlled Language Tutoring with LLMs</b> | <i>Python, Pytorch, Hugging Face, OpenAI, Transformers, CUDA</i><br></br>
            &#x2022;&emsp;Experimenting with methods for controlled text generation to enhance chatbot response reliability
            &#x2022;&emsp;Designed evaluation framework using multi-turn conversations between LLMs to assess system performance</p>
          </ul>

          <ul>
            <p className="pb-5"> <b>COMPUTER SCIENCE DEPT., UNIV. OF PENNSYLVANIA</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            09/2024-12/2024<br></br>
            Advised by: Liam Dugan, Prof. Chris Callison-Burch
            <b>MoE Detectors for AI-Generated Text</b> | <i>Python, Pytorch, Hugging Face, OpenAI, Transformers, CUDA</i><br></br>
            &#x2022;&emsp;Trained Ensemble and Mixture-of-Experts models to detect AI-generated text</p>
          </ul>

          <ul>
            <p className="pb-5"> <b>COMPUTER SCIENCE DEPT., UNIV. OF PENNSYLVANIA</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            01/2024-08/2024<br></br>
            Advised by: Tianyi Zhang, Andrew Zhu, Prof. Chris Callison-Burch
            <b>Procedural World Generation for Text Adventure Games</b> | <i>Python, Hugging Face, OpenAI, Transformers</i><br></br>
            &#x2022;&emsp;Built procedural world generation pipeline to maintain coherence and context in LLM-generated game environments
            &#x2022;&emsp;Published at Wordplay @ ACL2024
            <a href="https://wordplay-workshop.github.io/pdfs/15.pdf" target="_blank" class="text-indigo-400 underline"> (paper link) </a> 
            </p>
          </ul>

          <ul>
            <p className="pb-5"> <b>STATISTICS DEPT., SWARTHMORE COLLEGE</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            09/2022-05/2023<br></br>
            Advised by: Prof. Steve Wang
            <b>Biodiversity Crisis - Statistical Paleontology</b> | <i>R/RStudio</i><br></br>
            &#x2022;&emsp;Analyzed the current biodiversity crisis with mass and background extinctions</p>
          </ul>
          <ul>
            <p className="pb-5"> <b>COMPUTER SCIENCE DEPT., SWARTHMORE COLLEGE</b>
            &emsp;&emsp;&emsp;&emsp;
            12/2021-05/2022<br></br>
            Advised by: Prof. Xiaodong Qu
            <b>EEG Signals - BCI</b> | <i>Python, Scikit-learn, Matplotlib, NumPy, TensorFlow</i><br></br>
            &#x2022;&emsp;Trained models and compared performance of ML/DL algorithms on BCI data</p>
          </ul>
          <ul>
            <p className="pb-5"> <b>STATISTICS DEPT., SWARTHMORE COLLEGE</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
            01/2021-05/2021<br></br>
            Advised by: Prof. Steve Wang
            <b>Duration of Mass Extinction - Statistical Paleontology</b> | <i>R/RStudio</i><br></br>
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
            <b>Concentration: Artificial Intelligence</b><br></br>
            <i>Courses:</i> Artificial Intelligence, Distributed Systems, Operating Systems, <br></br>
            Text Generation with LLMs, Algorithms, Functional Programming<br></br>
            <i>TA:</i> Distributed Systems, Artificial Intelligence<br></br>
            </p>
          </ul>
          <ul>
            <p className="pb-5"> <b>SWARTHMORE COLLEGE</b>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;
            08/2019-05/2023<br></br>
            <b>Bachelor's of Arts, Computer Science, Statistics, English Literature</b><br></br>
            GPA: 3.89/ 4.0<br></br>
            <i>Courses:</i> Natural Language Processing, Machine Learning, Computer Vision, Algorithms,<br></br>
            Security and Privacy, Numerical Methods, Statistical Methods, Probability<br></br>
            <i>TA:</i> Data Structures and Algorithms, Intro to Computer Science, Statistical Methods<br></br>
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;