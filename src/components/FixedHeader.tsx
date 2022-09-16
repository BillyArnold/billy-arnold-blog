import Link from "next/link";
import { motion } from "framer-motion";

const FixedHeader = ({}) => {
  return (
    <>
      <div className="block-highlight  h-3 w-full left-0 top-0 bg-[#686285] transition-all duration-500 ease-in-out"></div>
      <div className="bg-transparent text-beigeBG mix-blend-difference flex justify-between z-10 block lg:fixed w-full px-5 md:px-20 py-6 font-semibold text-xl">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="">
            <Link href="/">Billy Arnold</Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <div className="text-right">
            <Link passHref href="https://billyarnold.co.uk">
              <a target="_blank">About</a>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FixedHeader;
