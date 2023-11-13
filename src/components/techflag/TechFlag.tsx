
import React from "react";

interface TechFlag {
    name: string
}

const TechFlag = ({name,} : TechFlag) => {

  return (
    <div className={`flex flex-wrap flex-col py-1 px-2 m-2 border-2 border-zinc-600 dark:border-zinc-200 rounded-lg`}>

        <span className="text-sm uppercase">{name}</span>
        
    </div>
  );
};

export default TechFlag;
