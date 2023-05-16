import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {profilepic,linkedin,github,gmail,tiktok} from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-blue-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>ABOUT</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[20px] leading-10 w-full h-100 px-5 py-10"
      >
        <div className="flex space-x-16">
          <div>
        <p> <span className="font-bold">Bio:</span> 🇯🇵🇮🇪, CS Student @ Colorado College</p>
        <p>OWASP Member, Tiktok Content creator w 500k views</p>
        <br></br>
        <p> <span className="font-bold">Languages:</span> Javascript , Typescript , Rust , HTML , CSS</p>
        <br></br>
        <p><span className="font-bold">Development Tools:</span> React , React Native , Tailwind , Bootstrap </p>
        <p>NodeJS, REST API , GraphQL , Relay , Apollo , Firebase , MongoDB  Wordpress, Three.js</p>
        <br></br>
        <p><span className="font-bold">Web Security Tools:</span> Burp Suite, Metasploit</p>
        <br></br>
        <motion.div variants={textVariant()} className="flex py-5 space-x-3 content-center">
        <button className="w-24 h-24 rounded-full 
                       bg-linkedin text-white" onClick={()=>window.open("https://www.linkedin.com/in/ronantakizawa/")}>
            <img src={linkedin} className=" object-contain"></img>
        </button>
        <button className="w-24 h-24 rounded-full  items-center
                       bg-white  text-black" onClick={()=>window.open("mailto:ronantakizawa@gmail.com")}>
            <img src={gmail} className="w-[65px] object-contain items-center ml-4"></img>
        </button>
        <button className="w-24 h-24 rounded-full 
                       bg-black   text-white" onClick={()=>window.open("https://github.com/ronantakizawa")}>
            <img src={github} className="w-32"></img>
        </button>
        <button className="w-24 h-24 rounded-full 
                       bg-black  text-white" onClick={()=>window.open("https://www.tiktok.com/@codingselfimprovement")}>
            <img src={tiktok} className=" object-contain "></img>
        </button>
        </motion.div>
        </div>

        <div>
        <img src={profilepic} alt="profilepic" className="w-[450px] object-contain space-x-1 items-center" ></img>
    


        </div>
        </div>
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
