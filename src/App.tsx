
import { useState, useEffect } from "react";
import Navbar from "./mycomps/Navbar";
import { useInView } from "react-intersection-observer";
import { motion ,useAnimation} from "framer-motion";
import { Button } from "./components/ui/button";
import Cryptolist from "./mycomps/Cryptolist";
import MotionComponent from "./mycomps/MotionComponent";
import Cookies from "js-cookie"
const App = () => {

  const [darkMode ,setDarkMode] = useState(false);
   const controls1 = useAnimation();
   const controls2 = useAnimation();
   const [ref1, inView1] = useInView();
   const [ref2, inView2] = useInView();
  const [loading, setLoading] = useState(true);

  const [isOn, setIsOn] = useState(false);
  
  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -100, opacity: 0 },
  };
  
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
      setIsVisible(!isVisible);
      setIsOn(!isOn);
      
    };


  useEffect(() => {


    
    // Simulate a delay of 2 seconds
    const delay = 2000;

    const timer = setTimeout(() => {
      setLoading(false );
    }, delay);
   if (inView1) {
      controls1.start("visible");
    }
   if (inView2) {
      controls2.start("visible");
    }

    const mode = Cookies.get('dark');
    if (mode) {
      if (mode === "true") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
      
    }

    else {
      setDarkMode(false)
    }

   

  


    // Clear the timeout if the component is unmounted before the delay is over
    return () => clearTimeout(timer);
  }, [controls1, controls2,inView1,inView2]); // The empty dependency array ensures this effect runs only once

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={
          isVisible
            ? "overflow-hidden h-screen dark:bg-black dark:text-white"
            : "h-screen dark:bg-black dark:text-white"
        }
      >
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-5 h-5 animate-ping rounded-full dark:bg-white bg-blue-900"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="dark:bg-black dark:text-white"
          >
            <Navbar
              darkmode={darkMode}
              setdarkmode={setDarkMode}
              on={isOn}
              onClick={handleButtonClick}
            />
            <MotionComponent darkmode={darkMode} isVisible={isVisible} />

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="homePageHeader mt-15 font-extrabold"
            >
              BEGIN YOUR TRADING AND INVESTMENT JOURNEY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="typo2 mb-14"
            >
              We also buy and sell cryptocurrencies and giftcards. Enjoy smooth
              and hassle-free trading with Cryptonetverse
            </motion.p>
            {/* <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            src={Icongroup}
            alt=""
            className="mx-auto mb-3"
          /> */}
            <Cryptolist />

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className=" dark:text-white text-black text-center font-inter text-xl font-bold  mt-10"
            >
              WE PUT OUR INVESTORS FIRST
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="mb-20 mt-4 text-center font-inter text-base font-normal tracking-wide w-4/5 mx-auto"
            >
              We are committed to providing exceptional service to all our
              investors while providing the best education to our team.
            </motion.p>

            {/* <p className="text-black text-center font-inter text-xs font-normal tracking-wider mx-2">
            Cryptonetverse An international online broker actively involved in
            Crypto & Stocks Trading. With our advanced web-based trading
            platform, you can trade on the most comprehensive list of assets in
            the industry.. Trade on the most comprehensive list of assets in the
            industry with our advanced web-based trading platform.. Keep your
            trading costs low with competitive spreads, commissions, and low
            margins. Check out spreads on our most popular cash instruments.
          </p> */}

            <div className="bg-gray-200 dark:bg-blue-900 dark:text-white mt-10 py-10 h-fit px-3 ">
              <h3 className=" text-center font-inter text-xl font-bold tracking-wider">
                EXPERIENCE MORE THAN JUST TRADING
              </h3>

              <p className=" text-center font-inter text-base font-normal  mt-3 mb-10">
                We follow a very strict and disciplined investment process
                because we understand that we are working with our customers'
                money. Investments mean a lot to us, and we respect the trust of
                our customers.
              </p>
              <motion.div
                ref={ref1}
                initial="hidden"
                animate={controls1}
                variants={variants}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="w-[245.11px] h-fit mt-7 mb-2"
              >
                <div className="flex gap-2">
                  <div className="w-[10.14px] h-[57px]  bg-indigo-600" />
                  <div className="w-[154.80px] h-[49px] ">
                    <span className=" font-bold leading-[23px]">
                      ECONOMIC
                      <br />
                    </span>
                    <span className="  font-medium leading-[23px]">
                      Analysis
                    </span>
                  </div>
                </div>

                <div className="w-[234.97px] left-[10.14px] ">
                  Stay one step ahead with leading market analysis. Keep your
                  trading costs low with competitive spreads, commissions, and
                  low margins.
                </div>
              </motion.div>

              <motion.div
                ref={ref2}
                initial="hidden"
                animate={controls2}
                variants={variants}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="w-[245.11px] h-fit  mt-8"
              >
                <div className="flex gap-2">
                  <div className="w-[10.14px] h-[57px]  bg-indigo-600 " />
                  <div className="w-[154.80px] h-[49px] ">
                    <span className=" font-bold  leading-[23px]">
                      TECHNICAL
                      <br />
                    </span>
                    <span className=" font-medium leading-[23px] ">
                      Analysis
                    </span>
                  </div>
                </div>

                <div className="w-[234.97px]">
                  Real-time and detailed data monitoring for trades, stocks, and
                  binaries with clear graphical representation. Additional
                  reference for users with pool data.
                </div>
              </motion.div>
            </div>

            <section className="px-2 p-20 text-center ">
              <h3 className="text-xl font-bold mb-5">
                ACCESS OUR FINANCIAL MARKETS
              </h3>
              <p className=" text-s">
                Bitcoin is the first decentralized digital currency. This
                cryptocurrency was created in 2009. It was first mentioned on
                October 31, 2008, when a person named Satoshi Nakamoto, who is
                considered the founder of Bitcoin, published a paper titled
                Bitcoin: A Peer-to-Peer Electronic Cash System. Bitcoin ushered
                in an entirely new era of cryptocurrencies and has gained
                popularity among individual traders and large investors. Leading
                trading venues such as the CME Group and CBOE Global Markets
                have already introduced trading in Bitcoin futures.
              </p>
            </section>

            <section id="market" className="p-10 ">
              <h3 className="text-center font-bold text-xl mb-10">
                ACCOUNT TYPES
              </h3>

              <div className="text-center border px-4 py-9 text-sm rounded-md mb-7 dark:border-white">
                <p className="font-semibold">STARTER</p>
                <p className="font-bold text-2xl mb-3 ">1000 $/EUR</p>
                <ul className="leading-8 mb-6">
                  <li>
                    Trading Instruments: 36 currency pairs, metals,
                    cryptocurrencies
                  </li>
                  <li>Spread: Floating from 1.3 pips</li>
                  <li>Maximum Leverage: 1:2000</li>
                  <li>Return on Investment:10%</li>
                  <li>Deposit Bonuses: All Offers</li>
                </ul>

                <Button className="bg-blue-600 dark:bg-white font-semibold dark:text-blue-600">
                  Choose Plan
                </Button>
              </div>
              <div className="text-center border px-4 py-9 text-sm rounded-md mb-7 dark:border-white">
                <p className="font-semibold">BASIC</p>
                <p className="font-bold text-2xl mb-3"> 5000 $/EUR</p>
                <ul className="mb-6 leading-8">
                  <li>
                    Trading Instruments: 36 currency pairs,CFDs on US
                    stocks,CFDs on indices,CFDs on oil, cryptocurrencies
                  </li>
                  <li>Spread: Floating from 1.3 pips</li>
                  <li>Maximum Leverage: 1:2000</li>
                  <li>Return on Investment:15%</li>
                  <li>Deposit Bonuses: All Offers</li>
                </ul>

                <Button className="dark:bg-white dark:text-blue-600 font-semibold bg-blue-600">
                  Choose Plan
                </Button>
              </div>
              <div className="text-center border px-4 py-9 text-sm rounded-md mb-7 dark:border-white">
                <p className="font-semibold">PREMIUM</p>
                <p className="font-bold text-2xl mb-3">10,000 $/EUR</p>
                <ul className="mb-6 leading-8">
                  <li>
                    Trading Instruments: 36 currency pairs,CFDs on US
                    stocks,CFDs on indices,CFDs on oil, cryptocurrencies
                  </li>
                  <li>Spread: Floating from 1.3 pips</li>
                  <li>Maximum Leverage: 1:500</li>
                  <li>Return on Investment:20%</li>
                  <li>Deposit Bonuses: All Offers</li>
                  <li>Loyalty Bonuses: All Offers</li>
                </ul>

                <Button className="bg-blue-600 dark:bg-white dark:text-blue-600 font-semibold">
                  Choose Plan
                </Button>
              </div>
            </section>
            <section className="py-10 text-center px-5">
              <h3 className="text-center font-bold text-2xl mb-6">
                Start Trading With Cryptonetverse
              </h3>
              <p className="text-lg mb-8">
                Fast Account Opening in 3 easy steps
              </p>

              <div className="text-sm mt-4 mb-8">
                <div className="w-20 h-20 mx-auto rounded-full text-white text-3xl py-6 mb-2 dark:bg-blue-600  bg-blue-300">
                  1
                </div>
                <p className="font-medium">Registration</p>
                <p>Create an account on our trading platform today</p>
              </div>
              <div className="text-sm mb-8">
                <div className="w-20 h-20 mx-auto rounded-full text-white text-3xl dark:bg-blue-600 py-6 mb-2 bg-blue-300">
                  2
                </div>

                <p className="font-medium">Funding</p>
                <p>Fund your account with a variety of deposit methods</p>
              </div>

              <div className="text-sm mb-8">
                <div className="w-20 h-20 mx-auto rounded-full text-white text-3xl py-6 mb-2 dark:bg-blue-600 bg-blue-300">
                  3
                </div>

                <p className="font-medium">Trade</p>
                <p>
                  Access over 180 instruments across all asset classes within
                  the platform
                </p>
              </div>

              <div className="mt-10">
                <div className="mb-5">
                  <p className="text-2xl font-bold">7.12 ms</p>
                  <p className="text-sm font-medium">AVERAGE EXECUTION SPEED</p>
                </div>

                <div className="mb-5">
                  <p className="text-2xl font-bold">12+</p>
                  <p className="text-sm font-medium">
                    INTEGRATED LIQUIDITY PROVIDERS
                  </p>
                </div>

                <div className="mb-14">
                  <p className="text-2xl font-bold">12,000+</p>
                  <p className="text-sm font-meium">
                    ORDERS EXECUTED PER SECOND
                  </p>
                </div>
              </div>

              <Button className="bg-blue-600 dark:bg-white dark:text-blue-900 font-semibold">
                Set Up Your Trading Account
              </Button>

              <p className="text-gray-400">
                Registration takes only 40 seconds!
              </p>
            </section>

            <section className="mt-20 py-8 px-3 mb-5">
              <h4 className="text-3xl font-bold mb-4">
                Connect with Global Capital Markets
              </h4>
              <p>
                Trade binary options with the best platform, a wide selection of
                assets, high payouts, lightning-fast order execution, and get
                personalized customer support around the clock, fast
                withdrawals, and the expertise of industry leaders.
              </p>
            </section>

            <footer id="contact" className="p-4 bg-blue-400 dark:bg-blue-700 text-white">
              <h5 className="text-2xl mb-3 font-bold">Cryptonetverse</h5>

              <p>
                We want you to not only trade with global financial markets but
                also with a simple and user-friendly online platform.
              </p>

              <div>
                <div className="mb-10 mt-10">
                  <h5 className="text-lg">Useful Links</h5>

                  <ul className="text-sm">
                    <li>About</li>
                    <li>Features</li>
                    <li>Process</li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <div>
                  <h5 className="text-lg">Market</h5>

                  <ul className="text-sm">
                    <li>Forex</li>
                    <li>Indices</li>
                    <li>Commodities</li>
                  </ul>
                </div>
              </div>

              <div>
                <h5 className="text-lg">Contact</h5>
                <ul className="text-sm">
                  <li>Alphaminers6@gmail.com</li>
                  <li>+129394933</li>
                  <li>Georgia, CA 92100</li>
                </ul>
              </div>
            </footer>
            <p className="bg-blue-400 dark:bg-blue-700 text-white text-center text-sm pb-4">
              &copy; Cryptonetverse 2023 All Rights Reserved
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default App;
