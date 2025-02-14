import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import ScrollDownIcon from "./scroll-down-icon";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative min-h-screen flex flex-col justify-center items-center">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md;-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center my-20 relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Powering the Web with Next.js & Full Stack Expertise
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Priyansh, a Full Stack Web Developer based in India.
          </p>

          <a href="https://drive.google.com/file/d/1_b0yWiBRlZEkaoziVLWFvwXVTFt45z78/view?usp=share_link?usp=sharing" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="View Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/* Scroll Down Icon - Placed at the bottom of the section */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <ScrollDownIcon/>
      </div>
    </div>
  );
};

export default Hero;
