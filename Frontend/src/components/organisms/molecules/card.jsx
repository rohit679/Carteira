import React, { useState, useEffect } from 'react';
import Text from '../atoms/Text';
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProjectCard = ({ imgUrl, title, children, btnText, btnUrl='/' }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <motion.div 
      className="border rounded-md shadow-md hover:shadow-lg hover:shadow-yellow-200 shadow-white cursor-pointer"
      whileHover={{
        scale: 0.98,
      }}
      whileTap={{ scale: 1 }}
      initial={{ opacity: 0.5, scaleY: 0.95 }}
      animate={{ opacity: 1, scaleY: 1 }}
    >
      <div className="flex flex-col h-full gap-4 items-center p-6">
      {
        isLoading ? (
          <div className="w-full">
            <Skeleton baseColor="#6e6a6a" highlightColor="#d9d0d0" height={190} />
          </div>
        ) : (
          <img src={imgUrl} alt="project card" />
        )
      }
        <Text classname="font-bold text-baseCol">{title || <Skeleton />}</Text>
        <Text size="xs" classname="flex justify-items-center">{children}</Text>
        <div className="flex flex-1 items-end">
          <a href={btnUrl} target="_blank" rel="noreferrer">
            <div className="px-4 py-2 bg-baseCol text-black flex gap-2 items-center rounded">
              <BiLinkExternal />
              <Text size="xs" classname="capitalize">{btnText}</Text>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard;
