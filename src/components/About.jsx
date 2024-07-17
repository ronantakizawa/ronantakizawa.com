import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { github, gmail, linkedin, tiktok, medium_logo, profilepic } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>ABOUT</p>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-16 mt-4">
        <div className="flex flex-col w-full md:w-1/2 space-y-6">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="text-l text-white leading-8 bg-[#172554] rounded-lg p-6"
          >
            <p className="font-bold">Bio</p>
            <p>- CS Student @ Colorado College</p>
            <p>- Content Creator (50M views, 90k+ followers)</p>
          </motion.div>
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="text-l text-white leading-8 bg-[#172554] rounded-lg p-6"
          >
            <h3 className="font-bold">Skills</h3>
            <p>- Typescript, Python, Rust, C++, HTML, NextJS, React Native</p>
            <p>- GraphQL, Firebase, AWS, Docker, MongoDB</p>
          </motion.div>
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="text-l text-white leading-8 bg-[#172554] rounded-lg p-6"
          >
            <p className="font-bold">Accomplishments</p>
            <p>- HackHarvard 2023 Winner</p>
            <p>- Founder of Punch Analytics (Acquired by POWA Boxing)</p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center relative up bottom-10 ">
          <img
            src={profilepic}
            alt="profilepic"
            className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] object-cover mb-8"
          />
          <motion.div
            variants={textVariant()}
            className="flex space-x-1 content-center"
          >
            <button
              className="w-16 h-16 rounded-full bg-linkedin text-white"
              onClick={() => window.open("https://www.linkedin.com/in/ronantakizawa/")}
            >
              <img src={linkedin} className="object-contain" />
            </button>
            <button
              className="w-16 h-16 rounded-full bg-black text-white"
              onClick={() => window.open("https://medium.com/@ronantech")}
            >
              <img src={medium_logo} className="w-[55px] object-contain items-center m-1" />
            </button>
            <button
              className="w-16 h-16 rounded-full items-center bg-white text-black"
              onClick={() => window.open("mailto:ronantakizawa@gmail.com")}
            >
              <img src={gmail} className="w-[45px] object-contain items-center ml-[10px]" />
            </button>
            <button
              className="w-16 h-16 rounded-full bg-black text-white"
              onClick={() => window.open("https://github.com/ronantakizawa")}
            >
              <img src={github} className="w-32" />
            </button>
            <button
              className="w-16 h-16 rounded-full bg-black text-white"
              onClick={() => window.open("https://www.tiktok.com/@ronantech")}
            >
              <img src={tiktok} className="object-contain" />
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
