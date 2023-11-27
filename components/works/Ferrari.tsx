import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { BiRightArrow } from "react-icons/bi";

const Ferrari = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl text-textTitle font-titleFont'>
            Manager <span className='text-textGreen tracking-wide'>@FerrariTommaso&amp;Co.SNC</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark font-accentFont'>Aug 2015 - Jan 2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Improved long-term prospecting, strategy development
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Identified market product demands and customer trends to bring in new customers and retain existing ones.
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Increased
revenue and supported sales activities
            </li>
        </ul>
    </motion.div>
  )
}

export default Ferrari