import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[180px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4`}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Ronan<span className="text-[#60A5FA]"> Takizawa </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Developer X Content Creator <br className="sm:block hidden" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
