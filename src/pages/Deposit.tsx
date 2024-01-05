import Cookies from "js-cookie";
import Cryptoiconsimg from "../assets/cryptoicons.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cardoptionsimg from "../assets/card.png"
import Btc from "../assets/btc.png"
import Eth from "../assets/eth.png"
import Usdt from "../assets/usdt.png"

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
export default function Deposit() {
    const [darkmode ,setDarkmode] = useState<boolean>(false)
    const navigate = useNavigate()
   
    useEffect(() => {

        const dark = Cookies.get("dark")
        if (dark) { if (dark == 'true'){
            setDarkmode(true)
        } else {
            setDarkmode(false)
        }
        }
        
        const user = Cookies.get('User')
        if (!user) {
            navigate('/signin')
            
        }
        
        
    },[])
    return (
      <>
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

          <header className="font-semibold">Deposit</header>

          <div></div>
        </nav>

        <main className="pt-10 px-4 ">
          <h1 className="text-center font-semibold mb-3">
            Select Deposit Method
          </h1>

          <section>
            <Drawer >
              <DrawerTrigger className="w-screen h-fit active:border-none active:border-red-500 focus:border-none focus:border-red-300">
                <div className="flex items-center justify-between px-2 border-black border bg-gray-100 rounded-md  text-sm">
                  <p className="text-sm">Via Crypto tokens</p>
                  <img src={Cryptoiconsimg} className="w-16" alt="" />
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Copy wallet address</DrawerTitle>
                  <DrawerDescription>
                    Make payments into the defined token wallets
                  </DrawerDescription>

                  <div className="mt-4">
                    <div className="flex justify-between">
                      <img src={Btc} alt="" />
                      <p className="">
                        1xijdee90ejdkddfkjfsf
                      </p>
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
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between mt-2">
                      <img src={Eth} alt="" />
                      <p  className="">
                        1xijdee90ejdkddfkjfsf
                      </p>
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
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between mt-3">
                      <img src={Usdt} alt="" />
                      <p  className="">
                        1xijdee90ejdkddfkjfsf
                      </p>
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
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                    </div>
                  </div>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <div className="flex items-center justify-between px-2 py-3 border border-black bg-gray-100 rounded-md  mt-2 text-sm">
              <p className="text-sm">Via Card </p>
              <img src={Cardoptionsimg} className="w-24" alt="" />
            </div>
          </section>
        </main>
      </>
    );
}