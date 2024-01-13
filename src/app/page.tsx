'use client';
import { motion, useScroll, useSpring } from "framer-motion";
import EmailIcon from "./email-icon";
import GithubIcon from "./github-icon";
import InstaIcon from "./insta-icon";
import "./style.css"
import DoubleDown from "./double-down";
import '../styles/fonts.css'

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="scroll">
        <DoubleDown />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="flex flex-col border-y-2 shadow border-zinc-700 justify-between p-4 leading-normal" style={{ fontFamily: 'Baskerville1785', fontSize: '25px' }}>
          <center>enthusiastic about the art of the mad <br />and the non-professional<br />
          </center>
        </div>
        <div className="pb-4"></div>
        <div className="flex flex-col items-center bg-black md:flex-row md:max-w-xl">
          <EmailIcon />
          <GithubIcon />
          <InstaIcon />
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col justify-between p-4 leading-normal" style={{ fontFamily: 'OldLondon', fontSize: '30px' }}>
          <p>That the play is the tragedy “Man,” <br />
            <span className="tab"></span> And its hero the Conqueror Worm.
            <br />
            <span style={{ fontFamily: 'Baskerville1785', fontSize: '20px' }}>  - Edgar Allan Poe, The Conquerer Worm</span></p>
        </div>
      </div >

    </main >
  )
}