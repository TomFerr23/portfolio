import React from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from 'framer-motion'

const Archive = () => {
    const [showMore, setShowMore ] = React.useState(false)
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont text-textTitle font-semibold'>Other Noteworthy Projects</h2>
            <p className='text-sm font-titleFont text-textGreen'>view the archive</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <ArchiveCard title="Beauty Corner" 
            des="Beautycorner.nl is a beauty products blog. The website is built with a custom wordpress theme. Accurately designed with Figma and Photoshop."
            listItem={['Figma', 'Photoshop', 'Midjourney']}
            link="https://beautycorner.nl/"
             />

<ArchiveCard title="Kubico" 
            des="Kubico is a Dutch startup that provides a big variety of digital services. Accurately designed with Figma and Photoshop."
            listItem={['Figma', 'Photoshop', 'Midjourney']}
            link="https://kubico.com/"
             />

<ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />

<ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />

<ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />

<ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />

             {
                showMore && (
                    <>
                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.1}}
                        >
                            <ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />
                        </motion.div>

                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.2}}
                        >
                            <ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />
                        </motion.div>

                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.3}}
                        >
                            <ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />
                        </motion.div>

                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.4}}
                        >
                            <ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />
                        </motion.div>

                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.5}}
                        >
                            <ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />
                        </motion.div>

                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.6}}
                        >
                            <ArchiveCard title="Coming Soon" 
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
            listItem={['xxx', 'xxx', 'xxx']}
            link="#"
             />
                        </motion.div>
                    

                    </>

                    
                )
             }

        </div>
        <div className='mt-12 flex items-center justify-center'>
            {
                showMore ? <button
                 onClick={() => setShowMore(false)} 
                className='w-36 h-12 rounded-md font-accentFont text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
                >
                    Show Less
                    </button> : <button
                 onClick={() => setShowMore(true)} 
                className='w-36 h-12 rounded-md font-accentFont text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
                >
                    Show More
                    </button>
            }
        </div>
    </div>
  )
}

export default Archive