import React from "react";
import {Helmet} from "react-helmet";
import Home1 from "./Home1";
import Home2 from "./Home2";
import HomeUpdates from "./HomeUpdates";
import IntroHome from "./IntroHome";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>IGTS NSUT | Home</title>
        <meta property="og:title" content="IGTS-NSUT" />
        <meta
          property="og:description"
          content="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://igtsnsut.org/home" />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1MXM6MCWnpOiK7rjXjPgprH79gEPMAZTa/view?usp=sharing"
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='627' />
        <meta property="og:type" content='website'/>
      </Helmet>
      <div className="">
        <IntroHome />
      </div>
      <div className="">
        <HomeUpdates />
      </div>
      <div className="">
        <Home1 />
      </div>
      <div className="">
        <Home2 />
      </div>
    </div>
  );
};

export default Home;
