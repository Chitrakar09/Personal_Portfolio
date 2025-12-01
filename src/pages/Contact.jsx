import React from 'react'
import { Footer } from '@/components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {motion} from 'motion/react'
import { duration } from '@mui/material';


function Contact() {
  const links=[
    {
      icon:faEnvelope,
      link:'mailto:chitrakarpratyush@gmail.com',
      title:'chitrakarpratyush@gmail.com'
    },
    {
      icon:faLinkedin,
      link:'https://www.linkedin.com/in/pratyush-chitrakar/',
      title:'Pratyush Chitrakar'
    },
    {
      icon:faGithub,
      link:'https://github.com/Chitrakar09',
      title:'Chitrakar09'
    },
    {
      icon:faInstagram,
      link:'https://www.instagram.com/chitrakar_09/',
      title:'chitrakar_09'
    },
    {
      icon:faFacebook,
      link:'https://www.facebook.com/chitrakar09/',
      title:'Chitrakar Piyush'
    },
  ]

  const parentVariants={
    initial:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.1
      }
    }
  }

  const childVariants={
    initial:{
      opacity:0,
      x:-100
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:0.5,
        ease:"easeInOut"
      }
    }
  }
  return (
    <div id='container' className='w-full h-full flex flex-col justify-between'>
      <div id="content" className='w-full h-full py-10 px-12 flex flex-col justify-start gap-5 items-center'>
        <div id='heading'>
          <h1 className='text-text-light font-extrabold text-3xl underline underline-offset-4'>Get in Touch</h1>
        </div>
        <motion.div variants={parentVariants} initial="initial" animate="visible" id="links" className='flex flex-col gap-5 justify-center items-start'>
          {links.map((link,i)=>(
            <motion.div variants={childVariants} id='linkContainer' key={i} className='flex justify-center items-center gap-1'>
              <FontAwesomeIcon icon={link.icon} className='text-primary-golden text-4xl'/>
              <a href={link.link} target='_blank' className='text-text-light text-lg underline underline-offset-4'>{link.title}</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact