import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Contact = (props: any) => {
  const classes =
    "flex flex-col relative justify-center w-full px-5 md:px-20 pb-20 font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl min-h-[40vh] md:min-h-[50vh] " +
    props.className;

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duration: 1.7,
      },
    },
  };

  const line1 = props.lineOne;
  const line2 = props.lineTwo;

  return (
    <>
      <div id="contact" className={classes}>
        <AiOutlineArrowLeft className="text-emeraldGreen hidden lg:block absolute right-5 md:right-20 bottom-[11rem]  xl:bottom-[10rem] md:text-8xl lg:text-9xl" />

        <div className="block-highlight absolute h-0 w-3 left-0 top-0 bg-emeraldGreen transition-all duration-500 ease-in-out"></div>
        <p className="text-2xl mb-8">Send me a message</p>

        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={container}
        >
          <div
            className="overflow-hidden cursor-pointer"
            onClick={() => {
              window.open("mailto:hello@billyarnold.co.uk");
            }}
          >
            {line1.split("").map((char: any, index: number) => {
              return (
                <motion.span
                  className="inline-block"
                  key={char + "-" + index}
                  variants={letter}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
          <div
            className="overflow-hidden cursor-pointer"
            onClick={() => {
              window.open("mailto:hello@billyarnold.co.uk");
            }}
          >
            {line2.split("").map((char: any, index: number) => {
              return (
                <motion.span
                  className="inline-block"
                  key={char + "-" + index}
                  variants={letter}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
