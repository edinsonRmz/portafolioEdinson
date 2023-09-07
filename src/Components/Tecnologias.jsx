import React from 'react'
import Tecnologia from './Tegnologias.css'
import Img1 from './Html.png'
import Img2 from './css.png'
import Img3 from './JS.png'
import Img4 from './react.png'
import Img5 from './photoshop.png'
import Img6 from './figma.png'



export default function Tecnologias() {
  return (
    <div className='tecnoligias'>
        <div>
          <hr />
            <h2 className='tecnologias'>Tecnologias</h2>
            <div>
                <img className='img' src={Img1} alt="html" />
                <img className='img' src={Img2} alt="css" />
                <img className='img' src={Img3} alt="Js" />
                <img className='img' src={Img4} alt="react" />
                <img className='img' src={Img5} alt="photoshop" />
                <img className='img' src={Img6} alt="figma" />

            </div>
        </div>
    </div>
  )
}