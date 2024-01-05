import Logo from "../assets/Ellipse 9.png";
import { useState,useEffect } from "react";
import{ Link} from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "@/supabase";
import Cookies from "js-cookie"
export default function Signin() {
  const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [darkmode, setDarkmode] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [isLoading ,setIsLoading] = useState(false)
   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setIsLoading(true);

     const { data, error } = await supabase.auth.signInWithPassword({
       email: email,
       password: password,
     });

     if (error) {
       setErrorMessage(error.message);
       setIsLoading(false);
       return;
     }
     Cookies.set("User", JSON.stringify(data), { expires: 7 });
     navigate("/dashboard");

     setIsLoading(false);
   };
  

  useEffect(() => {


    const checkMode = async () => {
      const mode = await Cookies.get("dark");
        
      
        if(mode) {
          if(mode === "true") {
            setDarkmode(true);
           
          } else {
            setDarkmode(false);
            
          }
      }
      const userCookie = Cookies.get('User');
    if (userCookie) {
      navigate('/dashboard')
      
    }
  
       

    
      
    }

    checkMode()
  
  
  
  },[darkmode])


    
  return (
    <div className={darkmode?"h-screen dark":"h-screen"}>
      <nav className="flex  justify-between px-3 p-2 sticky top-0 z-10 bg-white dark:bg-black dark:text-white ">
        <Link to="/">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <div className="flex relative -left-5">
          <img src={Logo} className=" scale-50 " width={30} alt="" />
          <header className="font-bold tracking-wide">CRYPTONETVERSE</header>
        </div>
        <div></div>
      </nav>

      <main
        className=" dark:bg-black dark:text-white relative py-10 h-full
       px-10"
      >

        {errorMessage && <div className="text-red-600 dark:bg-white w-fit p-3 ">{errorMessage}</div>}
        <h1 className="text-2xl font-bold  dark:text-white text-center">SIGN IN</h1>
        <form className="mt-10" onSubmit={handleSubmit}>
          <Input
            type="email"
            className="border-2 w-full h-12 dark:border-white placeholder:white border-gray-300 p-2 focus:border-gray-200 focus:outline-none focus:ring-0 mb-5"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            className="border-2 dark:border-white w-full h-12 border-gray-300 p-2 focus:border-gray-200 focus:outline-none mb-10 focus:ring-0"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Password"
            required
          />

          <Button
            className="buttonColor w-3/5 block mx-auto dark:bg-blue-400 h-10 semibold text-base  text-white"
            type="submit"
            disabled={isLoading}
          >
            Login
          </Button>
        </form>

        <p className="mt-20 text-center text-gray-600 dark:text-gray-100">
          Don't have an account?{" "}
          <Link className="text-blue-500 dark:text-blue-400 font-semibold" to="/signup">
            Sign up
          </Link>
        </p>
      </main>
    </div>
  );
}
