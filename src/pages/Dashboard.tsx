// import Cardimage from "../assets/Group 36.svg"
import { Link } from "react-router-dom"
export default function Dashboard() {
    return (
      <>
        <nav className="flex justify-between p-4">
          <div className="w-2/6"></div>
          <header className="font-bold text-center w-2/6 ">Dashboard</header>

          <Link className="text-blue-600 font-semibold text-right w-2/6" to="#">
            Log out
          </Link>
        </nav>

        <main className="px-4">
          <div className="my-5 flex justify-between p-1 rounded-md  border-neutral-200 w-full ">
            <div className=" flex">
              <div className="bg-gray-400 rounded-full text-center py-2 text-2xl text-white w-12 h-12">
                F
              </div>
              <div className="ml-2 mt-1">
                <p className="">Franklin Ebi</p>
                <p className="text-xs">Personal account</p>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={"w-6 h-6 mt-2"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
                </div>
                <div className="border-2 rounded-md px-3 pt-10 pb-3">
                    <div className="flex justify-between text-xs font-medium">
                        <p>
                            CURRENT BALANCE
                        </p>
                        <p>BTC BALANCE</p>
                    </div>
                    <div className="flex justify-between text-2xl font-semibold">
                        <p>$5,200.00</p>
                        <p>0.0023442</p>
                    </div>
                </div>


                <section className="px-2 mt-3">
                    <h1 className="font-semibold">Transaction</h1>
                </section>
        </main>
      </>
    );
}