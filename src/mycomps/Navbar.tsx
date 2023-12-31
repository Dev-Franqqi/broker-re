import Logo from "../assets/Ellipse 9.png"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
type Props = {
  on: boolean;
  onClick: () => void;
  darkmode: boolean,
  setdarkmode: React.Dispatch<React.SetStateAction<boolean>>
};
export default function Navbar({ on, onClick,darkmode,setdarkmode }:Props) {
  
  const turnOnDarkMode = () => {
    Cookies.set('dark', 'true', { expires: 7 })
    setdarkmode(true)
      }
  const turnOffDarkMode = () => {
    Cookies.set('dark', 'false', { expires: 7 })
    setdarkmode(false)
      }
    return (
      <nav className="flex justify-between px-3 p-2 z-10 sticky top-0 bg-white dark:bg-black dark:text-white mb-10">
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
          className={on ? "hidden" : "font-semibold dark:text-blue-300 text-blue-700"}
          to="/signin"
        >
          Login
        </Link>
        {!darkmode && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={turnOnDarkMode}
            className={on ? "w-6 h-6" : "hidden"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}

        {darkmode && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={on ? "w-6 h-6" : "hidden"}
            onClick={turnOffDarkMode}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        )}
      </nav>
    );
}