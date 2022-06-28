
import {useState} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Carousel = () => {
    const image = ["blooper.gif", "blooper2.gif", "blooper4.gif", "blooper5.gif", "blooper6.gif", "blooper7.gif", "blooper8.gif","blooper9.gif","blooper10.gif", "blooper11.gif",]
    const [selectedIndex, setSelectedIndex] = useState(1)
    const [selectedImage, setSelectedImage] = useState(image[1])

    function imagenPrevia(){
        const condicion = selectedIndex > 0
        const nextIndex = condicion ? selectedIndex - 1 : image.length - 1
        setSelectedImage(image[nextIndex])
        setSelectedIndex(nextIndex)
    }
    function imagenPosterior(){
        const condicion = selectedIndex < image.length -1
        const nextIndex = condicion ? selectedIndex + 1 : 0
        
        setSelectedImage(image[nextIndex])
        setSelectedIndex(nextIndex)
    }

  return (
    <div className='slider'>
        <AiOutlineArrowLeft className='arrow arrow-left' onClick={imagenPrevia}/>
        <img src={require(`../images/${selectedImage}`)} alt="picture" className='imagen-carousel'/>
        <AiOutlineArrowRight className='arrow arrow-right' onClick={imagenPosterior}/>
      
    </div>
  )
}

export default Carousel