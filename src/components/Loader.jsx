import { motion } from "framer-motion";

const Loader = () => {

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-white text-6xl font-bold"
      >

        TravelGo

      </motion.h1>

    </div>
  );
};

export default Loader;