import './App.css';
import Main from "./components/Main"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import {useState, createContext} from "react"
import {Routes, Route, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"


export  const iniciadoContext = createContext(false)

function App() {
 
  const location = useLocation()

  const [enviar, setEnviar] = useState(false)
  const [iniciado, setIniciado] = useState(false)
  const [theme, setTheme] = useState("light")
 

  function abrirMail(e){
    e.preventDefault()
    window.scrollTo(0,0)
    setEnviar(true)
    console.log(enviar)
    
}
function cerrarMail(e){
  e.preventDefault()
  window.scrollTo(0,0)
  setEnviar(false)
  console.log(enviar)
  
}


  return (
    <iniciadoContext.Provider value={{iniciado, setIniciado, theme, setTheme}}>
    <div className="App" id='main-container' style={{background: theme === "dark" ? "rgb(62, 62, 62)" : "rgb(228, 228, 228)",}} >
      <AnimatePresence exitBeforeEnter>

      <Routes location={location} key={location.pathname}>
      
      <Route path='/' element={<Main abrirMail={abrirMail} cerrarMail={cerrarMail} enviar={enviar} />} /> 
      <Route path='/projects' element={<Projects /> } /> 
     
      </Routes>
      </AnimatePresence>
      <Footer  abrirMail={abrirMail}/>
      
    </div>
    </iniciadoContext.Provider>
  );
}

export default App;
