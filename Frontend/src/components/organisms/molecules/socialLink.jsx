// import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const socialLink = ({ icon, color = "black", size = "25", path = "/" }) => {
  return (
    <a href={path} target="_blank" rel="noreferrer">
      <motion.div
        className="blog-link flex items-center justify-center h-10 w-10 rounded-[20px] bg-white cursor-pointer hover:shadow-md hover:shadow-baseCol"
        whileHover={{
          scale: 0.9,
        }}
        whileTap={{ scale: 1 }}
      >
        {icon({ size: size, color: color })}
      </motion.div>
    </a>
  );
};

export default socialLink;
