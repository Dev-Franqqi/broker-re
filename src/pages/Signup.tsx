import Logo from "../assets/Ellipse 9.png"
import { Input } from "@/components/ui/input"
import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FormEvent } from "react"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
export default function Signup() {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    const [country,setCountry] = useState('')
    const [phone,setPhone] = useState('')
    const [error,setError] = useState<string|null>();
    const [isloading,setIsloading] = useState<boolean>()
    const [darkmode,setDarkmode] = useState(false)
    const confirmPassword = (a:string,b:string) =>{
        if(a!==b){
            setError("Passwords do not match")
            throw  Error
        }else{
            return
        }

    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsloading(true)
        confirmPassword(password,confirm)

  }
  
    useEffect(() => {
      const mode = Cookies.get("dark");
      if (mode) {
        if (mode === "true") {
          setDarkmode(true);
        } else {
          setDarkmode(false);
        }
      }
    }, []);
    return (
      <div className={darkmode?"dark dark:bg-black":""}>
        <nav className="flex justify-between  sticky top-0 px-3 p-2 bg-white z-10 dark:bg-black dark:text-white">
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

          <div className="flex relative -left-3 ">
            <img src={Logo} className=" scale-50 " width={30} alt="" />
            <header className="font-bold tracking-wide">CRYPTONETVERSE</header>
          </div>
          <div></div>
        </nav>

        <main className="dark:bg-black dark:text-white relative h-full p-5 py-10 ">
          <h1 className="font-bold text-2xl text-center">SIGNUP</h1>
          {error && <div className="text-red-500">{error}</div>}
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex gap-x-2 mb-4">
              <div className="w-3/6">
                <label>Firstname</label>
                <Input
                  className="dark:border-white  rounded border-2"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>

              <div className="w-3/6">
                <label>Lastname</label>
                <Input
                  className=" p-2 rounded border-2 dark:border-white"
                  type="text"
                  value={lastname}
                  
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email">Email address</label>
              <Input
                className="rounded border-2 dark:border-white"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <Input
                className="dark:border-white rounded border-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Confirm password">Confirm Password</label>
              <Input
                className="dark:border-white rounded border-2"
                type="text"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Country">Country</label>
              <Input
                className="dark:border-white rounded border-2"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Phone">Phone</label>
              <Input
                className="dark:border-white rounded border-2"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <Button
              disabled={isloading}
              className="bg-blue-500 block  text-white w-3/5 mx-auto mt-3"
              type="submit"
            >
              SUBMIT
            </Button>
          </form>
        </main>
        <p className="dark:bg-black dark:text-white text-center pt-3 text-gray-600">
          Already Have an Account?{" "}
          <Link to="/signin" className="font-semibold text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    );
}