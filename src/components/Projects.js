import "./Projects.css"
import { Link } from "react-router-dom"
import data from "./ProjectData"
import { AiOutlineArrowLeft} from "react-icons/ai"
import {motion} from "framer-motion"

import Carousel from "./Carousel"
import { useContext } from "react"
import { iniciadoContext } from "../App"


const Projects = () => {



  const { theme} = useContext(iniciadoContext)


  return (
    <div className="project" style={{background: theme==="dark" ? "rgb(24, 24, 24)" : "rgb(224, 224, 224)"}} data-scroll-section>
        <motion.div className="overlay-proyect" initial={{x:"-100%"}} exit={{x: 0, transition:{duration: 1}}} style={{background: theme === "dark" ? "rgb(62, 62, 62)" : "rgb(228, 228, 228)",}}></motion.div>
     
        <Link to="/" className="link-home"><h1 className="go-back-h1"> <AiOutlineArrowLeft className="icon-left-arrow"/> go back to home</h1> </Link>
        
            {data.map(p =>(
            <motion.div className="project-card" key={p.title} initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:1}} style={{background: theme==="dark" ? "rgba(255,255,255,.8)" : "rgba(55,55,55,.8)", color: theme==="dark" ? "rgba(55,55,55)" : "rgba(255,255,255)",}}>
              
                <img src={`images/${p.img}`} alt={p.title} className="img-project"/>
              
              <div className="detalles-principales">
                <h2> <b>title</b>  <br />{p.title} </h2>
                <p> <b>features</b>  <br /> {p.features} </p>
              
              </div>
              <div className="descripcion">
                <p> <b>description</b>  <br /> {p.description} </p>
              </div>
            
            </motion.div>))}
            <h3 className="carousel-title" style={{color: theme==="dark" ? "rgba(255,255,255)" : "rgba(55,55,55)",}}>and as a thank you for looking at my portfolio, here is a little reward</h3>
             
             <Carousel />
    </div>
  )
}

export default Projects

     /*return(
        <div className="project-card">
        <div className="imagen-projects">
          <img src={p.img} alt="" />
        </div>
        <div className="detalles-principales">
         <h2>{p.title} </h2>
         <p>{p.features} </p>
         
        </div>
        <div className="descripcion">
         <p>{p.description} </p>
        </div>
     </div>
      )*/