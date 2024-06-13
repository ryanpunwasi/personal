"use client";
import { useState } from "react";
import { useClipboard } from "../hooks/useClipboard.hook";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { RiFilePaperLine } from "react-icons/ri";
import { BsMouseFill } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const IntroSection = () => {
  const [email, setEmail] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const clipboard = useClipboard();

  const closeEmail = () => {
    setEmail(false);
    setHasCopied(false);
  };

  const openEmail = () => {
    setEmail(true);
  };

  return (
    <>
      <section className="lg:flex lg:flex-row hidden justify-center items-center h-full w-full">
        <div className="lg:w-1/3 w-full bg-gray-50 h-full flex flex-col items-center justify-center gap-2 shadow-sm border-r-2 border-gray-100">
          <div
            className="w-32 h-32
         rounded-full relative"
          >
            <Image
              src="/avatar.jpg"
              alt="avatar"
              fill
              className="rounded-full shadow-md select-none"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            ></Image>
          </div>
          <p className="text-gray-700">Software Developer</p>
          <div className="flex items-center justify-center gap-1">
            <MdLocationPin />
            <p className="text-gray-600 text-sm">Toronto, ON</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-2">
              <PiCertificate />
              <p className="text-sm text-gray-600">
                AWS Certified Developer - Associate
              </p>
            </div>

            <p className="text-xs text-gray-500">2024</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-2">
              <PiCertificate />
              <p className="text-sm text-gray-600">
                Diploma of Web Development
              </p>
            </div>

            <p className="text-xs text-gray-500">2022</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-2">
              <PiCertificate />
              <p className="text-sm text-gray-600">
                Bachelor of Science in Nursing
              </p>
            </div>
            <p className="text-xs text-gray-500">2017</p>
          </div>

          <div className="flex gap-1 items-center justify-center">
            <a
              title="Resume"
              href="https://resume.creddle.io/resume/cz0ik4eo5qh"
              target="_blank"
              rel="noreferrer"
              className="hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200 text-gray-600"
            >
              <RiFilePaperLine style={{ color: "#2e8686" }} />
            </a>
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/ryan-punwasi/"
              target="_blank"
              rel="noreferrer"
              className="text-[#0077b5] hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              title="Github"
              className="text-black hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
              href="https://github.com/ryanpunwasi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              title="Email"
              onClick={() => (email ? closeEmail() : openEmail())}
              href="mailto:ryan.punwasi@gmail.com"
              className="text-gray-600 hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
            >
              <MdOutlineMail style={{ color: "#c5221f" }} />
            </a>
          </div>
          <div className={`${email ? "visible" : "invisible"}`}>
            <span
              className={`flex items-center justify-center gap-2 bg-white text-gray-500 px-4 py-3 text-sm rounded-xl shadow-md border border-gray-100`}
            >
              ryan.punwasi@gmail.com
              <button
                className="p-2 hover:bg-gray-100 rounded-xl"
                onClick={() => {
                  if (clipboard) clipboard.writeText("ryan.punwasi@gmail.com");
                  setHasCopied(true);
                }}
              >
                <IoCopyOutline size={15} />
              </button>
              <button onClick={() => closeEmail()} className="">
                <IoIosClose size={20} />
              </button>
            </span>
            <p
              className={`text-emerald-600 text-xs text-right mr-2 mt-1 font-medium filter saturate-200 ${
                hasCopied ? "visible" : "invisible"
              }`}
            >
              Email copied!
            </p>
          </div>
        </div>
        <ScrollAnimation />
      </section>

      <section className="lg:hidden flex flex-col w-full min-h-full">
        <div className="lg:w-2/3 w-full text-gray-500 text-center overflow-y-scroll min-h-full h-full snap-y snap-mandatory">
          <div className="lg:w-1/3 w-full bg-gray-50 h-full flex flex-col items-center justify-center gap-2 shadow-sm border-r-2 border-gray-100 snap-center">
            <div
              className="w-32 h-32
         rounded-full relative"
            >
              <Image
                src="/avatar.jpg"
                alt="avatar"
                fill
                className="rounded-full shadow-md select-none"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              ></Image>
            </div>
            <p className="text-gray-700">Software Developer</p>
            <div className="flex items-center justify-center gap-1">
              <MdLocationPin />
              <p className="text-gray-600 text-sm">Toronto, ON</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-2">
                <PiCertificate />
                <p className="text-sm text-gray-600">
                  AWS Certified Developer - Associate
                </p>
              </div>

              <p className="text-xs text-gray-500">2024</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-2">
                <PiCertificate />
                <p className="text-sm text-gray-600">
                  Diploma of Web Development
                </p>
              </div>

              <p className="text-xs text-gray-500">2022</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-2">
                <PiCertificate />
                <p className="text-sm text-gray-600">
                  Bachelor of Science in Nursing
                </p>
              </div>
              <p className="text-xs text-gray-500">2017</p>
            </div>

            <div className="flex gap-1 items-center justify-center">
              <a
                title="Resume"
                href="https://resume.creddle.io/resume/cz0ik4eo5qh"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200 text-gray-600"
              >
                <RiFilePaperLine style={{ color: "#2e8686" }} />
              </a>
              <a
                title="Linkedin"
                href="https://www.linkedin.com/in/ryan-punwasi/"
                target="_blank"
                rel="noreferrer"
                className="text-[#0077b5] hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
              >
                <FaLinkedinIn />
              </a>
              <a
                title="Github"
                className="text-black hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
                href="https://github.com/ryanpunwasi"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                title="Email"
                onClick={() => (email ? closeEmail() : openEmail())}
                href="mailto:ryan.punwasi@gmail.com"
                className="text-gray-600 hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
              >
                <MdOutlineMail style={{ color: "#c5221f" }} />
              </a>
            </div>
            <div className={`${email ? "visible" : "invisible"}`}>
              <span
                className={`flex items-center justify-center gap-2 bg-white text-gray-500 px-4 py-3 text-sm rounded-xl shadow-md border border-gray-100`}
              >
                ryan.punwasi@gmail.com
                <button
                  className="p-2 hover:bg-gray-100 rounded-xl"
                  onClick={() => {
                    if (clipboard)
                      clipboard.writeText("ryan.punwasi@gmail.com");
                    setHasCopied(true);
                  }}
                >
                  <IoCopyOutline size={15} />
                </button>
                <button onClick={() => closeEmail()} className="">
                  <IoIosClose size={20} />
                </button>
              </span>
              <p
                className={`text-emerald-600 text-xs text-right mr-2 mt-1 font-medium filter saturate-200 ${
                  hasCopied ? "visible" : "invisible"
                }`}
              >
                Email copied!
              </p>
            </div>
          </div>
          <div className="min-h-full flex flex-col justify-center items-center relative lg:px-40 px-5 md:px-10 gap-2 snap-center">
            <p className="text-justify">
              Hello! My name is Ryan and I&apos;m a software developer with
              experience creating web applications. I&apos;m a passionate and
              obsessive builder with a strong work ethic and a deep love of
              learning. <br />
              <br />
              When I&apos;m not coding, I&apos;m usually reading, catching the
              game or watching a movie.
            </p>
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
      </section>
    </>
  );
};

export default IntroSection;
