import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Dinesh Katariya",
      "Guy-who-loves-tea.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      <div className="rounded-full p-[1px] border border-dotted border-[#E03B8B]">
        <img
          className="rounded-full relative h-32 w-32 mx-auto object-cover"
          loading="lazy"
          src="https://pbs.twimg.com/profile_images/1666403540829638656/kNit4nRR_400x400.jpg"
          alt={"my profile"}
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] pb-2">
          Software Engineer
        </h2>
        <h1 className="flex justify-center text-[#923c01] text-3xl lg:text-5xl font-semibold scroll-px-10">
          <span>
            {text}
            <Cursor cursorColor="#E07C24" />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
