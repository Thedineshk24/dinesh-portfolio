import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { FaReact, FaEthereum } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiTailwindcss,SiRedux } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <FaReact className="text-4xl"/>
        <TbBrandNextjs className="text-4xl"/>
        <SiJavascript className="text-4xl" />
        <SiTypescript className="text-4xl" />
        <SiRedux className="text-4xl" />
        <AiFillHtml5 className="text-4xl" />
        <DiCss3 className="text-4xl" />
        <SiTailwindcss className="text-4xl" />
        <BsFillBootstrapFill className="text-4xl" />
        <p className="text-4xl">MUI</p>
      </div>
    </motion.div>
  );
};

export default Skills;
