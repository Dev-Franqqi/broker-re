
import { useState, useEffect } from "react";
import Navbar from "./mycomps/Navbar";
import Icongroup from "./assets/icongroup.png"
import { useInView } from "react-intersection-observer";
import { motion ,useAnimation} from "framer-motion";
const App = () => {
   const controls1 = useAnimation();
   const controls2 = useAnimation();
   const [ref1, inView1] = useInView();
   const [ref2, inView2] = useInView();
  const [loading, setLoading] = useState(true);

  
  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -100, opacity: 0 },
  };


  useEffect(() => {
    // Simulate a delay of 2 seconds
    const delay = 2000;

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);
   if (inView1) {
      controls1.start("visible");
    }
   if (inView2) {
      controls2.start("visible");
    }
  


    // Clear the timeout if the component is unmounted before the delay is over
    return () => clearTimeout(timer);
  }, [controls1, controls2,inView1,inView2]); // The empty dependency array ensures this effect runs only once

  return (
    <div className="screen">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-5 h-5 animate-ping rounded-full bg-blue-900"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />

          <h1 className="homePageHeader mb-3">
            BEGIN YOUR TRADING AND INVESTMENT JOURNEY
          </h1>
          <p className="typo2 mb-3">
            We also buy and sell cryptocurrencies and giftcards. Enjoy smooth
            and hassle-free trading with Cryptonetverse
          </p>
          <img src={Icongroup} alt="" className="mx-auto mb-3" />

          <h2 className=" text-black text-center font-inter text-lg font-bold tracking-wider mt-4 mb-2">
            WE PUT OUR INVESTORS FIRST
          </h2>

          <p className="text-black text-center font-inter text-base font-normal tracking-wide w-4/5 mx-auto">
            We are committed to providing exceptional service to all our
            investors while providing the best education to our team.
          </p>

          <p className="text-black text-center font-inter text-xs font-normal tracking-wider mx-2">
            Cryptonetverse An international online broker actively involved in
            Crypto & Stocks Trading. With our advanced web-based trading
            platform, you can trade on the most comprehensive list of assets in
            the industry.. Trade on the most comprehensive list of assets in the
            industry with our advanced web-based trading platform.. Keep your
            trading costs low with competitive spreads, commissions, and low
            margins. Check out spreads on our most popular cash instruments.
          </p>

          <div className="bg-purple-100 mt-3 py-6 px-3 ">
            <h3 className="text-black text-center font-inter text-xl font-bold tracking-wider">
              EXPERIENCE MORE THAN JUST TRADING
            </h3>

            <p className="text-black text-center font-inter text-base font-normal tracking-wider mt-3">
              We follow a very strict and disciplined investment process because
              we understand that we are working with our customers' money.
              Investments mean a lot to us, and we respect the trust of our
              customers.
            </p>
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={variants}
              transition={{ duration: 0.2, delay: 0.5 }}
              className="w-[245.11px] h-[166px] relative mt-7"
            >
              <div className="w-[10.14px] h-[57px] left-0 top-0 absolute bg-indigo-600" />
              <div className="w-[154.80px] h-[49px] left-[21.19px] top-[4px] absolute">
                <span className="text-black text-base font-bold font-['Inter'] leading-[23px] tracking-wider">
                  ECONOMIC
                  <br />
                </span>
                <span className="text-black text-sm font-medium font-['Inter'] leading-[23px] tracking-wider">
                  Analysis
                </span>
              </div>
              <div className="w-[234.97px] left-[10.14px] top-[91px] absolute text-black text-xs font-normal font-['Inter'] tracking-wide">
                Stay one step ahead with leading market analysis. Keep your
                trading costs low with competitive spreads, commissions, and low
                margins.
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              initial="hidden"
              animate={controls2}
              variants={variants}
              transition={{ duration: 0.2, delay: 1 }}
              className="w-[245.11px] h-[181px] relative mt-4"
            >
              <div className="w-[10.14px] h-[57px] left-0 top-0 absolute bg-indigo-600" />
              <div className="w-[154.80px] h-[49px] left-[21.19px] top-[4px] absolute">
                <span className="text-black text-base font-bold font-['Inter'] leading-[23px] tracking-wider">
                  TECHNICAL
                  <br />
                </span>
                <span className="text-black text-sm font-medium font-['Inter'] leading-[23px] tracking-wider">
                  Analysis
                </span>
              </div>
              <div className="w-[234.97px] left-[10.14px] top-[91px] absolute text-black text-xs font-normal font-['Inter'] tracking-wide">
                Real-time and detailed data monitoring for trades, stocks, and
                binaries with clear graphical representation. Additional
                reference for users with pool data.
              </div>
            </motion.div>

            <section>
              <h3 className="text-black text-center font-inter text-base font-bold tracking-wide mt-4">
                ACCESS OUR FINANCIAL MARKETS
              </h3>

              <div className="rounded-full bg-blue-500 bg-opacity-49 filter blur-xl">
                ''
              </div>
            </section>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
