import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialYoutube } from 'react-icons/sl'
import {
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
} from 'react-icons/sl'

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        <a href="https://github.com/TomFerr23" target="_blank">
                <span className="w-10 h-10 text-xl  rounded-full inline-flex items-center justify-center text-zinc-200 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <TbBrandGithub />
                </span>
            </a>

            <a href="https://www.instagram.com/tom_ferrari_/?hl=en" target="_blank">
                <span className="w-10 h-10 text-xl  rounded-full inline-flex items-center justify-center text-zinc-200 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
                </span>
            </a>

            <a href="https://www.linkedin.com/in/tommaso-ferrari-it/" target="_blank">
                <span className="w-10 h-10 text-xl  rounded-full inline-flex items-center justify-center text-zinc-200 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialLinkedin />
                </span>
            </a>

            <a href="https://www.youtube.com/@tomferrari5898" target="_blank">
                <span className="w-10 h-10 text-xl  rounded-full inline-flex items-center justify-center text-zinc-200 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialYoutube />
                </span>
            </a>
    </div>
  )
}

export default Footer