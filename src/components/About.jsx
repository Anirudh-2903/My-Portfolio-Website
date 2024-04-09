import React from 'react';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring",0.5 * index ,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12
        min-h-280px flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
      </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    I am an aspiring Cloud Architect with about 2 years of experience in the IT industry
    having developed a strong background in building and managing cloud solutions.
    My skills span across AWS, IBM Cloud, Google Cloud, and Azure, and I possess a
    deep understanding of cloud migration, deployment, and operations.
    Recently, I have expanded my expertise into full stack development and ventured into application
    development in Microsoft ASP.NET.I am passionate about staying up-to-date with the latest cloud
    technologies and industry trends, constantly seeking
    opportunities to apply my skills in designing and implementing scalable, secure, and cost-effective
    cloud solutions that drive business growth.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service,index) =>(
        <ServiceCard  index={index} key={service.title} {...service}/>
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(About , "about");