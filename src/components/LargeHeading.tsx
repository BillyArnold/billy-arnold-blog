import { motion } from "framer-motion";

const LargeHeading = (props: any) => {
  const classes =
    "w-full px-5 md:px-20 pb-20 font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl " +
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
      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        variants={container}
      >
        <div className={classes}>
          <div className="overflow-hidden">
            {line1.split("").map((char: string, index: number) => {
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
          <div className="overflow-hidden">
            {line2.split("").map((char: string, index: number) => {
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
        </div>
      </motion.div>
    </>
  );
};

export default LargeHeading;
