import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { BiRightArrow } from "react-icons/bi";

const Apple = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl text-textTitle font-titleFont'>
            MEP Assistant <span className='text-textGreen tracking-wide'>@EuropeanParliament</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark font-accentFont'>Oct 2018 - Feb 2019</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Writing briefings in order to facilitate meetings for the MEP
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Attending meetings (including plenaries sessions/private) on behalf of the MEP, taking notes and reporting back to the MEP
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Managing the agenda of the MEP
            </li>
        </ul>
    </motion.div>
  )
}

export default Apple