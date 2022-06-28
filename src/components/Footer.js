import { iniciadoContext } from "../App"
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai"
import "./Footer.css"
import { useContext } from "react"

const Footer = ({abrirMail}) => {
  const { theme} = useContext(iniciadoContext)

  const letterDark = {
    color:" rgb(228, 228, 228)"
  }
  const letterLight = {
    color:" rgb(62, 62, 62)"
  }

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/facundo-retamar-web-dev/");
  };
  const openGithub = () => {
    window.open("https://www.github.com/facuRetamar");
  };
  return (
    <div className='footer' style={{background: theme === "dark" ? "rgb(228, 228, 228)" : "rgb(62, 62, 62)",
                                    color: theme === "dark" ? "rgb(62, 62, 62)" : "rgb(228, 228, 228)"}} data-scroll-section>
        <div className='contact-info-container' onClick={openGithub} style={{ color: theme === "dark" ? "rgb(62, 62, 62)" : "rgb(228, 228, 228)"}}>
            <AiFillGithub className='icon' />
            <p>Github</p>
        </div>
        <div className='contact-info-container' onClick={openLinkedin} style={{ color: theme === "dark" ? "rgb(62, 62, 62)" : "rgb(228, 228, 228)"}}>
        <AiFillLinkedin className='icon' />
            <p>LinkedIn</p>
        </div>
        <div className='contact-info-container' onClick={abrirMail} style={{ color: theme === "dark" ? "rgb(62, 62, 62)" : "rgb(228, 228, 228)"}}>
        <AiOutlineMail className='icon' />
            <p>E-mail</p>
        </div>
    </div>
  )
}

export default Footer