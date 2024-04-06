import { motion } from "framer-motion";

const skillCard = ({ icon, size=80, path='/' }) => {
  return (
    <motion.a 
      href={path} 
      target="_blank"
      whileHover={{
        scale: 0.98,
      }}
      whileTap={{ scale: 1 }}
    >
      <div className="flex flex-1 justify-center items-center border border-white shadow-md hover:shadow-lg shadow-white hover:shadow-baseCol py-4 rounded-md">
        {icon({ size: size })}
      </div>
    </motion.a>
  )
};

export default skillCard;