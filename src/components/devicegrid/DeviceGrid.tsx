"use client";

import React from "react";
import DemoItems from "../demoitems/DemoItems";


const DeviceGrid = () => {

  return (
    <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center w-screen mt-0 gap-10">
      <DemoItems
        title="ThalesBoy Color"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/project_thalesboy.png"
        delayNum={0.1}
        id="0"
      />
      <DemoItems
        title="Batour"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/project_batour.png"
        delayNum={0.2}
        id="1"
      />
      <DemoItems
        title="Burger Burger"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/project_thalescardris.png"
        delayNum={0.3}
        id="2"
      />
      <DemoItems
        title="My Music Portfolio"
        websitePic="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/project_thalescardris.png"
        delayNum={0.4}
        id="3"
      />
    </div>
  );
};

export default DeviceGrid;
