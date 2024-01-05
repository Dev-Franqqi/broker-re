import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import Dashboardmenu from "@/mycomps/Dashboardmenu";
import Dashboardskeleton from "@/mycomps/Dashboardskeleton";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import supabase from "@/supabase";
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

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [darkmode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState<string>();
  const [mydetails, setMydetails] = useState<Myuser>();
  const [btc, setBTC] = useState<number>();
  const logoutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw Error("unable to logout");
    } else {
      Cookies.remove("User");
      navigate("/signin");
    }
  };
  const turnOnDarkMode = () => {
    Cookies.set("dark", "true", { expires: 7 });
    setDarkMode(true);
  };
  const turnOffDarkMode = () => {
    Cookies.set("dark", "false", { expires: 7 });
    setDarkMode(false);
  };

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  useEffect(() => {
    async function usdToBTC(amount: number) {
      try {
        // Fetch the latest Bitcoin data from the CoinGecko API
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const rate = data.bitcoin.usd;

        // Convert the amount to Bitcoin
        const btcAmount = parseFloat((amount / rate).toFixed(8));

        // Assuming setBTC is a function that sets the Bitcoin amount
        setBTC(btcAmount);
        console.log(btc);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const mode = Cookies.get("dark");

    if (mode) {
      setDarkMode(mode === "true");
    }

    const fetchUserByEmail = async () => {
      const userCookie = Cookies.get("User");

      if (userCookie) {
        // Parse the JSON string into an object
        const user = JSON.parse(userCookie);
        console.log(user);
        setEmail(user?.user?.email);
      } else {
        navigate("/signin");
        return; // Exit the function early if there's no userCookie
      }

      if (email) {
        try {
          const { data, error } = await supabase
            .from("Brokerusers")
            .select("*")
            .eq("email", email)
            .limit(1)
            .single();

          if (error) {
            console.error(error);
            return; // Exit the function early if there's an error
          }
          return data;
        } catch (error) {
          console.error(error);
        }
      }
    };

    const fetchDataAndSetState = async () => {
      try {
        const userDetails = await fetchUserByEmail();
        Cookies.set("Person", JSON.stringify(userDetails));

          // Set the state based on the result
        usdToBTC(userDetails.balance);
          
        setMydetails(userDetails);

        if (userDetails) {
          setLoading(false);
        }

        console.log(email);
        console.log(userDetails);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function
    fetchDataAndSetState();
  }, [email]);

  return (
    <div className={darkmode ? "h-screen dark" : "h-screen"}>
      {loading ? (
        <Dashboardskeleton />
      ) : (
        <>
          <nav className="flex shadow-lg  justify-between p-4 dark:bg-blue-900 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>

            <header className="font-bold text-center ml-6">Dashboard</header>

            <Button
              variant={"link"}
              className="text-blue-600 dark:text-blue-400 hover:no-underline bg-none font-medium text-right "
              onClick={logoutHandler}
            >
              Log out
            </Button>
          </nav>
          <Dashboardmenu isVisible={isVisible} darkmode={darkmode} />

          <main className=" px-2 py-9 dark:bg-blue-900 dark:text-white">
            <div className=" flex justify-between p-1 rounded-md  border-neutral-200 w-full   ">
              <div className=" flex">
                <Avatar className="mt-1 ">
                  <AvatarFallback className="font-semibold">
                    {mydetails?.firstname[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-2 mt-1">
                  <p className="font-semibold">
                    {mydetails?.firstname + " " + mydetails?.lastname}
                  </p>
                  <p className="text-xs font-light">Personal account</p>
                </div>
              </div>
              {!darkmode && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={turnOnDarkMode}
                  className={"w-6 h-6"}
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
                  className={"w-6 h-6"}
                  onClick={turnOffDarkMode}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </div>

            <div className=" bg-blue-500 dark:text-white  text-white mt-3 p-4 rounded-lg shadow-md mb-5 pt-14">
              <div className="flex justify-between text-xs font-medium">
                <p>CURRENT BALANCE</p>
                <p>BTC BALANCE</p>
              </div>
              <div className="flex justify-between text-2xl font-semibold">
                <p>${mydetails?.balance + ".00"}</p>
                <p>{btc}</p>
              </div>
            </div>

            {/* <section className="flex justify-between w-4/5 mt-4  mx-auto">
            <div className="border dark:border-gray-200 shadow-sm rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
              <p className="text-xs font-medium ">Deposit</p>
            </div>
            <div className="border shadow-sm rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 font-extrabold mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              <p className="text-xs font-medium ">Transfer</p>
            </div>

            <div className="border shadow-sm rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              <p className="text-xs font-medium">Withdraw</p>
            </div>
          </section> */}

            <section className="p-3 mt-3">
              <h1 className="font-bold">Transactions</h1>
              <Table className="mt-5">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </section>
          </main>
        </>
      )}
    </div>
  );
}
