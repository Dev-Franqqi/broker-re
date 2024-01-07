import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  isVisible: boolean;
  darkmode: boolean;
};
const Dashboardmenu = ({ isVisible, darkmode }: Props) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={
            darkmode
              ? "dark dark:bg-blue-800 fixed mt-7 top-10 left-0 h-screen w-3/5 bg-blue-900 p-4 text-white transform-origin-left overflow-hidden z-10"
              : "fixed top-10 left-0 h-screen w-3/5 mt-7 bg-blue-900 p-4 text-white transform-origin-left overflow-hidden z-10"
          }
          initial={{ x: "-100%" }}
          animate={{ x: 0, transition: { type: "tween", duration: 0.3 } }}
          exit={{ x: "-100%", transition: { type: "tween", duration: 0.3 } }}
        >
                  <ul className="mt-4 font-medium leading-10">
                      <li><Link to="/dashboard/details">Account details</Link></li>
                      <li><Link to="/dashboard/deposit">Deposit</Link></li>
                      <li onClick={()=>alert("Contact your account manager")}>Withdraw</li>
                      
         </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dashboardmenu;
