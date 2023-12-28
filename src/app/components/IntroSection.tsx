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
    <section className="flex justify-center items-center h-full w-full">
      <div className="lg:w-1/3 md:w-1/2 bg-gray-50 h-full flex flex-col items-center justify-center gap-2 shadow-sm border-r-2 border-gray-100">
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
            <p className="text-sm text-gray-600">Diploma of Web Development</p>
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
            href="https://www.linkedin.com/in/ryan-punwasi/"
            target="_blank"
            rel="noreferrer"
            className="text-[#0077b5] hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="text-black hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
            href="https://github.com/ryanpunwasi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            onClick={() => (email ? closeEmail() : openEmail())}
            href="mailto:ryan.punwasi@gmail.com"
            className="text-black hover:bg-gray-200 p-2 rounded-xl transition ease-in-out duration-200"
          >
            <MdOutlineMail />
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
      <div className="lg:w-2/3 md:w-1/2 flex justify-center text-gray-600 text-center">
        <p>Hello! My name is Ryan and I'm a software developer.</p>
      </div>
    </section>
  );
};

export default IntroSection;
