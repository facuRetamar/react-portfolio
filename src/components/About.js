import "./About.css"
import { useRef, useEffect } from "react"
import css from "../images/css.png"
import html from "../images/HTML.png"
import git from "../images/git.png"
import gsapLogo from "../images/gsap-logo.jpg"
import js from "../images/JS.png"
import redux from "../images/redux.png"
import framer from "../images/framer-motion-logo.png"
import react from "../images/react.png"
import { gsap } from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useContext } from "react"
import { iniciadoContext } from "../App"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { theme} = useContext(iniciadoContext)
    let firstHeader = useRef(null)
    let secondHeader = useRef(null)
    let thirdHeader = useRef(null)
    let fourthHeader = useRef(null)
    let info1 = useRef(null)
    let picture1 = useRef(null)
    let picture2 = useRef(null)
    let inventoryP = useRef(null)
    let inventory = useRef(null)
    let eCommerce = useRef(null)
    let eCommerceImage = useRef(null)
    let lastText = useRef(null)
    let secondSection = useRef(null)
   
    
    let a = useRef(null)
   
    
    const inventoryOpen = () => {
      window.open("https://inventory-control-facu.netlify.app");
    };
    const eCommerceOpen = () => {
      window.open("https://facu-e-commerce.netlify.app/");
    };
  
 
   
  useEffect(()=>{
    gsap.from([a.firstChild, a.children[1],a.children[2], a.children[3], a.children[4], a.children[5],a.children[6], a.lastChild], {opacity: 0, y: 50, x: -50, duration: 1, scale: .4, rotation: 45,rotateX:"90deg", rotateY: "90deg", stagger:.1, ease: "power3.out", scrollTrigger:{
      trigger: a.firstChild,
      start: "center bottom",
    }})

    if(window.innerWidth > 800){
      gsap.from(eCommerce, {opacity: 0, duration:1, scrollTrigger:{
        trigger: eCommerce,
        start: "top 70%",
        end: "top 20%",
        pin: eCommerce,
        scrub: .5
      }})
    }else{
      gsap.from(eCommerce, {opacity: 0, duration:1, scrollTrigger:{
        trigger: eCommerce,
        start: "top 70%",
        
      }})
    }

    if(window.innerWidth < 1000){
    
      gsap.from(firstHeader, {opacity: 0, scrollTrigger:{
        trigger: firstHeader,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
    } })
    gsap.from(secondHeader, {opacity: 0,  scrollTrigger:{
      trigger: secondHeader,
      start: "top 90%",
      end: "top 60%",
      scrub: true
    } })

    gsap.from(thirdHeader, {opacity: 0,scrollTrigger:{
      trigger: thirdHeader,
      start: "top 90%",
      end: "top 60%",
      scrub: true
    } })
    gsap.from(fourthHeader, {opacity: 0,scrollTrigger:{
      trigger: fourthHeader,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
    } })}else{
    
      gsap.from(firstHeader, {opacity: 0, y: 150, scrollTrigger:{
        trigger: firstHeader,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
       pin: firstHeader
       
    } })
        gsap.from(secondHeader, {opacity: 0,y: 150, scrollTrigger:{
          trigger: secondHeader,
          start: "top 90%",
          end: "top 60%",
          pin: secondHeader,
          scrub: true
        } })
        gsap.from(thirdHeader, {opacity: 0,y: 150, scrollTrigger:{
          trigger: thirdHeader,
          start: "top 90%",
          end: "top 60%",
          
          pin: thirdHeader,
          
          scrub: true
        } })
        gsap.from(fourthHeader, {opacity: 0,y: 150, scrollTrigger:{
          trigger: fourthHeader,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
          pin: fourthHeader,
        } })
    }
   

 
  
     

      gsap.from(info1,{x:200, duration: 1, opacity: 0, scrollTrigger:{
        trigger: info1,
        start: "top 70%",
      } })
      gsap.from(picture1, {x:-200, opacity: 0, duration:.5, scrollTrigger:{
        trigger: picture1,
        start: "top 70%",
      }})
        gsap.from(picture2, {y:-200, x:-200, opacity: 0, duration:.5, scrollTrigger:{
          trigger: picture2,
          start: "top 70%",
        }})
        gsap.from([inventoryP, inventory], {x:-200, opacity: 0, duration:1,stagger: 0.3, scrollTrigger:{
          trigger: inventoryP,
          start: "top 70%",
        }})
        

     
          
       
        gsap.from(lastText, {y:200, opacity: 0, duration:.5,stagger: 0.3, scrollTrigger:{
          trigger: lastText,
          start: "top 80%",
        
        }})
        gsap.from(eCommerceImage.firstChild, {y: 50, opacity: 0, duration: .5, ease: "power3.out", scrollTrigger:{
          trigger: eCommerceImage.firstChild,
          start: "top 70%",}})

          gsap.from(eCommerceImage.children[1], {y: 50, opacity: 0, duration: .5, ease: "power3.out", scrollTrigger:{
            trigger: eCommerceImage.children[1],
            start: "top 70%",}})

            gsap.from(eCommerceImage.lastChild, {y: 50, opacity: 0, duration: .5, ease: "power3.out", scrollTrigger:{
              trigger: eCommerceImage.lastChild,
              start: "top 70%",}})
    
  }, [])
  return (
  
    <div className="second-section" ref={e=>secondSection=e} style={{ color: theme === "dark" ? "rgb(228, 228, 228)" : "rgb(62, 62, 62)"}} data-scroll-section> 
          <div className="overlay-page" initial={{x:"100%"}} exit={{x: 0, transition:{duration: 1}}}></div>
            <h3 className="introduction lefty primer-intro" ref={e=>firstHeader=e}>I am a self-taught frontend developer from a small town in Argentina.</h3>
            <h3 className="introduction righty" ref={e=>secondHeader=e}>I began my journey in early 2021 and got really excited with what I can create</h3>
            <h3 className="introduction lefty" ref={e=>thirdHeader=e}> at first I was really intimidated with coding but after every tutorial I started getting the hang on it</h3>
            <h3 className="introduction righty" ref={e=>fourthHeader =e}> and both functional programming and implementing animations and visual effects are things I love doing.</h3>

            
            <div className="info-container primer-info" >
              <div className="picture-container">
              <div className="project-picture calculator" ref={e=>picture1=e}></div>
              <div className="project-picture stopwatch" ref={e=>picture2=e}></div>
              </div>
            <p className="about-p" ref={e=>info1=e}>some of my first projects are the cliches stopwatch and calculator types</p>
            </div>
            <div className="info-container inventory-div">
              <div className="inventory-container" ref={e=>inventory=e}> <p className="inventory-p" onClick={inventoryOpen}>CHECK OUT THE DEMO</p></div>
           <p className="about-p" ref={e=>inventoryP=e}> the more projects I made, the more complex they became, until I programed an inventory control app without any tutorial (in part, because I didn't find any) and then I decided to jump into react.  </p>
           </div>
           <div className="info-container eCommerce-container" >
           <p className="about-p" ref={e=>eCommerce=e}>Learning a lot and acumulating resources I managed to build an e-commerce demo that took me a while and a bit of sanity as well but ultimately, I was so thrilled with the result.
           you can see the demo <br /> <span onClick={eCommerceOpen}> <i>clicking here</i> </span>  </p>
           <div className="eCommerce-images" ref={e=>eCommerceImage=e}>
           <div  className="eCommerce"></div>
           <div  className="eCommerce"></div>
           <div  className="eCommerce"></div>
           </div>
           </div>
           <div className="info-container last-info">
           <p className="about-p" ref={e=>lastText=e}>and finally I'm here implementing al the good stuff I could learn about gsap and framer-motion</p>
          
           </div>
          <h2 className="myStack" >MY STACK</h2>
           <div className="logo-container" ref={e=>a=e}>
            <img src={html} alt="" className="logo-about"/>
            <img src={css} alt="" className="logo-about cssLogo"/>
            <img src={js} alt="" className="logo-about"/>
            <img src={git} alt="" className="logo-about"/>
            <img src={react} alt="" className="logo-about"/>
            <img src={redux} alt="" className="logo-about"/>
            <img src={framer} alt="" className="logo-about"/>
            <img src={gsapLogo} alt=""className="logo-about" />
           </div>
        </div>
     
  )
}

export default About