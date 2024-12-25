import React from 'react';
import './skills.css';
import './new.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaCloud } from 'react-icons/fa';
import { SiExpress, SiMysql, SiMongodb, SiCssmodules } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="SkillPage-skills-container">
      <h1 className="SkillPage-title">Skills & Deployment</h1>
      <div className="SkillPage-skills-grid">
        <div className="SkillPage-skill-card">
          <FaHtml5 className="SkillPage-skill-icon" />
          <h3>HTML</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaCss3Alt className="SkillPage-skill-icon" />
          <h3>CSS</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaJs className="SkillPage-skill-icon" />
          <h3>JavaScript</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaReact className="SkillPage-skill-icon" />
          <h3>ReactJS</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaBootstrap className="SkillPage-skill-icon" />
          <h3>Bootstrap</h3>
        </div>
        <div className="SkillPage-skill-card">
          <SiCssmodules className="SkillPage-skill-icon" />
          <h3>Module CSS</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaNodeJs className="SkillPage-skill-icon" />
          <h3>NodeJS</h3>
        </div>
        <div className="SkillPage-skill-card">
          <SiExpress className="SkillPage-skill-icon" />
          <h3>Express JS</h3>
        </div>
        <div className="SkillPage-skill-card">
          <SiMysql className="SkillPage-skill-icon" />
          <h3>MySQL</h3>
        </div>
        <div className="SkillPage-skill-card">
          <SiMongodb className="SkillPage-skill-icon" />
          <h3>MongoDB</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaCloud className="SkillPage-skill-icon" />
          <h3>Vercel</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaCloud className="SkillPage-skill-icon" />
          <h3>Render</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaCloud className="SkillPage-skill-icon" />
          <h3>Netlify</h3>
        </div>
        <div className="SkillPage-skill-card">
          <FaCloud className="SkillPage-skill-icon" />
          <h3>Hostinger</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
