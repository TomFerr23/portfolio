import Image from 'next/image'; 
import { useRef, useState } from 'react';
import logo from '@/public/assets/images/logo.svg'; 
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdOutlineClose } from 'react-icons/md';
import { TbBrandGithub } from "react-icons/tb"; 
import { SlSocialYoutube } from "react-icons/sl";
import {
    SlSocialLinkedin,
    SlSocialInstagram,
} from "react-icons/sl";

const Navbar = () => {

  const ref = useRef<string | any>("")
  const [showMenu,setShowMenu] = useState(false);


  const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    //upadate the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handClick(e:any) {
    if(e.target.contains(ref.current)) {
      setShowMenu(false);

    }
  }


  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[8vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
          <Image className='w-10' src={logo} alt="Logo" /> 
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
            <ul className='flex text-[13px] gap-7'>
                <Link href="#about" onClick={handleScroll} className="flex items-center gap-1 font-accentFont  text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li
                  initial={{y:-10, opacity:0}}
                  animate={{y:0, opacity:1}}
                  transition={{duration:0.1, delay:0.1}}
                  >
                    <span className='font-accentFont text-textGreen'>01.</span> About
                    </motion.li>
                </Link>

                <Link href="#experience" onClick={handleScroll} className="flex items-center gap-1 font-accentFont text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li
                  initial={{y:-10, opacity:0}}
                  animate={{y:0, opacity:1}}
                  transition={{duration:0.1, delay:0.2}}
                  >
                  <span className="font-accentFont text-textGreen">0.2</span> Experience
                  </motion.li>

                  </Link>

                  <Link href="#work" onClick={handleScroll} className="flex items-center gap-1 font-accentFont text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li
                  initial={{y:-10, opacity:0}}
                  animate={{y:0, opacity:1}}
                  transition={{duration:0.1, delay:0.3}}
                  >
                  <span className="font-accentFont text-textGreen">0.3</span> Work
                  </motion.li>

                  </Link>

                  <Link href="#contact" onClick={handleScroll} className="flex items-center gap-1 font-accentFont text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li
                  initial={{y:-10, opacity:0}}
                  animate={{y:0, opacity:1}}
                  transition={{duration:0.1, delay:0.4}}
                  >
                  <span className="font-accentFont text-textGreen">0.4</span> Contact
                  </motion.li>

                  </Link>

                
                
                
            </ul>
            <a href="/assets/tom_resume.pdf" target='_blank'>
            <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="px-4 py-2 rounded-md text-textGreen font-light font-accentFont text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Resume</motion.button>
            </a>
        </div>
        {/* Small icon section */}
        <div onClick={() =>setShowMenu(true)} className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {
          showMenu && (
            <div 
            ref={(node) => (ref.current = node)} 
            onClick={handClick}
            className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
               <motion.div initial={{x:20, opacity:0}} 
                          animate={{x:0, opacity:1}} 
                          transition={{duration:0.1}}
                          className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'
                          >
                            <MdOutlineClose
                            onClick={() => setShowMenu(false)}
                             className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" />
                             <div>

                             <ul className='flex flex-col text-[13px] gap-7'>

                                <Link href="#about" onClick={handleScroll} className="flex items-center gap-1 font-accentFont text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link">
                                <motion.li
                                initial={{y:-10, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:0.2, delay:0.1, ease:'easeIn'}}
                                >
                                <span className='font-accentFont text-textGreen'>01.</span> About
                                </motion.li>
                               </Link>

                                <Link href="#experience" onClick={handleScroll} className="flex items-center gap-1 font-accentFont text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link">
                                  <motion.li
                                  initial={{y:-10, opacity:0}}
                                  animate={{y:0, opacity:1}}
                                  transition={{duration:0.2, delay:0.2, ease:'easeIn'}}
                                  >
                                  <span className="font-accentFont text-textGreen">0.2</span> Experience
                                  </motion.li>

                                  </Link>

                                  <Link href="#work" onClick={handleScroll} className="flex items-center gap-1 font-accentFont text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link">
                                  <motion.li
                                  initial={{y:-10, opacity:0}}
                                  animate={{y:0, opacity:1}}
                                  transition={{duration:0.1, delay:0.3, ease:'easeIn'}}
                                  >
                                  <span className="font-accentFont text-textGreen">0.3</span> Work
                                  </motion.li>

                                  </Link>

                                  <Link href="#contact" onClick={handleScroll} className="flex items-center gap-1 font-accentFont text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link">
                                  <motion.li
                                  initial={{y:-10, opacity:0}}
                                  animate={{y:0, opacity:1}}
                                  transition={{duration:0.1, delay:0.4, ease:'easeIn'}}
                                  >
                                  <span className="font-accentFont text-textGreen">0.4</span> Contact
                                  </motion.li>

                                  </Link>

                </ul>
                <a href="/assets/tom_resume.pdf" target='_blank'>
            <motion.button 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{delay:0.6, ease:'easeIn'}} 
            className="w-32 h-10 mt-6 font-light rounded-md text-textGreen font-accentFont text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
              Resume
              </motion.button>
            </a>
            <div className="flex mt-6 gap-4">

            <motion.a 
            initial={{y:20,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.5, ease:'easeIn'}} 
            href="https://github.com/TomFerr23" target="_blank">
                <span className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <TbBrandGithub />
                </span>
            </motion.a>

            <motion.a 
            initial={{y:20,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.5, ease:'easeIn'}} 
            href="https://www.instagram.com/tom_ferrari_/?hl=en" target="_blank">
                <span className="w-10 h-10 text-l  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
                </span>
            </motion.a>

            <motion.a 
            initial={{y:20,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.5, ease:'easeIn'}}
            href="https://www.linkedin.com/in/tommaso-ferrari-it/" target="_blank">
                <span className="w-10 h-10 text-l  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialLinkedin />
                </span>
            </motion.a>

            <motion.a 
            initial={{y:20,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.5, ease:'easeIn'}}
            href="https://www.youtube.com/@tomferrari5898" target="_blank">
                <span className="w-10 h-10 text-l  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialYoutube />
                </span>
            </motion.a>
        </div>
        
              </div>
              <motion.a
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2, ease:'easeIn'}}
        className='text-sm w-72 tracking-widest text-textGreen text-center mt-4'
        href='mailto:tomferrari.dev@gmail.com'
        >
          <p className='font-thin'>tomferrari.dev@gmail.com</p>
        </motion.a>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
