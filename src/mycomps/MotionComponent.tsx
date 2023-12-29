
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
type Props = {
  isVisible:boolean
}
const MotionComponent = ({ isVisible }:Props) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed top-10 left-0 h-screen w-full bg-blue-900 p-4 text-white transform-origin-left overflow-hidden z-10`}
          initial={{ x: "-100%" }}
          animate={{ x: 0, transition: { type: "tween", duration: 0.3 } }}
          exit={{ x: "-100%", transition: { type: "tween", duration: 0.3 } }}
        >
          <div className="text-center flex flex-col items-center mt-10">
            <Link to="/" className="font-bold mb-10">
              Home
            </Link>
            <Link to="#" className="font-bold mb-10">
              About
            </Link>
            <Link to="#" className="font-bold mb-10">
              Market
            </Link>
            <Link to="/signup" className="font-bold">
              Signup
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MotionComponent;
