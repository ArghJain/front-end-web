import React, { useContext, useEffect } from "react";
import background from "./background.png";
import EventCreationCard from "./EventCreationCard";

const EventCreationPage = () => {


  return (
    <section
      className="bg-stone-900  bg-center bg-cover  min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="w-screen h-full flex flex-col lg:pt-32 justify-center lg:items-center backdrop-blur-2xl ">
        <div className="flex justify-center items-center  ">
          <EventCreationCard />
        </div>
      </div>
    </section>
  );
};

export default EventCreationPage;