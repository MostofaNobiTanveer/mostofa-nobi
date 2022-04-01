import React from "react";
import classes from "../styles/FeaturedProjects.module.css";
// import zen from "../assets/images/zen.png";
// import flashxpress from "../assets/images/flash.png";
// import wellbe from "../assets/images/wellbe.png";
// import coursity from "../assets/images/coursity.png";

const featuredProjects = [
  {
    id: 1,
    name: "zen drones",
    excerpt: "Drone selling web app.",
    featureImage: "https://i.ibb.co/DQjDsNb/zen.png",
    color: "#84ADEF",
    marquee: ["Full Stack Web App", "React", "Node", "MongoDB", "Dashboard"],
    live_link: "https://zen-drones.web.app/",
    github_link: "https://github.com/MostofaNobiTanveer/Zen-Drones-Client",
  },
  {
    id: 2,
    name: "flash xpress",
    excerpt: "Delivery service web app",
    featureImage: "https://i.ibb.co/zfw5gzS/flash.png",
    color: "#22246B",
    marquee: ["Full Stack Web App", "React", "Node", "MongoDB", "Firebase"],
    live_link: "https://flashxpress-53e86.web.app/",
    github_link: "https://github.com/MostofaNobiTanveer/FlashXpress-Client",
  },
  {
    id: 3,
    name: "Wellbe Care",
    excerpt: "Online platform of Doctors",
    color: "#111827",
    marquee: ["Frontend Web App", "React", "Tailwind", "Firebase"],
    featureImage: "https://i.ibb.co/41LdmZy/wellbe.png",
    live_link: "https://wellbe-87ec0.web.app/",
    github_link: "https://github.com/MostofaNobiTanveer/Wellbe-Healthcare",
  },
  {
    id: 4,
    name: "Coursity",
    excerpt: "course collections",
    color: "#7C7DF3",
    marquee: ["Frontend Web App", "React", "Tailwind", "UI"],
    featureImage: "https://i.ibb.co/x7hNQ57/coursity.png",
    live_link: "https://coursity-react-tailwind.netlify.app/",
    github_link:
      "https://github.com/MostofaNobiTanveer/coursity-react-tailwind",
  },
];

const FeaturedProjects = () => {
  return (
    <section className={classes.featured__section}>
      <div className="container">
        <div className={classes.featured__title}>
          <p>
            <span>featured </span>
            <br />
            <span className="outline">projects</span>
          </p>
        </div>
        <div className={classes.featured__items}>
          {featuredProjects.map(
            ({
              id,
              name,
              excerpt,
              featureImage,
              color,
              marquee,
              live_link,
              github_link,
            }) => {
              return (
                <article onClick={()=>window.open(live_link, "_blank")} key={id} className={classes.featured__item}>
                  <div className={classes.featured__image__cover}>
                    <img src={featureImage} alt="" />
                  </div>
                  <div className={classes.featured__shadow}>
                    <div
                      className={classes.featured__bg}
                      style={{ "--color-marquee-shadow": color }}
                    ></div>
                  </div>
                  <div className={classes.featured__info}>
                    <strong>{name}</strong>
                    <span>{excerpt}</span>
                  </div>
                  <div className={classes.featured__marquee}>
                    <div className={classes.featured__marquee__content}>
                      <div className={classes.featured__marquee__text}>
                        {marquee.map((m, i) => {
                          return (
                            <span key={i} style={{ "--color-marquee-shadow": color }} className={classes.marquee__outline}>
                              {m}&nbsp;-&nbsp;
                            </span>
                          );
                        })}
                      </div>
                      <div className={classes.featured__marquee__text}>
                        {marquee.map((m, i) => {
                          return (
                            <span key={i} style={{ "--color-marquee-shadow": color }} className={classes.marquee__outline}>
                              {m}&nbsp;-&nbsp;
                            </span>
                          );
                        })}
                      </div>
                      <div className={classes.featured__marquee__text}>
                        {marquee.map((m, i) => {
                          return (
                            <span
                            key={i}
                              style={{ "--color-marquee-shadow": color }}
                              className={classes.marquee__outline}
                            >
                              {m}&nbsp;-&nbsp;
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
      {/* item */}
    </section>
  );
};

export default FeaturedProjects;
