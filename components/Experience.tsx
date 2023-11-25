import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Kubico from './works/Kubico'
import Google from './works/Google';
import Apple from './works/Apple';
import Splash from './works/Splash';
import Amazon from './works/Amazon';

const Experience = () => {
    const [workKubico, setWorkKubico] = useState(true);
    const [workGoogle, setWorkGoogle] = useState(false);
    const [workApple, setWorkApple] = useState(false);
    const [workSplash, setWorkSplash] = useState(false);
    const [workAmazon, setWorkAmazon] = useState(false);

    const handleKubico = () => {
        setWorkKubico(true);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(false);
    };

    const handleGoogle = () => {
        setWorkKubico(false);
        setWorkGoogle(true);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(false);
    };

    const handleApple = () => {
        setWorkKubico(false);
        setWorkGoogle(false);
        setWorkApple(true);
        setWorkSplash(false);
        setWorkAmazon(false);
    };

    const handleSplash = () => {
        setWorkKubico(false);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(true);
        setWorkAmazon(false);
    };

    const handleAmazon = () => {
        setWorkKubico(false);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(true);
    };

  return (
    <section
    id='experience'
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px4'
    >
        <SectionTitle title="Where I've Worked" titleNo='02' />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                <li onClick={handleKubico} className={`${workKubico ? "border-l-textGreen text-textGreen" : "border-hoverColor text-textDark "} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-light font-accentFont`}>Kubico</li>
                <li onClick={handleGoogle} className={`${workGoogle ? "border-l-textGreen text-textGreen" : "border-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-light font-accentFont`}>Google</li>
                <li onClick={handleApple} className={`${workApple ? "border-l-textGreen text-textGreen" : "border-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-light font-accentFont`}>Apple</li>
                <li onClick={handleSplash} className={`${workSplash ? "border-l-textGreen text-textGreen" : "border-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-light font-accentFont`}>Splash</li>
                <li onClick={handleAmazon} className={`${workAmazon ? "border-l-textGreen text-textGreen" : "border-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-light font-accentFont`}>Amazon</li>
            </ul>
            {workKubico && <Kubico/>}
            {workGoogle && <Google/>}
            {workApple && <Apple/>}
            {workSplash && <Splash/>}
            {workAmazon && <Amazon/>}
        </div>
        </section>
  )
}

export default Experience