'use client';
import { motion, useScroll, useSpring } from "framer-motion";

import './styles/fonts.css'
import "./styles/style.css"

import Poe from "./sections/poe";
import Me from "./sections/me";
import DoubleDown from "./icons/double-down";

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

      <section>
        <Me />
      </section>

      <section>
        <Poe />
      </section>
    </main >
  )
}