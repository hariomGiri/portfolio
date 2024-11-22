import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[#0d0d24]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">WHO I AM?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300">
            <p>
              I am Hariom Giri, a dedicated and aspiring Computer Science student currently 
              pursuing my Bachelor of Technology at RGPV, Indore. With a strong foundation 
              in Machine Learning and Software Development, I am passionate about building 
              innovative solutions that address real-world challenges.
            </p>
            <p>
              My journey in the tech world includes impactful projects such as Linear 
              Regression for Insurance Prediction, KNN-based Diabetes Prediction, Brain 
              Stroke Prediction, and a Voice-Activated Assistant (Jarvis). Jarvis is a 
              dynamic personal assistant project that integrates speech recognition, task 
              automation, and AI-generated responses to enhance user productivity. These 
              projects reflect my ability to combine technical expertise with creativity 
              to deliver meaningful solutions.
            </p>
            <p>
              With certifications in Cybersecurity and MERN Stack Development, I am 
              continuously learning and enhancing my skills in AI/ML, software development, 
              and web technologies. My strengths lie in problem-solving, analytical thinking, 
              and a proactive approach to innovation.
            </p>
            <p>
              I am driven by the belief that technology can empower lives, and I aim to 
              make a meaningful contribution to the field by working on projects that 
              combine technical expertise with creativity.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;