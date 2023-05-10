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
        className="fixed top-0 bottom-0 right-full w-screen z-30 bg-primary"
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
        className="fixed top-0 bottom-0 right-full w-screen z-20 bg-light"
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
        className="fixed top-0 bottom-0 right-full w-screen z-10 bg-dark"
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
