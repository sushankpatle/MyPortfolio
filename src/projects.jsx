import React from "react";
import Card from "./Card";
import Resume from "./images/Img11.png";
import ToDo from "./images/Img2.jpg";
import Psycortex from "./images/Img3.png";
import wise_way from "./images/wise_way.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  const cards = [
    {
      imageUrl: Resume,
      altText: "Resume Builder",
      title: "Resume Builder",
      description:
        "Create stunning, professional resumes effortlessly with our easy-to-use platform. Choose from beautifully designed templates, customize your resume to showcase your unique skills, and download it in multiple formats. Transform your job search and land your dream job with our intuitive resume builder.",
      // explore: "https://github.com/Praneeth2025/zenith-bistro",
      explore: "",
    },
    {
      imageUrl: ToDo,
      altText: "ToDo",
      title: "ToDo Web Application",
      description:
        '"Stay organized and boost your productivity with our intuitive ToDo web app. Easily create, manage, and prioritize your tasks with a user-friendly interface designed to help you achieve your goals. Stay on top of your schedule and accomplish more every day with our powerful task management tool."',
      // explore: "https://github.com/Praneeth2025/chess-image-recognizer",
      explore: "",
    },
    {
      imageUrl: Psycortex,
      altText: "Canyons",
      title: "Appointment Management System",
      description:
        "Effortlessly manage appointments with our advanced Appointment Management System, developed by ANORG Technologies Pvt. Ltd. for Psycortex Pvt. Ltd.( https://client.psycortex.in ). Streamline scheduling, reduce no-shows, and enhance client satisfaction with our user-friendly platform, designed to simplify your appointment management process.",
      // explore: "https://github.com/Praneeth2025/Gesture-Snake",
      explore: "https://client.psycortex.in",
    },
    // {
    //   imageUrl: wise_way,
    //   altText: "wise_way",
    //   title: "WiseWay",
    //   description:
    //     "a web application that uses advanced algorithms to calculate the most cost-effective route between two points.",
    //   explore: "https://github.com/Praneeth2025/WiseWay-website",
    //   explore: "",
    // },
  ];

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
        margin: "-100px",
        once: true,
      }}
      className="up_gap "
      id="project"
    >
      <h2 className="heading1 down_gap">Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
