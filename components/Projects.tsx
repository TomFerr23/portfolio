import SectionTitle from './SectionTitle'
import Image from 'next/image'
import projectOne from 'public/assets/images/project-1.png'
import projectTwo from 'public/assets/images/project-2.png'
import projectThree from 'public/assets/images/project-3.png'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section id="work" className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title="Some Things I&apos;ve Built" titleNo='03' />
        <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
            {/* project one */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a 
                className='w-full xl:w-1/2 h-auto relative group'
                href="https://tferrari.eu/" target='_blank'
                >
                <div>
                    <Image className="w-full h-full object-contain" 
                    src={projectOne} 
                    alt="project one"
                    />
                    <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/30 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
                </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Three.js Studio Website</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    A 3D Web Agency Studio website built with Three.js, and React Fiber. The project contains a custom <span className='text-textGreen'>WebGL</span> renderer with shader effects, allowing for a unique <span className='text-textGreen'>interactive experience</span>.
                </p>
                <ul className='text-xs md:text-sm font-accentfont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>React</li>
                    <li>Three.js</li>
                    <li>Vite</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                    className='hover:text-textGreen duration-300'
                    href="#"
                    target='_blank'
                    >
                        <TbBrandGithub />
                    </a>


                    <a 
                    className='hover:text-textGreen duration-300'
                    href="#"
                    target='_blank'
                    >
                        <RxOpenInNewWindow  />
                    </a>
                </div>
            </div>
            </div>
        </div>
        {/* project two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
                <a 
                className='w-full xl:w-1/2 h-auto relative group'
                href="https://tomferr23.github.io/Counter-App/" target='_blank'
                >
                <div>
                    <Image className="w-full h-full object-contain" 
                    src={projectTwo} 
                    alt="project two"
                    />
                    <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/30 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
                </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Counter Application</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                    A counter application built mainly with <span className='text-textGreen'>JavaScript</span> featuring a sleek and modern design with the possibility to switch between <span className='text-textGreen'>light</span> and <span className='text-textGreen'>dark</span> mode. Counter statistics to keep track of the steps and a reset button. Pdf presentation available in the footer of the app.
                </p>
                <ul className='text-xs md:text-sm font-accentfont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                    className='hover:text-textGreen duration-300'
                    href="https://github.com/TomFerr23/Counter-App"
                    target='_blank'
                    >
                        <TbBrandGithub />
                    </a>

                    <a 
                    className='hover:text-textGreen duration-300'
                    href="https://tomferr23.github.io/Counter-App/"
                    target='_blank'
                    >
                        <RxOpenInNewWindow  />
                    </a>
                </div>
            </div>
            </div>
        </div>
        {/* project three */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a 
                className='w-full xl:w-1/2 h-auto relative group'
                href="https://ai-leaks.com/" target='_blank'
                >
                <div>
                    <Image className="w-full h-full object-contain" 
                    src={projectThree} 
                    alt="project three"
                    />
                    <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/30 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
                </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Wordpress AI Blog</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    A <span className='text-textGreen'>Wordpress</span> blog focused on Artificial Intelligence. The aim of this blog is to educate beginners on <span className='text-textGreen'>AI latest topics</span>.
                </p>
                <ul className='text-xs md:text-sm font-accentfont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>Figma</li>
                    <li>Wordpress</li>
                    <li>Elementor</li>
                    <li>Php</li>
                </ul>
                <div className='text-2xl flex gap-4'>

                    <a 
                    className='hover:text-textGreen duration-300'
                    href="https://tferrari.eu/"
                    target='_blank'
                    >
                        <RxOpenInNewWindow  />
                    </a>
                </div>
            </div>
            </div>
        </div>
        </div>
        </section>
  )
}

export default Projects