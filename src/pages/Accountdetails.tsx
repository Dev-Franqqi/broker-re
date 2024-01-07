import { useState,useEffect } from "react"
import Cookies from "js-cookie"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
type Myuser = {
  country: string;
  created_at: string;
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  password: string;
  phone: string;
  userid: string;
  balance: number;
};



export default function Accountdetails() {
  const [darkmode, setDarkMode] = useState<boolean>(false)
  const [user, setUser] = useState<Myuser>()
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
  
    useEffect(() => {
        
      const dark = Cookies.get('dark')
      
        if (dark) {
        


            if (dark === 'true') {
                setDarkMode(true)
            }
            else {
                setDarkMode(false)
        
            }
      }
      
      const person = Cookies.get("Person");
      if (person) {
        setUser(JSON.parse(person))
        console.log(person)
        setLoading(false)
        
      }
      else {
        navigate('/signin')
        
      }
    
    }, [])
  return (
    <div
      className={
        darkmode ? "dark bg-blue-900 text-white h-fit " : "h-screen pb-2"
      }
    >
      <nav className="flex justify-between px-4 py-3">
        <Link to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
          >
            <path
              d="M11 1.69848L9.33162 0L0 9.5L9.33162 19L11 17.3015L3.33676 9.5L11 1.69848Z"
              fill={darkmode ? "white" : "black"}
            />
          </svg>
        </Link>

        <header>Account Settings</header>

        <div></div>
      </nav>

      {loading ? (
        <div>Loading</div>
      ) : (
        <main className="px-3 py-10">
            <Avatar className="mx-auto size-16">
              <AvatarFallback className="text-3xl">
                {user?.firstname[0]}
              </AvatarFallback>
         </Avatar>
          <div className="flex flex-col gap-y-3 mt-3">
            <div>
              <p className="text-sm mb-1">Name</p>
              <div className="ml-{27px} mr-{20px} flex justify-between p-2 rounded-md border-2 border-gray-100">
                <span className=" font-normal">
                  {user?.firstname + " " + user?.lastname}
                </span>

                {/* <span className="">Edit</span> */}
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">Email</p>
              <div className="ml-{27px} mr-{20px} flex justify-between rounded-md border-2 border-gray-100 p-2 no-underline">
                  <span className=" font-normal">{ user?.email}</span>
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">Password</p>
              <div className="ml-{27px} mr-{20px} flex justify-between border-2 border-gray-100 p-2 rounded-md">
                <span className=" font-normal">***********</span>

                {/* <span>Edit</span> */}
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">Country</p>
              <div className="ml-{27px} mr-{20px} flex justify-between border-2 border-gray-100 p-2 rounded-md">
                  <span className=" font-normal">{ user?.country}</span>

                {/* <span>Edit</span> */}
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">Phone</p>
              <div className="ml-{27px} mr-{20px} flex justify-between border-2 border-gray-100 p-2 rounded-md">
                  <span className=" font-normal">{ user?.phone}</span>

                {/* <span>Edit</span> */}
              </div>
            </div>
          </div>

        
        </main>
      )}
    </div>
  );
}
