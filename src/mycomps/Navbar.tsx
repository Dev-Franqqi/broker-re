import Logo from "../assets/Ellipse 9.png"
import { Link } from "react-router-dom"
type Props = {
  on: boolean;
  onClick: () => void;
};
export default function Navbar({ on, onClick }:Props) {
  
    
    return (
      <nav className="flex justify-between px-3 p-2 z-10 sticky top-0 bg-white mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={onClick}
          className={on ? "hidden" : "w-6 h-6"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={onClick}
          className={on ? "w-6 h-6" : "hidden"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <div className="flex ">
          <img src={Logo} className=" scale-50 " width={30} alt="" />
          <header className="font-bold tracking-wide">CRYPTONETVERSE</header>
        </div>

        <Link
          className={"font-semibold text-blue-700"}
          to="/signin"
        >
          Login
        </Link>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={on ? "w-6 h-6" : "hidden"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg> */}
      </nav>
    );
}