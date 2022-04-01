import React from "react";
import { Contact, FeaturedProjects, Hero, ProjectList } from "../components";

const FrontPage = () => {
  return (
    <section className="relative front__page">
      <Hero />
      {/* <Marquee firstText={"Featured"} secondText={"Projects"} /> */}
      <FeaturedProjects />
      <ProjectList />
      <Contact />
    </section>
  );
};

export default FrontPage;
