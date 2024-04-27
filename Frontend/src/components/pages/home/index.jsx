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
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </Text>

              <Text size="6xl">I'm</Text>
              <Text size="9xl" classname="font-bold text-baseCol">
                {" "}
                Rohit Prasad
              </Text>
              <Type />
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
              <Text size="5xl">LET ME</Text>
              <Text size="5xl" classname="text-baseCol">
                INTRODUCE
              </Text>
              <Text size="5xl">MYSELF</Text>
            </div>
            <div className="flex flex-col gap-4 mt-8 lg:mx-16">
              <Text size="sm">
                A <span className="text-baseCol">MERN Stack Developer 🧑‍💻</span>{" "}
                <span className="font-bold">@AdGlobal360</span> with over{" "}
                <span className="text-baseCol font-bold">3 years</span> of
                experience. Had been part of multiple{" "}
                <span className="text-baseCol">Product</span> development &{" "}
                <span className="text-baseCol">Government</span> based projects.
              </Text>

              <Text size="sm">
                Love to do <span className="font-bold">Competitive Coding</span>{" "}
                ❤️. Primarily, practice at{" "}
                <span className="text-baseCol font-bold">LeetCode</span> with
                having <span className="text-baseCol font-bold">3</span> 🌟
                profile
              </Text>
              <Text size="sm">
                <span className="text-baseCol font-bold">NodeJs</span> is one of
                my favorite 😇 technology, specially in case of REST APIS
              </Text>
              <Text size="sm">
                A <span className="font-bold">Table Tenis</span> 🏓 Enthusiast
                Obsessed with the idea of learning & exploring.
              </Text>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="lg:my-10 z-10">
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col gap-2 items-center">
            <Text size="5xl" className="font-bold">
              FIND ME ON
            </Text>
            <Text size="sm" className="font-bold">
              Feel free to{" "}
              <span className="text-baseCol font-bold">connect</span>
            </Text>
            <div className="flex gap-6">
              <SocialLink
                icon={AiFillGithub}
                path="https://github.com/rohit679"
              />
              <SocialLink
                icon={SiLeetcode}
                path="https://leetcode.com/rohit221/"
              />
              <SocialLink
                icon={FaLinkedinIn}
                path="https://www.linkedin.com/in/rohpr/"
              />
              <SocialLink
                icon={AiFillMail}
                path="mailto:prasad.rohit078@gmail.com"
              />
            </div>
          </div>
        </div>
        <div className="text-white flex justify-center py-4 text-[16px] lg:text-[20px]">
          Made with ❤️ by Rohit Prasad
        </div>
      </Container>
    </div>
  );
};

export default Home;
