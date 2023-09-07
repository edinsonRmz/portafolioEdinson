import React from 'react';

export default function App() {
  const emailAddress = 'edinsonramirez0627@gmail.com'; 
  const sendEmail = () => {
    
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className='conten' style={{backgroundColor:"#3d5a80", padding:"0px", margin:"0px",}}>
      <h1 className='text-w' style={{textAlign:'center', padding:'20px', margin:'0px'}}>Mi Aplicación</h1>
      <p className='tex' style={{textAlign:'center', fontWeight:'bolder' }}>contactame a mi correo electronico en el boton de abajo, asepto toda clase de recomendaciones este aparte de ser mi portafolio es mi primer proyecto  </p>
      <div style={{
  display: 'flex', justifyContent: 'center',  alignItems: 'center',  height: '10vh', }}>
  <button
    onClick={sendEmail}   className='button'   style={{ backgroundColor: "black", color: "white", width: '200px',  height: '50px', }}>
    Enviar Correo
  </button>
    </div> 
  </div>
  );
}