import Logo from "../assets/Ellipse 9.png"
import { Input } from "@/components/ui/input"
import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FormEvent } from "react"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import supabase from "@/supabase"
import { useNavigate } from "react-router-dom"
export default function Signup() {
    const navigate = useNavigate()
    const [darkmode,setDarkmode] = useState(false)
      const [firstname, setFirstname] = useState<string>("");
      const [lastname, setLastname] = useState<string>("");
      const [email, setEmail] = useState<string>("");
      const [password, setPassword] = useState<string>("");
      const [confirm, setConfirm] = useState<string>("");
      const [country, setCountry] = useState<string>("");
      const [phone, setPhone] = useState<string>("");
      const [errorMessage, setErrorMessage] = useState<string | null>(null);
      const [isLoading, setIsLoading] = useState<boolean>(false);

      const comparePassword = (a: string, b: string) => {
        if (!(a === b)) {
          setErrorMessage("Passwords do not match");
          throw new Error("passwords do not match");
        }
      };
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();

        if (
          firstname === "" ||
          lastname === "" ||
          email === "" ||
          password === "" ||
          confirm === "" ||
          country === "" ||
          phone === ""
        ) {
          setErrorMessage("Please fill in all fields");
          setIsLoading(false);
        }

        comparePassword(password, confirm);

        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });

        if (error) {
          
          setErrorMessage(error.message);
          setIsLoading(false);
        } else {
          const { data: insertdata, error: insertError } = await supabase
            .from("Brokerusers")
            .insert({
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
              country: country,
              phone: phone,
              userid:data?.user?.id
            });

          if (insertError) {
           

            setErrorMessage(insertError.details);
            setIsLoading(false);
          } else {
            console.log(insertdata);
            Cookies.set("User", JSON.stringify(data), { expires: 7 });
            setIsLoading(false);
            navigate('/dashboard');
          }
        }
      };
    useEffect(() => {
      const mode = Cookies.get("dark");
      if (mode) {
        if (mode === "true") {
          setDarkmode(true);
        } else {
          setDarkmode(false);
        }
      }
        const userCookie = Cookies.get("User");
        if (userCookie) {
          navigate("/dashboard");
        }
  
    }, []);
    return (
      <div className={darkmode ? "dark dark:bg-black" : ""}>
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

          {errorMessage && (
            <div className="text-red-600 dark:bg-white w-fit p-3 ">
              {errorMessage}
            </div>
          )}

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
              disabled={isLoading}
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