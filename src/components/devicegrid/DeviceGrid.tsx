"use client";

import React from "react";
import DemoItems from "../demoitems/DemoItems";

const DeviceGrid = () => {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center w-screen mt-0 gap-10">
         <DemoItems
        title="Rosedale HUB"
        websitePic="https://portfolio-bucket-thalescardoso.s3.us-east-1.amazonaws.com/rosedalehub_main.png"
        delayNum={0.1}
        id="4"
        techs={["TYPESCRIPT", "REACT", "Tailwind", "HUBSPOT API"]}
      />
      <DemoItems
        title="WarmUp Guru"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/warmupguru_main.png"
        delayNum={0.2}
        id="3"
        techs={["TYPESCRIPT", "REACT", "Next.JS", "Tailwind", "S3"]}
      />
      <DemoItems
        title="ThalesBoy Color"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/mockup+-+THALESBOY.jpg"
        delayNum={0.3}
        id="0"
        techs={["TYPESCRIPT", "CSS"]}
      />
      <DemoItems
        title="Batour"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/mockup+-BATOUR.jpg"
        delayNum={0.4}
        id="1"
        techs={["TYPESCRIPT", "REACT", "Next.JS", "Stripe", "SASS", "Firebase"]}
      />
      <DemoItems
        title="Burger Burger"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/mockup+-+BB.jpg"
        delayNum={0.5}
        id="2"
        techs={["TYPESCRIPT", "REACT", "Next.JS", "Tailwind", "S3"]}
      />
    </div>
  );
};

export default DeviceGrid;
