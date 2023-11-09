'use client';
import { motion, useAnimation, useScroll, useViewportScroll } from "framer-motion";
import EmailIcon from "./email-icon";
import GithubIcon from "./github-icon";
import InstaIcon from "./insta-icon";
import "./style.css"

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col items-center border-y-2 shadow md:flex-row md:max-w-xl border-zinc-700 bg-black">
          <div className=" flex flex-col justify-between p-4 leading-normal">
            Experienced with low-level code and server programming
            <br></br>
          </div>
        </div>
      </div >

      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col items-center shadow md:flex-row md:max-w-xl bg-black">
          <EmailIcon />
          <GithubIcon />
          <InstaIcon />
        </div>
      </div >
    </main>
  )
}
