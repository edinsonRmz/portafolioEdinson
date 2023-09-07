import React from 'react';
import Avatar from './avatar.png';
import './Text.css';
import CV from './_pdf-prueba.pdf';
import Proyectos from './Proyectos';

export default function TuComponente() {
  // Función para desplazarse a la sección deseada
  const scrollToSection = () => {
    const section = document.getElementById('seccionDestino'); // Reemplaza 'seccionDestino' con el ID de la sección a la que deseas desplazarte.
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='hero'>
        <div className='conten'>
          <div className='center-vertically'>
            <img src={Avatar} className='Avatar center-vertically' alt="Avatar" />
          </div>
          <h2 className='edinson-ramirez-a'>Edinson Ramirez A</h2>
          <div className='buttons'>
            <button className='button'>
              <a className='contacto' href={CV} download>Descargar CV</a>
            </button>
            <button className='button1' onClick={scrollToSection}  style={{color:'black', height:'50px', width:'150px'}}>
              Proyectos
            </button>
          </div>
        </div>
      </div>

      {/* Sección a la que te deseas desplazar */}
      <div id='seccionDestino' className='seccion'>
        {/* Contenido de la sección */}
      </div>
    </div>
  );
}