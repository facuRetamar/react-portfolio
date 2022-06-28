import About from './About'
import Hero from './Hero'

const Main = ({abrirMail,cerrarMail={cerrarMail}, enviar}) => {
  return (
    <div>
        
        <Hero  abrirMail={abrirMail} cerrarMail={cerrarMail} enviar={enviar} />
        <About />
        
    </div>
  )
}

export default Main