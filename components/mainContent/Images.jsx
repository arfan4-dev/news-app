/* eslint-disable @next/next/no-img-element */
import React from "react";

const Images = ({ data }) => {
  return (
    <div >
      {data.map((val, index) => (
        <div key={index} className="mx-auto w-[90%] h-[80%]  mb-3 sm:rounded-[20px] md:w-[600px] md:h-[80%] lg:px-[-5px]  lg:w-[400px] lg:h-[400px] xl:w-[475px] xl:h-[500px] 2xl:w-[560px] 2xl:h-[582px] 3xl:w-[572px] 3xl:h-[572px]">
         <img
                  className="h-full w-full rounded-[20px]   sm:h-full sm:w-full sm:object-fill sm:rounded-[20px]"
                  src={`https://www.aljazeera.com${val.image}`}
                  alt=""
                />
        </div>
      ))}{" "}
    </div>
  );
};

export default Images;
