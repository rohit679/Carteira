import React from "react";
import { motion } from "framer-motion";

const MenubarButton = ({ text, icon, isActive, iconSize = 20, toggle }) => {
  return toggle ? (
    <div className="flex justify-end">
      <motion.div
        className={`flex justify-center p-3 mr-3 rounded-[40px] hover:bg-gray-700 ${
          isActive && "bg-baseCol"
        }`}
        initial={{ opacity: 0.4, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.1 }}
      >
        {icon({ size: iconSize, color: isActive ? "black" : "white" })}
      </motion.div>
    </div>
  ) : (
    <div
      className={`flex gap-4 items-center rounded-r-[30px] px-6 mr-6 py-2 ${
        isActive && "bg-baseCol"
      }`}
    >
      {icon({ size: iconSize })}
      {text}
    </div>
  );
};

export default MenubarButton;
