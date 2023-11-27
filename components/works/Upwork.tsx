import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { BiRightArrow } from "react-icons/bi";

const Upwork = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl text-textTitle font-titleFont'>
            Freelance Translator <span className='text-textGreen tracking-wide'>@Upwork</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark font-accentFont'>Jul 2018 - Sep 2018</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Consistently completed work by deadline;
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Proficiently translated a wide range of legal documents, ensuring accuracy and adherence to specialized terminology and legal jargon
            </li>

            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen text-xs mt-1'><BiRightArrow /></span>
                Texts have included technical and medical articles
            </li>
        </ul>
    </motion.div>
  )
}

export default Upwork