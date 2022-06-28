import "./Mailer.css"
import {AiFillCloseCircle} from "react-icons/ai"
import {useState, useRef} from "react"
import emailjs from 'emailjs-com';


const Mailer = ({cerrarMail}) => {

    const [senderName, setsenderName] = useState("")
    const [senderEmail, setSenderEmail] = useState("")
    const [senderMessage, setSenderMessage] = useState("")

 
   


    function sendMail(e){
        const emailContent = {
            senderName: senderName,
            senderEmail: senderEmail,
            senderMessage: senderMessage
        }
        e.preventDefault()
        console.log(senderName, senderEmail, senderMessage)
        emailjs.send('service_cjczkwi', 'template_2tvmohc', emailContent, '3bmhO8D789Yl8-Kue')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setsenderName("")
        setSenderEmail("")
        setSenderMessage("")
        
    };
   

  return (



    <div className='form-container'>

        
        <form className='form' >
        <AiFillCloseCircle  className="icon-close" onClick={cerrarMail}/>
            <label htmlFor="name">your name</label>
            <input type="text" id='name'name="senderName" value={senderName} onChange={e=>setsenderName(e.target.value)} />
            <label htmlFor="email" value={senderEmail}>your E-mail</label>
            <input type="email" id='email' value={senderEmail} name="senderEmail" onChange={e=>setSenderEmail(e.target.value)}/>
            <textarea id="message" name="senderMessage" rows="5" placeholder="your message" value={senderMessage} onChange={e=> setSenderMessage(e.target.value)}></textarea>
            <button type="submit" onClick={sendMail}>SEND</button>
            
        </form>
    </div>
  )
}

export default Mailer