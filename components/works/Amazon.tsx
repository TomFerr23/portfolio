import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { BiRightArrow } from "react-icons/bi";

const Amazon = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl text-textTitle font-titleFont'>
            Engineer <span className='text-textGreen tracking-wide'>@ReactBD</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark font-accentFont'>Jan 2023 - Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
            Write modern, performant, maintainable code for a diverse array of client and internal projects
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
            Worked with a variaty of different languages, platforms, framekworks and content management systems such as Javascript, TypeScript, React and Wordpress
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
            Comunicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
            </li>
        </ul>
    </motion.div>
  )
}

export default Amazon