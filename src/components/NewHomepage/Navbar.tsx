import { useState } from "react";
import "./styles.scss"
import Logo from "../../assets/Images/New-homepage/logo.svg"

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);


    return (
        <nav className='navbar'>
            <img src={Logo} alt="logo" />
            <div className="nav-item-container">
                <div className={`${isMobile ? "" : "three-dashs-menu-mobile"}`} 
                onClick={() => setIsMobile(!isMobile)}>
                    <div className="hamburger">
                        <a className={`${isMobile ? "main-nav-toggle active" : "main-nav-toggle"}`}>
                            <span></span>
                        </a>
                    </div>

                </div>
                
                <ul className={`${isMobile ? "nav-items-mobile" :  "navbar-items"}`}>
                    <li>Home</li>
                    <li>News</li>
                    <li>Popular</li>
                    <li>Treding</li>
                    <li>Categories</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar