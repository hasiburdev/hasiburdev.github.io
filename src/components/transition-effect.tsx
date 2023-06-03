import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        initial={{ x: "100%", width: "100%" }}
        className="fixed bottom-0 right-full top-0 z-30 w-screen bg-primary"
      ></motion.div>
      <motion.div
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.2,
        }}
        initial={{ x: "100%", width: "100%" }}
        className="fixed bottom-0 right-full top-0 z-20 w-screen bg-light"
      ></motion.div>
      <motion.div
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.4,
        }}
        initial={{ x: "100%", width: "100%" }}
        className="fixed bottom-0 right-full top-0 z-10 w-screen bg-dark"
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
