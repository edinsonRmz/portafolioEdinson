import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoLinkedinSquare } from 'react-icons/bi';

export default function Footer() {
  return (
    <div style={{
      backgroundColor: '#3d5a80',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center',    
      justifyContent: 'center',
      height: '40vh',         
    }}>
      <div style={{ display: 'flex', alignItems: 'center', color:'black' }}>
        <a href="https://www.linkedin.com/in/edinsonramireza11/">
          <BiLogoLinkedinSquare size={30} style={{ marginRight: '10px',  color:'black' }} />
        </a>
        <a href="https://github.com/edinsonRmz">
          <AiFillGithub size={30} style={{ marginRight: '10px',  color:'black' }}  />
        </a>
      </div>
      <p>Todos los Derechos reservados © 2023</p>
    </div>
  );
}
