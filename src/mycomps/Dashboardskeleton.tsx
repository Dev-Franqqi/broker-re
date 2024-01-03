import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
export default function Dashboardskeleton() {
    return (
      <div className="h-screen">
        <nav className="flex shadow-lg  justify-between p-5 dark:bg-blue-900 dark:text-white">
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

          <header className="font-bold text-center ml-6">Dashboard</header>

          <Link
            className="text-blue-600 dark:text-blue-400 font-medium text-right"
            to="#"
          >
            Log out
          </Link>
        </nav>
        <main className=" px-2 py-9 dark:bg-blue-900 h-full dark:text-white">
          <div className="flex justify-between">
            <div className="flex pt-5 items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>

            <Skeleton className="w-7 h-7 mt-5 rounded-full" />
          </div>

          <Skeleton className="  dark:text-white  text-white mt-3 p-4 rounded-lg shadow-md mb-5 pt-14">
            <div className="flex justify-between  mb-2">
              <Skeleton className="w-[100px] h-4" />
              <Skeleton className="w-[100px] h-4" />
            </div>
            <div className="flex justify-between ">
              <Skeleton className="w-[150px] h-8" />
              <Skeleton className="w-[150px] h-8" />
              
            </div>
                </Skeleton>
                

                <Skeleton className="w-[120px] ml-2 h-4 mt-6" />
                
                <section className="mt-5">
                    <div className=" flex justify-between px-2 py-6 mx-auto border rounded-md dark:border-none border-gray-100">
                        <Skeleton  className="w-[200px] h-4"/>
                        <Skeleton  className="w-[100px] h-4"/>
                    </div>
                    <div className=" mt-3 flex justify-between px-2 py-6 mx-auto border dark:border-none rounded-md border-gray-100">
                        <Skeleton  className="w-[200px] h-4"/>
                        <Skeleton  className="w-[100px] h-4"/>
                    </div>
                </section>
        </main>
      </div>
    );
}
