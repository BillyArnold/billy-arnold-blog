import { motion } from "framer-motion";

const SectionHeader = (props: any) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center w-full px-5 md:px-20 pt-6 pb-20 font-semibold text-xl">
          <div>{props.children}</div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionHeader;
