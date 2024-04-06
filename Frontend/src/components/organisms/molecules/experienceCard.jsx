import React from 'react'
import Text from "../../organisms/atoms/Text";
import { motion } from "framer-motion";

const ExperienceCard = ({ tenure, company, position, content }) => {
  const items = ["🔰", "🌟", "✅", "🌈", "📌", "👉"];
  var item1 = items[Math.floor(Math.random()*items.length)];
  return (
    <motion.div 
      className="flex flex-col md:flex-row w-full rounded-md shadow-white hover:shadow-yellow-200 shadow-md hover:shadow-lg"
      whileHover={{
        scale: 0.98,
      }}
      whileTap={{ scale: 1 }}
      initial={{ opacity: 0.5, scaleX: 0.90 }}
      animate={{ opacity: 1, scaleX: 1 }}
    >
      <div className="flex md:w-[40%] rounded-t-md md:rounded-l-md md:rounded-r-none border-white bg-baseCol py-4">
        <div className="flex w-full flex-col items-center justify-center">
          <Text size="xs" classname="text-black">{tenure}</Text>
          <Text classname="text-black font-bold">{company}</Text>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 rounded-b-md md:rounded-l-none md:rounded-r-md py-8 px-6 border border-1">
        <Text classname="font-semibold">{position}</Text>
        <div className="flex flex-col">
          {
            content.map((item, index) => (
              <div className="flex gap-4">
                {/* <div className="w-[6px] h-[6px] bg-white rounded" /> */}
                <div>{item1}</div>
                <Text size="xs">{item}</Text>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
};

const ExperienceReverseCard = ({ tenure, company, position, content }) => {
  const items = ["🔰", "🌟", "✅", "🌈", "📌", "👉"];
  var item1 = items[Math.floor(Math.random()*items.length)];
  return (
    <motion.div 
      className="flex flex-col-reverse md:flex-row w-full rounded-md shadow-white hover:shadow-yellow-200 shadow-md hover:shadow-lg"
      whileHover={{
        scale: 0.98,
      }}
      whileTap={{ scale: 1 }}
      initial={{ opacity: 0.5, scaleX: 1.1 }}
      animate={{ opacity: 1, scaleX: 1 }}
    >
      <div className="flex flex-col w-full gap-4 rounded-b-md md:rounded-r-none md:rounded-l-md py-8 px-6 border border-1">
        <Text classname="font-semibold">{position}</Text>
        <div className="flex flex-col">
        {
          content.map((item) => (
            <div className="flex gap-4">
              {item1}
              {/* <div className="w-[6px] h-[6px] bg-white rounded" /> */}
              <Text size="xs">{item}</Text>
            </div>
          ))
        }
        </div>
      </div>
      <div className="flex md:w-[40%] rounded-t-md md:rounded-r-md md:rounded-l-none border-white bg-baseCol py-4">
        <div className="flex w-full flex-col items-center justify-center">
          <Text size="xs" classname="text-black">{tenure}</Text>
          <Text classname="text-black font-bold">{company}</Text>
        </div>
      </div>
    </motion.div>
  )
};

export { ExperienceCard, ExperienceReverseCard };
