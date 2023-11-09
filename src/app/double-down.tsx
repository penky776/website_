import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function DoubleDown() {
    const [showSVG, setShowSVG] = useState(true);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (showSVG) {
                setShowSVG(true);
                controls.start({ opacity: 0 });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls, showSVG]);

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            animate={controls}
            initial={{ opacity: 1 }}
            style={{ opacity: showSVG ? 1 : 0 }}
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </motion.svg>
    );
}

export default DoubleDown;
