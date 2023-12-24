import Menuimage from "../assets/Menu.svg"
import Logo from "../assets/Ellipse 9.png"
import { Link } from "react-router-dom";
export default function Navbar() {
    
    return (
      <nav className="flex justify-between px-3 p-2 sticky top-0 bg-white mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>

        <div className="flex ">
                <img src={Logo} className=" scale-50 " width={30} alt="" />
                <header className="font-bold tracking-wide">CRYPTONETVERSE</header>
          
            </div>
            
            <Link className="font-semibold text-blue-700" to="#">Login</Link>

        
      </nav>
    );
}