"use client";
import { useRef, useEffect } from "react";
import { BsMouseFill } from "react-icons/bs";

const ScrollAnimation = () => {
  const boxRef = useRef(null);
  const mouseIconRef = useRef(null);

  return (
    <div
      ref={boxRef}
      className="lg:w-2/3 md:w-1/2 text-gray-500 text-center overflow-y-scroll min-h-full h-full"
    >
      <div className="min-h-full flex flex-col justify-center items-center relative px-40 gap-2">
        <p className="text-justify">
          Hello! My name is Ryan and I&apos;m a software developer with
          experience creating web applications. I'm a passionate and obsessive
          builder with a strong work ethic and a love of learning.
        </p>
        <p className="text-justify">
          When I'm not coding, I&apos;m usually catching the game or watching a
          movie. Currently, I&apos;m studying to get my AWS (DVA-C02)
          certification.
        </p>
        <span className="absolute left-1/2 bottom-16 flex flex-col justify-center items-center gap-2">
          <span ref={mouseIconRef} className="animate-bounce" id="mouseIcon">
            <BsMouseFill size={30} />
          </span>

          <span className="text-sm font-medium">Scroll</span>
        </span>
      </div>
      <div className="min-h-full flex justify-center items-center">
        <p className="text-center">
          Hello! My name is Ryan and I&apos;m a software developer.
        </p>
      </div>
      <div className="min-h-full flex justify-center items-center border border-black">
        <p className="text-center">
          Hello! My name is Ryan and I&apos;m a software developer.
        </p>
      </div>
      <div className="min-h-full flex justify-center items-center">
        <p className="text-center">
          Hello! My name is Ryan and I&apos;m a software developer.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;
