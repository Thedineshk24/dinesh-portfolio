import * as React from "react";
import { AiFillFile } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
export interface IPortFolioProps {}

export function Experience(props: IPortFolioProps) {
  return (
    <>
      <div className="text-gray-500 mt-56 flex justify-center">
        <p className="text-4xl">Experiance</p>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{
          opacity: 1,
        }}
        id="experience"
        className="z-20 flex justify-center flex-wrap gap-4 mt-2 p-8"
      >
        <div className="w-96 bg-slate-700 rounded p-4 2xl:w-3/12 lg:w-3/12">
          <div className="flex justify-between">
            <p className="text-white text-4xl">
              <AiFillFile />
            </p>
            <p className="text-white text-4xl">
              <a href="https://www.docthub.com/" target="_blank">
                <BiLinkExternal />
              </a>
            </p>
          </div>
          <div className="pt-4">
            <p className="text-2xl text-white pb-1">Docthub</p>
            <p className="text-gray-400 block">
              Docthub is a digital platform specifically made for people who are
              a part of the healthcare fraternity or are willing to become one.
              I've majorly worked on console webapp integrated rest apis.
              {""}
            </p>
          </div>
          <div className="flex justify-around text-gray-400 text-sm pt-2">
            <p>React</p>
            <p>Antd</p>
            <p>Redux-saga</p>
          </div>
        </div>
        <div className="w-96 bg-slate-700 rounded p-4 2xl:w-3/12 lg:w-3/12">
          <div className="flex justify-between">
            <p className="text-white text-4xl">
              <AiFillFile />
            </p>
            <p className="text-white text-4xl">
              <a href="https://www.oneauth.one/" target="_blank">
                <BiLinkExternal />
              </a>
            </p>
          </div>
          <div className="pt-4">
            <p className="text-2xl text-white pb-1">OneAuth</p>
            <p className="text-gray-400">
              OneAuth is a simple to use wallet you use for managing your online
              assets such as NFT or tokens. added git pre & post commit hooks.
              communicated with clients and delivered features on time.
            </p>
          </div>
          <div className="flex justify-around text-gray-400 text-sm pt-2">
            <p>React</p>
            <p>MUI</p>
            <p>Typescript</p>
          </div>
        </div>
        <div className="w-96 bg-slate-700 rounded p-4 2xl:w-3/12 lg:w-3/12">
          <div className="flex justify-between">
            <p className="text-white text-4xl">
              <AiFillFile />
            </p>
            <a
              className="text-white text-4xl"
              href="https://www.docthub.com/"
              target="_blank"
            >
              <BiLinkExternal />
            </a>
          </div>
          <div className="pt-4">
            <p className="text-2xl text-white pb-1">Docthub</p>
            <p className="text-gray-400">
              Docthub is a digital platform specifically made for people who are
              a part of the healthcare fraternity or are willing to become one.
              I've majorly worked on enterprise, jobs & account web apps &
              integrated rest apis.
            </p>
          </div>
          <div className="flex justify-around text-gray-400 text-sm pt-2">
            <p>React</p>
            <p>MUI</p>
            <p>RTK-Query</p>
            <p>Next.js</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
