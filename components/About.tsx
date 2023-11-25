import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"
import { MdJavascript } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { FaWordpressSimple } from "react-icons/fa";
import { SiAdobecreativecloud } from "react-icons/si";
import { TbPrompt } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import profileImg from "@/public/assets/images/profile.jpg";
import Image from "next/image";


const About = () => {
  return (
    <section
    id="about"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
        <SectionTitle title="About Me" titleNo="01"/>
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <p>
                Hello! My name is Tommaso and I enjoy creating things that live on the internet.
                  My main focus these days is building accessible, inclusive products and digital experiences in order to develop my coding skills.
                </p>
                <p>
                I have a solid foundation in several coding languages, such as: HTML ,CSS and Javascript; As well as Preprocessors tools like SASS 
                and frameworks like Bootstrap. My focus is <span className="text-textGreen">React</span>, <span className="text-textGreen">Next.js</span>, and <span className="text-textGreen">Three.js</span>. 
                </p>
                <p>
                At present, I have the pleasure of creating digital experiences as a UI/UX designer && Web Developer at kubico.com. 
                Guided by a passion for aesthetics and functionality, I strive to craft designs that are both visually stunning and user-friendly. 
                By combining creativity and empathy, I aim to bring people closer to technology in a meaningful way.
                </p>
                <p>
                    Here a few technologies I've been working with recently:
                </p>
                <ul className="max-w-[450px] text-sm font-accentFont font-light grid grid-cols-2 gap-2 mt-6">
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <MdJavascript />
                        </span>
                        JavaScript (ES6+)
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <SiNextdotjs />
                        </span>
                        Next.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <FaReact />
                        </span>
                        React
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <TbBrandThreejs />
                        </span>
                        Three.js
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <FaNode />
                        </span>
                        Node.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <SiTailwindcss />
                        </span>
                        Tailwindcss
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <FaSass />
                        </span>
                        Sass
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <RiBootstrapLine />
                        </span>
                        Bootstrap
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <FaWordpressSimple />
                        </span>
                        Wordpress
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <LuFigma />
                        </span>
                        Figma
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <SiAdobecreativecloud />
                        </span>
                        Adobe Creative Suite
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                        <TbPrompt />
                        </span>
                        AI Prompts
                    </li>
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                    <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                        <Image className="rounded-lg h-full object-cover sm:object-contain transition-transform duration-300 transform-gpu group-hover:-translate-x-2 group-hover:-translate-y-2"
                        src={profileImg}
                        alt="profileImg"
                         />
                         <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/30 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                         <div className="hidden lgl:inline-block absolute w-full h-full border-4 border-textGreen rounded-lg top-4 left-4 z-[-10] group-hover:bg-transparent duration-300 transition-transform transform-gpu group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About