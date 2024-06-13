"use client";
import { useRef, useState } from "react";
import { BsMouseFill } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ScrollAnimation = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const mouseIconRef = useRef<HTMLElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const calculateMouseIconOpacity = (scrollTop: number) => {
    if (scrollTop >= 100) return 0;
    const rawOpacity = scrollTop / 100;
    return 1 - Math.round(rawOpacity * 1000) / 1000;
  };

  return (
    <div
      ref={boxRef}
      className="lg:w-2/3 w-full text-gray-500 text-center overflow-y-scroll min-h-full h-full snap-y snap-mandatory"
      onScroll={() => setScrollTop(boxRef.current?.scrollTop || 0)}
    >
      <div className="min-h-full flex flex-col justify-center items-center relative lg:px-40 px-5 md:px-10 gap-2 snap-center">
        <p className="text-justify">
          Hello! My name is Ryan and I&apos;m a software developer with
          experience creating web applications. I&apos;m a passionate and
          obsessive builder with a strong work ethic and a deep love of
          learning. <br />
          <br />
          When I&apos;m not coding, I&apos;m usually reading, catching the game
          or watching a movie.
        </p>
        <span
          className="absolute left-1/2 bottom-16 flex flex-col justify-center items-center gap-2 ease-in-out select-none"
          style={{ opacity: calculateMouseIconOpacity(scrollTop) }}
        >
          <span ref={mouseIconRef} className="animate-bounce" id="mouseIcon">
            <BsMouseFill size={30} />
          </span>

          <span className="text-sm font-medium">Scroll</span>
        </span>
      </div>
      <div className="relative min-h-full border flex flex-col justify-center items-center snap-center">
        <h2 className="text-center text-xl absolute top-20 left-20">
          Projects
        </h2>
        <ul className="flex flex-col w-full max-w-[600px] lg:min-w-[600px] items-center gap-3">
          <li className="bg-gray-50 rounded-xl w-full shadow-sm border border-gray-200 flex justify-center items-center py-7 relative">
            <p className="text-xl absolute top-50 left-10">🎬</p>
            <div>
              <p className="text-sm text-gray-600">Memo35</p>
              <p className="text-xs text-gray-400">
                Note-taking SaaS product for film students
              </p>
            </div>

            <div className="flex absolute bottom-2 right-4">
              <a
                href="https://memo35.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-100"
              >
                <FaGlobeAmericas />
              </a>
            </div>
          </li>
          <li className="bg-gray-50 rounded-xl w-full shadow-sm border border-gray-200 flex justify-center items-center py-7 relative">
            <p className="text-xl absolute top-50 left-10">🧪</p>
            <div>
              <p className="text-sm text-gray-600">Valentnost</p>
              <p className="text-xs text-gray-400">
                Web app for memorizing periodic element names and symbols
              </p>
            </div>

            <div className="flex gap-0.5 items-center absolute bottom-2 right-4">
              <a
                href="https://github.com/ryanpunwasi/valentnost"
                target="_blank"
                className="text-sm hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-100"
              >
                <FaGithub />
              </a>
              <a
                href="https://valentnost.app"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-100"
              >
                <FaGlobeAmericas />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollAnimation;
