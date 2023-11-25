import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section id='home' className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        <motion.h3 
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.6}}
        className="text-lg font-accentFont font-light tracking-wide text-textGreen"
        >
            Hi, my name is
            </motion.h3>
        <motion.h1
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className="text-4xl text-textTitle lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
            Tom Ferrari.{" "} <span className="text-textDark mt-2 lgl:mt-4">
                I build things for the web.
                </span>
            </motion.h1>
            <motion.p 
            initial={{y:10, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5, delay:0.8}}
            className="text-base md:max-w-[650px] text-textDark font-medium"
            >
            I am a front-end developer who is passionate about leveraging the power
            of technology to create impactful and user-centric experiences.
            My current focus lies in building cutting-edge, accessible solutions that
            prioritize the needs of users, ensuring that every product I develop is
            intuitive, inclusive, and enhances the human experience. {""}
            <a href="#">
                <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                    Learn More
                    <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </span>
                </a>
            </motion.p>
            <motion.button 
            initial={{y:10, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5, delay:0.9}}
            className="w-56 h-14 text-sm font-accentFont font-light border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
                Check out my Project!
                </motion.button>
        </section>
  )
}

export default Banner