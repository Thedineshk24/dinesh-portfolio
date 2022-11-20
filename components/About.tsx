import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        className="mb-4 mt-40 md:mb-0 flex-shrink-0 w-56 h-56 rouned-full object-cover md:rounded-lg md:mt-56 md:64 md:h-96 xl:w-[500px] xl:h-[600px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="https://avatars.githubusercontent.com/u/33573799?s=400&u=61447a86f6ea847cb02a277952559956d4a88ea1&v=4"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7Ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-lg">
          My name is Dinesh Katariya I'm a Front End Engineer based in Ahemdabad
          ☀️. I describe myself as a passionate frontend developer who loves
          coding, tea, and the web platform ❤️. 
        </p>
        <p className="text-base">
        aside from my job I'm interested
          in web3 specially in frontend part of items I love working with latest
          tech stack like react, next.js, tailwind, typescript, & in WEB3
          ether.js.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
