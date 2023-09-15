import {useRef} from 'react';
import Logo from "../assets/vecteezy_mountain-logo_1206203 (1).png";
import {FaBars, FaTimes} from "react-icons/fa"

function Navigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <div className="relative">
  <img
    src={Logo}
    alt="logopic"
    className="w-100px mx-auto my-20"
  />
</div>

      <nav ref={navRef}>
        <a href="/#">About Me</a>
        <a href="/#">Portfolio</a>
        <a href="/#">Contact</a>
        <a href="/#">Resume</a>
        <button className= "nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className= "nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}

export default Navigation;
