import React from "react";
import "./about_me.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="about_me"
      id="aboutMey"
    >
      <h2 className="heading">About Me</h2>
      <div className="about_me_info">
        <p className="about_me_left">
          Hello! I'm Sushank Patle, a budding MERN Full Stack Developer and
          UI/UX Designer. I specialize in front-end and back-end technologies,
          including MongoDB, Express.js, React.js, and Node.js, allowing me to
          build robust and dynamic applications. In addition to my technical
          skills, I have a strong focus on user research, wireframing,
          prototyping, and user testing to create intuitive and visually
          appealing interfaces. My proficiency with design tools like Figma,
          Sketch, and Adobe XD enables me to craft detailed design assets that
          enhance user experience. Combining development and design, I aim to
          create functional applications with a seamless and enjoyable user
          experience. I am passionate about continuous learning and staying
          updated with the latest trends and technologies. I look forward to
          connecting and collaborating on innovative projects, working closely
          with other developers, designers, and stakeholders to ensure success.
          Excited to explore new ideas and opportunities together!
        </p>
        {/* <div className="about_me_right"></div> */}
      </div>
    </motion.div>
  );
};

export default AboutMe;
