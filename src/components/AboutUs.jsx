"use client";
import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full
        h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[670px]"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    ></div>
  );
};

export default Hero;