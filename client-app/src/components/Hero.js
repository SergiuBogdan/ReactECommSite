import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3 text-red"></div>
            <p className="text-white text-xl ">For beer enthusiasts</p>
          </div>

          <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-white float-left">
            YOU AND YOUR BEER
            <br />
          </h1>
          <h2 className="text-[40px] leading-[1.1] font-light mb-4 text-white">
            FOR DESERVE IT
            <br />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
