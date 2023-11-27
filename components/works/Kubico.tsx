import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { BiRightArrow } from "react-icons/bi";

const Kubico = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl text-textTitle font-titleFont'>
            Web Developer<span className='text-textGreen tracking-wide'>@Kubico</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark font-accentFont'>Feb 2023 - Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Proficient in creating visually appealing and user-friendly interfaces for digital products, using UI/UX Design principles
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
            Worked with a variaty of different languages, platforms, framekworks and content management systems such as Javascript, React and Wordpress
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Experienced in utilizing design and prototyping tools like Figma and Adobe Creative Suite to translate designs into functional web interfaces
            </li>
        </ul>
    </motion.div>
  )
}

export default Kubico