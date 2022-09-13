import Link from "next/link";
import { motion } from "framer-motion";

const BlogItem = (props) => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="blog-item mb-6 flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 mb-4 md:mb-0">
            <img src={props.item.featuredImage.url} />
          </div>
          <div className="p-4 md:p-10">
            <h2 className="uppercase text-3xl font-semibold mb-2">
              {props.item.title}
            </h2>
            <p className="mb-4">{props.item.excerpt}</p>
            <Link href={"/posts/" + props.item.slug}>
              <a className="font-semibold text-xl">View Post</a>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
