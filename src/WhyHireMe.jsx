import React from 'react';
import './why.css';
import scholar from './images/scholarship.png';
import project from './images/project.png';
import { motion } from 'framer-motion';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            viewport={{
                once: true
            }}
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            <div className="neww">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">

                    <div className="box">
                            <img src={project} alt="" className='why_logo' />
                            <h4 className='mid_text'>1+</h4>
                            <p className='main_text_why'>Live Projects</p>
                            <p className='main_text_why'>Psycortex Pvt. Ltd.</p><br />
                            <p className='main_text_why'><a className="main_text_why_link" href="https://client.psycortex.in/">https://client.psycortex.in/</a></p>
                        </div>
                        <div className="box">
                            <img src={scholar} alt="" className='why_logo' />
                            <h4 className='mid_text'>2024</h4>
                            <p className='main_text_why'>B.Tech [CSE]</p><br />
                            <p className='main_text_why_SPU'>From SPU BALAGHAT</p>
                        </div>
                        <div className="box">
                            <img src={project} alt="" className='why_logo' />
                            <h4 className='mid_text'>4+</h4>
                            <p className='main_text_why'>Completed Projects</p>
                        </div>
                    </div>
                </motion.div>
                {/* <motion.div
                    initial={{
                        opacity: 0,
                        x: 120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={codechef} alt="" className='why_logo' />
                            <h4 className='mid_text'>4★</h4>
                            <p className='main_text_why'>Codechef Rating</p>
                        </div>
                        <div className="box ">
                            <img src={leetcode} alt="" className='why_logo' />
                            <h4 className='mid_text'>150</h4>
                            <p className='main_text_why'>LeetCode Problems Solved</p>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </motion.div>
    );
}

export default WhyHireMe;
