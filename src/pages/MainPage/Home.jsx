import React from "react";
import "../../App.css";
import styles from "./Home.module.css";
import LocationAndDates from "../../components/Homepage/LocationAndDates";
import Share from "../../components/SVGcomponent/Share";
import { adImg, mobileHeroImage } from "../../assets";
import { TipJar } from "../../components";
import Button from "../../components/general/Button";
import Hero from "../../components/Homepage/Hero";
import SelectGenre from "../../components/SVGcomponent/SelectGenre";
import GenreScroll from "../../components/general/GenreScroll";
import Advert from "@/components/general/Advert";

const Home = () => {
  return (
    <section className={`section pt-0 ${styles.homeSection} transition`}>
      <div className={`${styles.ellipse1}`}></div>
      <div className={`${styles.ellipse2}`}></div>
      <div className={`${styles.ellipse3}`}></div>
      {/**************************** mobile  ****************************/}
      <div className={`sectionContainer ${styles.homeContainerMobile}`}>
        <div className={`${styles.textContent}`}>
          <h1>
            Find Me <span>Live Music</span>
          </h1>
          <p className={`${styles.textContentText}`}>
            HELPING UNITE BANDS AND FANS
          </p>
        </div>

        <LocationAndDates />

        {/******************* GENERE *******************/}

        <div className={`${styles.genreContainer}`}>
          {/******************* GENERE BUTTON *******************/}
          <div className="flex justify-center">
            <button className={`${styles.genrebtn}`}>
              <SelectGenre />
              Select Genre
            </button>
          </div>
          {/******************* GENERE ICONS *******************/}
          <GenreScroll />
        </div>

        <div>
          <Advert />
        </div>

        {/* <div className={`${styles.placeOrder}`}></div> */}

        <div className={`${styles.findContainer}`}>
          <p className={`${styles.findText}`}>Find your best live music.</p>
          <button className={`${styles.findButton}`}>
            <Share />
            Share to family & friends
          </button>
        </div>

        <div className="flex justify-center">
          <img src={mobileHeroImage} />
        </div>

        {/* <img src={mobileHeroImage} className="flex justify-center" /> */}

        <TipJar />

        <div className={`${styles.subscribeContainer}`}>
          <div className={`${styles.subscribeInput}`}>
            <input
              placeholder="Enter Email here"
              className={`bg-transparent w-full py-2 px-3 outline-none`}
            />
            <Button
              width={`w-[101px]`}
              colored
              text={`Subscribe`}
              radius={`rounded-md`}
            />
          </div>
        </div>
      </div>

      {/**************************** Desktop  ****************************/}
      <div className={`sectionContainer ${styles.homeContainerDesktop}`}>
        <Hero />

        <LocationAndDates />

        {/******************* GENERE *******************/}

        <div className={`${styles.genreContainer}`}>
          {/******************* GENERE BUTTON *******************/}
          <div className="flex justify-center">
            <button className={`${styles.genrebtn}`}>
              <SelectGenre />
              Select Genre
            </button>
          </div>
          {/******************* GENERE ICONS *******************/}
          <GenreScroll />
        </div>

        <div>
          <Advert />
        </div>

        {/* <div className={`${styles.placeOrder}`}></div> */}

        {/*  */}
        <div className={`${styles.desktopFindContainer}`}>
          <p className={`${styles.findText}`}>Find your best live music.</p>

          <div className={`${styles.buttonAndSubscribe}`}>
            <button className={`${styles.findButton}`}>
              <Share />
              Share to family & friends
            </button>

            <div className={`${styles.subscribeContainer}`}>
              <div className={`${styles.subscribeInput}`}>
                <input
                  placeholder="Enter Email here"
                  className={`bg-transparent w-full py-2 px-3 outline-none`}
                />
                <Button
                  width={`w-[101px]`}
                  colored
                  text={`Subscribe`}
                  radius={`rounded-md`}
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <TipJar />
      </div>
    </section>
  );
};

export default Home;
