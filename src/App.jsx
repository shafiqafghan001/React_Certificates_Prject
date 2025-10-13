import React from "react";
import styles from "./style";

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SeeMore from "./Components/SeeMore";
import Compaines from "./Components/Compaines";
import Meet from "./Components/Meet";
import Steps from "./Components/Steps";
import Reaserch from "./Components/Reaserch";
import DeveloperCard from "./Components/DeveloperCard";
import Benefits from "./Components/Benefits";
import Optional from "./Components/Optional";
import Pricing from "./Components/Pricing";
import Level from "./Components/Level";
import Payment from "./Components/Payment";
import Examination from "./Components/Examination";
import ReadNews from "./Components/ReadNews";
import Testimonial from "./Components/Testimonial";
import CastYourVote from "./Components/CastYourVote";
import Footer from "./Components/Footer";
import BottomFooter from "./Components/BottomFooter";
import FAQs from "./Components/FAQs";

export default function App() {
  // Common container style for all sections
  const sectionStyle = {
    width: "90%",
    margin: "0 auto",
    backgroundColor: "#00040f",
  };

  return (
    <div style={{ backgroundColor: "#00040f", width: "100%" }}>
      {/* Navbar Section */}
      <div
        className={`${styles.paddingX} ${styles.flexCenter}`}
        style={{ width: "100%" }}
      >
        <div className={`${styles.boxWidth}`} style={sectionStyle}>
          <Navbar />
        </div>
      </div>

      {/* Other sections with sectionStyle */}
      <div style={sectionStyle}>
        <Hero />
      </div>

      {/* SeeMore without sectionStyle */}
      <SeeMore />

      <div style={sectionStyle}>
        <Compaines />
      </div>

      <div style={sectionStyle}>
        <Benefits />
      </div>

      <div style={sectionStyle}>
        <Meet />
      </div>

      <div style={sectionStyle}>
        <Steps />
      </div>

      <div style={sectionStyle}>
        <Reaserch />
      </div>

      <div style={sectionStyle}>
        <DeveloperCard />
      </div>
      <div style={sectionStyle}>
        <Optional />
      </div>
      <div style={sectionStyle}>
        <Pricing />
      </div>
      <div style={sectionStyle}>
        <Level />
      </div>
      <div style={sectionStyle}>
        <Payment />
      </div>
      <div style={sectionStyle}>
        <Examination />
      </div>
      <div style={sectionStyle}>
        <ReadNews />
      </div>
      <div style={sectionStyle}>
        <Testimonial />
      </div>
      <div style={sectionStyle}>
        <FAQs />
      </div>
      <div>
        <CastYourVote />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <BottomFooter />
      </div>
    </div>
  );
}

// #FF765D
