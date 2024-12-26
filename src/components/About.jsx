import { motion } from "framer-motion";

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
      <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-16 mt-4">
        <div className="flex flex-col w-full md:w-1/2 space-y-6">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="text-white leading-8 bg-[#172554] rounded-lg p-6"
          >
            <h3 className="font-bold text-lg">Bio</h3>
            <p>- CS @ Colorado College, Coding Club Leader</p>
            <p>- Content Creator (50M views, 100k+ followers)</p>
          </motion.div>
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="text-white leading-8 bg-[#172554] rounded-lg p-6"
          >
            <h3 className="font-bold text-lg">Skills</h3>
            <p>- Typescript, Python, Rust, C++, NextJS, React Native, Pytorch</p>
            <p>- GraphQL, Firebase, AWS, MongoDB, Docker, Kubernetes </p>
          </motion.div>
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="text-white leading-8 bg-[#172554] rounded-lg p-6"
          >
            <h3 className="font-bold text-lg">Accomplishments</h3>
            <p>- HackHarvard 2023 Winner</p>
            <p>- Founder of Punch Analytics (Acquired by POWA Boxing)</p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center relative bottom-6">
          <img
            src={profilepic}
            alt="profilepic"
            className="w-[200px] h-[300px] md:w-[300px] md:h-[400px] object-cover mb-7 md:mb-0"
          />
          <motion.div
            variants={textVariant()}
            className="flex space-x-1 content-center mt-4"
          >
            <button
              className="w-14 h-14 rounded-full bg-linkedin text-white"
              onClick={() => window.open("https://www.linkedin.com/in/ronantakizawa/")}
            >
              <img src={linkedin} className="object-contain" />
            </button>
            <button
              className="w-14 h-14 rounded-full bg-black text-white"
              onClick={() => window.open("https://medium.com/@ronantech")}
            >
              <img src={medium_logo} className="w-[55px] object-contain items-center" />
            </button>
            <button
              className="w-14 h-14 rounded-full items-center bg-white text-black"
              onClick={() => window.open("mailto:ronantakizawa@gmail.com")}
            >
              <img src={gmail} className="w-[35px] object-contain items-center ml-[11px]" />
            </button>
            <button
              className="w-14 h-14 rounded-full bg-black text-white"
              onClick={() => window.open("https://github.com/ronantakizawa")}
            >
              <img src={github} className="w-32" />
            </button>
            <button
              className="w-14 h-14 rounded-full bg-black text-white"
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
