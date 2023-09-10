import React from 'react';
import Logo from "../assets/vecteezy_mountain-logo_1206203 (1).png";

function Navigation() {
  return (
    <header>
       <div>
            <img src={Logo} alt='logopic' style={{width:'125px', padding:'20px'}}></img>
        </div>
      <div className="headerName">
        <div className="header-content">
        <h1 className='font-bold' style={{ fontFamily: 'Raleway', position: 'relative', left:'130px', bottom:'95px', fontSize:'50px' }}>Francisco González</h1>
        </div>
      </div>

      
    </header>
  );
}

export default Navigation;
