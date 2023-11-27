import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Kubico from './works/Kubico'
import Ferrari from './works/Ferrari';
import Ep from './works/Ep';
import Splash from './works/Upwork';
import Amazon from './works/Amazon';
import Upwork from './works/Upwork';

const Experience = () => {
    const [workKubico, setWorkKubico] = useState(true);
    const [workFerrari, setWorkFerrari] = useState(false);
    const [workEp, setWorkEp] = useState(false);
    const [workUpwork, setWorkUpwork] = useState(false);
    const [workAmazon, setWorkAmazon] = useState(false);

    const handleKubico = () => {
        setWorkKubico(true);
        setWorkFerrari(false);
        setWorkEp(false);
        setWorkUpwork(false);
        setWorkAmazon(false);
    };

    const handleGoogle = () => {
        setWorkKubico(false);
        setWorkFerrari(true);
        setWorkEp(false);
        setWorkUpwork(false);
        setWorkAmazon(false);
    };

    const handleApple = () => {
        setWorkKubico(false);
        setWorkFerrari(false);
        setWorkEp(true);
        setWorkUpwork(false);
        setWorkAmazon(false);
    };

    const handleSplash = () => {
        setWorkKubico(false);
        setWorkFerrari(false);
        setWorkEp(false);
        setWorkUpwork(true);
        setWorkAmazon(false);
    };

    const handleAmazon = () => {
        setWorkKubico(false);
        setWorkFerrari(false);
        setWorkEp(false);
        setWorkUpwork(false);
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
                <li onClick={handleGoogle} className={`${workFerrari ? "border-l-textGreen text-textGreen" : "border-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-light font-accentFont`}>Ferrari</li>
                <li onClick={handleApple} className={`${workEp ? "border-l-textGreen text-textGreen" : "border-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-light font-accentFont`}>EP</li>
                <li onClick={handleSplash} className={`${workUpwork ? "border-l-textGreen text-textGreen" : "border-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-light font-accentFont`}>Upwork</li>
            </ul>
            {workKubico && <Kubico/>}
            {workFerrari && <Ferrari/>}
            {workEp && <Ep/>}
            {workUpwork && <Upwork/>}
        </div>
        </section>
  )
}

export default Experience