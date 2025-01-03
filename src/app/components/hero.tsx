import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative text-white">
        {/* Image Placeholder */}
        <div className="h-[60vh] justify-center">
          <Image
            alt="hero picture"
            src="/assets/Image.png"
            className="justify-centre w-full h-700 flex p-20"
            height={100}
            width={100}
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4  px-6">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <p className="text-sm uppercase text-black">First Look</p>
          <h1 className="text-6xl font-Helvetica Neue text-center text-black">
            NIKE AIR MAX PULS
          </h1>
          <p className="text-center text-sm  max-w-xl text-black">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse—designed to push you past your limits and help you go to the
            max.
          </p>
          {/* Buttons */}
          <div className="flex space-x-4 ">
  <button className="bg-black border border-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 focus:outline-none rounded-full">
    Notify Me
  </button>
  <button className="bg-black border border-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 focus:outline-none rounded-full">
    Shop Air Max
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
