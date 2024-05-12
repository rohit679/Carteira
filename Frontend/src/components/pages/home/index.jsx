import React, { useEffect } from "react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { CodeBuddy } from "../../organisms/atoms/images";
import ParticlesComponent from "../../organisms/atoms/particles";
import Container from "../../organisms/atoms/container";
import Type from "../../organisms/atoms/Type";
import Text from "../../organisms/atoms/Text";
import SocialLink from "../../organisms/molecules/socialLink";
import avatar from "../../../assets/avatar.svg";
import data from "../../../assets/data.json";

const Home = ({ setPath }) => {
  useEffect(() => {
    setPath(window.location.pathname);
  });
  return (
    <div className="home-section flex flex-col" id="home">
      <Container classname="lg:my-20 xl:my-40 z-10">
        <ParticlesComponent id="particles" />
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 w-full">
          <div className="flex flex-1 text-white">
            <div className="flex flex-col lg:gap-3 md:py-10 w-full px-4">
              <Text size="2xl">
                {data.home.intro[0]}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </Text>

              <Text size="6xl">{data.home.intro[1]}</Text>
              <Text size="9xl" classname="font-bold text-baseCol">
                {" "}
                {data.home.intro[2]}
              </Text>
              <Type data={data.home.type} />
            </div>
          </div>
          <CodeBuddy />
        </div>
      </Container>
      <Container classname="lg:my-20 z-10">
        <div className="flex flex-row gap-12">
          <motion.img
            src={avatar}
            width="300px"
            alt="Image"
            className="rounded-2xl hidden lg:flex"
          />
          <div className="rounded-lg py-12 lg:shadow-sm lg:hover:shadow-md lg:hover:shadow-white lg:shadow-white">
            <div className="flex flex-col md:flex-row flex-1 md:gap-6 justify-center w-full">
              <Text size="5xl">{data.home.card.heading[0]}</Text>
              <Text size="5xl" classname="text-baseCol">
                {data.home.card.heading[1]}
              </Text>
              <Text size="5xl">{data.home.card.heading[2]}</Text>
            </div>
            <div className="flex flex-col gap-4 mt-8 lg:mx-16">
              <Text size="sm">
                {data.home.card.details[0][0]}{" "}
                <span className="text-baseCol">
                  {data.home.card.details[0][1]}
                </span>{" "}
                <span className="font-bold">
                  {data.home.card.details[0][2]}
                </span>{" "}
                {data.home.card.details[0][3]}{" "}
                <span className="text-baseCol font-bold">
                  {data.home.card.details[0][4]}
                </span>{" "}
                {data.home.card.details[0][5]}{" "}
                <span className="text-baseCol">
                  {data.home.card.details[0][6]}
                </span>{" "}
                {data.home.card.details[0][7]}{" "}
                <span className="text-baseCol">
                  {data.home.card.details[0][8]}
                </span>{" "}
                {data.home.card.details[0][9]}
              </Text>

              <Text size="sm">
                {data.home.card.details[1][0]}{" "}
                <span className="font-bold">
                  {data.home.card.details[1][1]}
                </span>{" "}
                {data.home.card.details[1][2]}{" "}
                <span className="text-baseCol font-bold">
                  {data.home.card.details[1][3]}
                </span>{" "}
                {data.home.card.details[1][4]}{" "}
                <span className="text-baseCol font-bold">
                  {data.home.card.details[1][5]}
                </span>{" "}
                {data.home.card.details[1][6]}
              </Text>
              <Text size="sm">
                <span className="text-baseCol font-bold">
                  {data.home.card.details[2][0]}
                </span>{" "}
                {data.home.card.details[2][1]}
              </Text>
              <Text size="sm">
                {data.home.card.details[3][0]}{" "}
                <span className="font-bold">
                  {data.home.card.details[3][1]}
                </span>{" "}
                {data.home.card.details[3][2]}
              </Text>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="lg:my-10 z-10">
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col gap-2 items-center">
            <Text size="5xl" className="font-bold">
              {data.home.footer.heading}
            </Text>
            <Text size="sm" className="font-bold">
              {data.home.footer.subheading[0]}{" "}
              <span className="text-baseCol font-bold">
                {data.home.footer.subheading[1]}
              </span>
            </Text>
            <div className="flex gap-6">
              <SocialLink
                icon={AiFillGithub}
                path={data.home.footer.links[0]}
              />
              <SocialLink icon={SiLeetcode} path={data.home.footer.links[1]} />
              <SocialLink
                icon={FaLinkedinIn}
                path={data.home.footer.links[2]}
              />
              <SocialLink icon={AiFillMail} path={data.home.footer.links[3]} />
            </div>
          </div>
        </div>
        <div className="text-white flex justify-center py-4 text-[16px] lg:text-[20px]">
          {data.home.footer.author}
        </div>
      </Container>
    </div>
  );
};

export default Home;
