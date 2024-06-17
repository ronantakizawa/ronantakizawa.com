import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { github, gmail, linkedin, profilepic, tiktok, resume } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

function ServiceCard({ index, title, icon }) {
  return (
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
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>ABOUT</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-xl mt-4 text-white leading-10 h-full"
      >
        <div className="flex space-x-16 ">
          <div>
            <p>
              {" "}
              <span className="font-bold mb-16">Bio:</span> CS Student @
              Colorado College
            </p>
            <p> Content Creator (50M views, 90k+ followers)</p>
            <p>
              {" "}
              <span className="font-bold">Languages:</span>
               &nbsp; Typescript , Rust , C++, SQL , HTML , CSS, Python
            </p>
            <p>
              <span className="font-bold">Development Tools:</span> NextJS ,
              React Native , Tailwind , Bootstrap{" "}
            </p>
            <p>
              NodeJS , GraphQL , Apollo , Firebase , MongoDB,
            </p> 
            <p>
            Wordpress, Three.js , AWS , Docker , Pytorch, Scikit-Learn, VectorDB
            </p>
            <p>
              <span className="font-bold">Accomplishments:</span> HackHarvard 2023 Winner
              <p>
              Founder of Punch Analytics (Acquired by POWA Boxing)
              </p>
            </p>
            <motion.div
              variants={textVariant()}
              className="flex py-5 space-x-3 content-center "
            >
              <button
                className="w-24 h-24 rounded-full 
                       bg-linkedin text-white"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/ronantakizawa/")
                }
              >
                <img src={linkedin} className=" object-contain" />
              </button>
              <button
                className="w-24 h-24 rounded-full 
                       bg-white  text-white"
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1bXBT57ljv55Oteawz_aon4W4P-d4pj2p/view?usp=sharing")
                }
              >
                <img src={resume} className="w-[65px] object-contain items-center ml-4" />
              </button>
              <button
                className="w-24 h-24 rounded-full  items-center
                       bg-white  text-black"
                onClick={() => window.open("mailto:ronantakizawa@gmail.com")}
              >
                <img
                  src={gmail}
                  className="w-[65px] object-contain items-center ml-4"
                />
              </button>
              <button
                className="w-24 h-24 rounded-full 
                       bg-black   text-white"
                onClick={() => window.open("https://github.com/ronantakizawa")}
              >
                <img src={github} className="w-32" />
              </button>
              <button
                className="w-24 h-24 rounded-full 
                       bg-black  text-white"
                onClick={() =>
                  window.open("https://www.tiktok.com/@ronantech")
                }
              >
                <img src={tiktok} className=" object-contain " />
              </button>
            </motion.div>
          </div>

          <div>
            <img
              src={profilepic}
              alt="profilepic"
              className="w-[350px] space-x-2 items-center h-[420px]"
            />
          </div>
        </div>
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      />
    </>
  );
}

export default SectionWrapper(About, "about");
