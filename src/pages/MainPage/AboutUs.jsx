import React from "react";
import "../../App.css";
import styles from "./AboutUs.module.css";
import { TipJar } from "../../components";
import AboutComponent from "../../components/Aboutpage.jsx/AboutComponent";
import { happyPeople, mission } from "../../assets";
import { about } from "../../data/data";
import ExploreShowBtn from "../../components/general/ExploreShowBtn";
import PageHeader from "../../components/general/PageHeader";
import About from "../../components/Aboutpage.jsx/About";

const AboutUs = () => {
  return (
    <section className={`section py-0 px-0 transition`}>
      <PageHeader page={`About Us`} />
      <div className={`sectionContainer ${styles.aboutContainer}`}>
        {" "}
        <AboutComponent
          Image={happyPeople}
          title={`Our Vision`}
          title2={`Music Makes People Happy`}
          content={`Our vision is to create a vibrant online platform where music enthusiasts can easily discover and connect with live band venues across the country for free. By providing users with up-to-date information on local gigs and performances, we aim to support live music communities and bring people closer to the music they love.`}
          switched
        />
        {/*  */}
        <AboutComponent
          Image={mission}
          title={`Our Mission`}
          content={`We envision a world where live music is accessible to everyone, regardless of location or budget. Our website will empower users to explore and experience live band performances by offering a user-friendly, interactive map that showcases nearby venues and events at no cost.`}
        />
        {/*  */}
        <div className={`${styles.check}`}>
          <About />
        </div>
        <div className="flex justify-center py-[2rem] w-full">
          <ExploreShowBtn />
        </div>
        <TipJar />
      </div>
    </section>
  );
};

export default AboutUs;
