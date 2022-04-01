import { CircleResume } from ".";
import classes from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={`${classes.hero__main} container`}>
        <div className={classes.hero__head}>
          <p>
            I <span className="outline">Build</span> Stuffs <br /> For the{" "}
            <span className="outline">Web</span>
          </p>
          <CircleResume />
        </div>
        <div className={classes.hero__footer}>
          <p className={classes.hero__text}>
            {/* Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services. */}
            Experienced Frontend & React Developer based in Bangladesh. I love
            to develop clean and aesthetic Web Applications. I enjoy creating
            things that live on the internet.
          </p>
        </div>
        {/* circle type */}
      </div>
    </section>
  );
};

export default Hero;
