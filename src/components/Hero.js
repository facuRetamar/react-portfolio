import "./Hero.css"
import { useEffect, useRef, useContext } from "react"
import { gsap } from "gsap"
import ejemplo from "../images/about-me.jpg"
import Mailer from './Mailer'
import {motion} from "framer-motion"
import { iniciadoContext } from "../App"
import {AiOutlineArrowDown, AiFillLinkedin, AiOutlineMail} from "react-icons/ai"
import {BsMoonStarsFill} from "react-icons/bs"
import {CgSun} from "react-icons/cg"

import { Link } from "react-router-dom"


const Hero = ({abrirMail, enviar, cerrarMail}) => {

    const {setIniciado, iniciado, theme, setTheme} = useContext(iniciadoContext)
   

    let overlay = useRef(null)
    let firstOverlay = useRef(null)
    let container = useRef(null)
    let image = useRef(null)
    let about = useRef(null)
    let talk = useRef(null)
    let contact = useRef(null)
    let scroll = useRef(null)
    let linkProjects = useRef(null)
    let firstSection = useRef(null)

    const tl = gsap.timeline()

    function mostrarContactos(){
        gsap.to([contact.firstChild, contact.children[1], contact.lastChild], {x: 0, duration: .5, stagger: .1})
    }

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/facundo-retamar-web-dev/");
      };
 
      useEffect(()=>{
        console.log(iniciado)
      },[iniciado])

    useEffect(()=>{
       if(iniciado === false){
        tl.to(firstOverlay,{y: "-100%", duration: .7, ease: "power4.out", delay: .3})
       .from(container,{x: -100, duration: 1.8, ease: "power4.out"}, "=-.3")
       .to(overlay, {x: "100%", duration: 1.5, ease: "power4.out", delay: .3}, "-=2")
       .to(image, {scale: 1.2, duration: .5}, "-=.9")
       .from([about.firstChild.firstChild,
            about.children[1].firstChild,
            about.children[2].firstChild], {y: 100, duration: .5, opacity: 0, stagger:.2}, "=-1")
        .from([talk,scroll],{y: 25, duration: .3, stagger: .2, opacity: 0})
        .to(linkProjects,{rotateX:"0deg", duration: .5, ease: "circ.out"})
        .to(linkProjects.firstChild, {opacity: 1, duration: .3})  
        setIniciado(true)
        }else{
            gsap.from(firstSection,{ opacity: 0, duration: 2})
            gsap.to(linkProjects,{rotateX:"0deg", duration: .5, ease: "circ.out"})
            gsap.to(linkProjects.firstChild, {opacity: 1, duration: .3})  
            gsap.to(overlay, {opacity: 0, duration: .3, ease: "power4.out"})
        }
        
        
    }, [])
      
   // 
  return (
    <div className='hero' data-scroll-section> 

        <motion.div className="overlay-page" initial={{x:"100%"}} exit={{x: 0, transition:{duration: 1}}} style={{background: theme==="dark" ? "rgb(24, 24, 24)" : "rgb(224, 224, 224)"}}></motion.div>
       
       {enviar && <Mailer abrirMail={abrirMail} cerrarMail={cerrarMail} />}
       
       
        <div className="primer-seccion" id="first-section" ref={e=>firstSection=e} style={{ color: theme === "dark" ? "rgb(228, 228, 228)" : "rgb(62, 62, 62)"}}>
        <button onClick={()=>{ setTheme(p=> p === "dark" ? "light" : "dark")} } className="button-switch">{theme==="dark" ? <CgSun /> : <BsMoonStarsFill />} </button>
        
            <div className="div-to-projects" ref={e=>linkProjects=e} style={{ border: theme === "dark" ? "2px solid white" : "2px solid black"}}>

            <Link to ="/projects" className="link-to-projects" style={{ color: theme === "dark" ? "rgb(228, 228, 228)" : "rgb(62, 62, 62)"}}>check out all my projects</Link>

            </div>

            <div className="contenedor-imagen" ref={e => container = e}>
                <div className='overlay' ref={e => overlay = e}>
                
                </div>
                <img src={ejemplo} alt="example" className="imagen" ref={e => image = e}/>
            </div>
            
            <div className="about-container" ref={e=> about= e}>
                <div className="hidden" >
                    <h4>Hello there, I am</h4>
                </div>
                <div className="hidden">
                    <h1>Facundo Retamar </h1>
                </div>
                <div className="hidden">
                    <h2>frontend developer and tech enthusiast </h2>
                </div>
                <div className="talking-info">
                <div className="talk-frame" ref={e=>talk=e} onMouseEnter={mostrarContactos} style={{ border: theme === "dark" ? "2px solid white" : "2px solid black"}}>
                    <p>LETS TALK</p>
                </div>
                <div className="contact-data" ref={e=>contact=e}>
                       
                        <div className='contact-info' onClick={openLinkedin}>
                        <AiFillLinkedin className='icon' />
                            <p>LinkedIn</p>
                        </div>
                        <div className='contact-info' onClick={abrirMail}>
                        <AiOutlineMail className='icon' />
                            <p>E-mail</p>
                        </div>
                </div>
                
                </div>
                <div className="p-scroll" ref={e=>scroll=e}>
                <p >Or scroll down  to know more about me </p> <AiOutlineArrowDown className="arrow-icon"/>
                </div>

            </div>
        </div>
        
    
    </div>
  )
}

export default Hero