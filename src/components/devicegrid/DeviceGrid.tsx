"use client";

import React from "react";
import DemoItems from "../demoitems/DemoItems";


const DeviceGrid = () => {

  return (
    <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center w-screen mt-0 gap-10">
      <DemoItems
        title="ThalesBoy Color"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/mockup+-+THALESBOY.jpg"
        delayNum={0.1}
        id="0"
        techs={["TYPESCRIPT", "CSS"]}
      />
      <DemoItems
        title="Batour"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/mockup+-BATOUR.jpg"
        delayNum={0.2}
        id="1"
        techs={["TYPESCRIPT", "REACT", "Next.JS", "Stripe", "SASS", "Firebase"]}
      />
      <DemoItems
        title="Burger Burger"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/mockup+-+BB.jpg"
        delayNum={0.3}
        id="2"
        techs={["TYPESCRIPT", "REACT", "Next.JS", "S3"]}
      />
      <DemoItems
        title="My Music Portfolio"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/mockup+-+MUSIC.jpg"
        delayNum={0.4}
        id="3"
        techs={["TYPESCRIPT", "REACT", "Next.JS", "S3"]}
      />
    </div>
  );
};

export default DeviceGrid;
