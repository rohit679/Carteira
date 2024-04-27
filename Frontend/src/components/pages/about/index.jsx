import React, { useState, useEffect } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiLinux,
  SiExpress,
  SiPostman,
  SiVisualstudiocode,
  SiJirasoftware,
  SiSelenium,
  SiMacos,
  SiHeroku,
  SiAmazonaws,
} from "react-icons/si";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from "../../organisms/atoms/container";
import Text from "../../organisms/atoms/Text";
import SkillCard from "../../organisms/molecules/skillCard";
import aboutBg from "../../../assets/myPic3.png";
import {
  EducationCard,
  EducationReverseCard,
} from "../../organisms/molecules/educationCard";
import Footer from "../../organisms/atoms/footer";

const About = ({ setPath }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setPath(window.location.pathname);
  });
  return (
    <div>
      <div id="home" className="home-section flex flex-col gap-20 bg-red-300">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:py-20 items-center">
            <div className="flex flex-1">
              <div className="flex flex-col w-full gap-4 lg:pr-12">
                {isLoading ? (
                  <div className="mx-64 my-4">
                    <Skeleton
                      baseColor="#6e6a6a"
                      highlightColor="#d9d0d0"
                      height={30}
                    />
                  </div>
                ) : (
                  <div className="flex justify-center my-4">
                    <Text size="5xl" classname="capitalize">
                      know who{" "}
                      <span className="text-baseCol font-bold">I'm</span>
                    </Text>
                  </div>
                )}
                {isLoading ? (
                  <Skeleton
                    baseColor="#6e6a6a"
                    highlightColor="#d9d0d0"
                    count="10"
                    style={{ marginBottom: "0.6rem" }}
                  />
                ) : (
                  <div>
                    <Text size="sm">
                      ✅ Hi There, This is{" "}
                      <span className="text-baseCol font-bold">
                        Rohit Prasad
                      </span>
                      . Born & brought up in{" "}
                      <span className="text-baseCol">Kolkata 🇮🇳 .</span>
                    </Text>
                    <Text size="sm">
                      ✅
                      <span className="text-baseCol font-bold">
                        {" "}
                        2021 BTECH
                      </span>{" "}
                      Graduate 🎓 in{" "}
                      <span className="font-bold">
                        Computer Science Engineering
                      </span>{" "}
                      from <span className="text-baseCol"> PTU, India.</span>
                    </Text>
                    <Text size="sm">
                      ✅ Results oriented{" "}
                      <span className="font-bold">Software Developer</span> with
                      a solid foundation of{" "}
                      <span className="font-bold text-baseCol">3+ years</span>{" "}
                      of experience in the Software Industry.
                    </Text>
                    <Text size="sm">
                      ✅ Having robust skill set and a proven track record of
                      success in developing and implementing solutions using the{" "}
                      <span className="font-bold text-baseCol">MERN stack</span>
                      .
                    </Text>
                    <Text size="sm">
                      ✅ Having a quite good understanding of{" "}
                      <span className="text-baseCol">
                        Data Structures & Algorithm 💻
                      </span>
                    </Text>
                    <Text size="sm">
                      ✅ Die Heart fan of{" "}
                      <span className="text-baseCol">Manchester United</span> in
                      English Premier league ⚽︎, love to watch matches in my
                      spare time.
                    </Text>
                    <Text size="sm">✅ A Heliophile 🌞</Text>
                  </div>
                )}
              </div>
            </div>
            <div className="flex">
              {isLoading ? (
                <div className="w-[20rem]">
                  <Skeleton
                    circle
                    baseColor="#6e6a6a"
                    highlightColor="#d9d0d0"
                    height={320}
                  />
                </div>
              ) : (
                <div>
                  <motion.img
                    src={aboutBg}
                    className="w-[20rem] shadow-white hover:shadow-baseCol shadow-md hover:shadow-lg rounded-[10rem]"
                    initial={{ opacity: 0.5, scaleY: 0.95 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
        <Container>
          <Text size="2xl" classname="flex justify-center font-semibold mb-6">
            Education
          </Text>
          <div className="flex flex-col gap-12 md:px-4 xl:px-14 2xl:px-28">
            <EducationCard
              tenure="AUG 2017 - JUL 2021"
              company="Bachelor's Degree"
              position="Amritsar Group of Colleges(PTU), Amritsar"
              content={[
                "Bachelor of Technology in Computer Science and Engineering",
                "Got 8.1 SGPA out of 10",
                "Major Subjects : Data Structure and Algorithms, RDBMS, Machine Learning, Operating System, Computer Networks, Cloud Computing, BigData Analytics",
              ]}
            />
            <EducationReverseCard
              tenure="JUL 2014 - Jun 2016"
              company="High School"
              position="Shree Jain Vidyalaya, Kolkata"
              content={[
                "Got 84 percent out of 100",
                "Major Subjects : Mathematics, Physics, Chemistry, Computer Science",
              ]}
            />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-1 justify-center">
              <Text size="5xl" classname="capitalize">
                professional <span className="text-baseCol">skillset</span>
              </Text>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
              <SkillCard
                icon={DiNodejs}
                size="60"
                path="https://nodejs.org/en/about/"
              />
              <SkillCard icon={DiReact} size="60" path="https://reactjs.org/" />
              <SkillCard
                icon={DiMongodb}
                size="60"
                path="https://www.mongodb.com/"
              />
              <SkillCard
                icon={DiGit}
                size="60"
                path="https://git-scm.com/about"
              />
              <SkillCard
                icon={SiNextdotjs}
                size="60"
                path="https://nextjs.org/"
              />
              <SkillCard
                icon={DiJavascript1}
                size="60"
                path="https://www.javascript.com/"
              />
              <SkillCard
                icon={DiPython}
                size="60"
                path="https://www.python.org/"
              />
              <SkillCard
                icon={SiTailwindcss}
                size="60"
                path="https://tailwindcss.com/"
              />
              <SkillCard
                icon={SiAmazonaws}
                size="60"
                path="https://aws.amazon.com/"
              />
              <SkillCard
                icon={SiSelenium}
                size="60"
                path="https://www.selenium.dev/"
              />
              <SkillCard
                icon={CgCPlusPlus}
                size="60"
                path="https://isocpp.org/"
              />
              <SkillCard
                icon={SiExpress}
                size="60"
                path="https://expressjs.com/"
              />
            </div>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-1 justify-center">
              <Text size="5xl" classname="capitalize">
                <span className="text-baseCol">Tools</span> Used
              </Text>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
              <SkillCard
                icon={SiPostman}
                size="60"
                path="https://www.postman.com/"
              />
              <SkillCard
                icon={SiVisualstudiocode}
                size="60"
                path="https://code.visualstudio.com/"
              />
              <SkillCard
                icon={SiJirasoftware}
                size="60"
                path="https://www.atlassian.com/software/jira"
              />
              <SkillCard
                icon={SiLinux}
                size="60"
                path="https://www.linux.org/"
              />
              <SkillCard
                icon={SiMacos}
                size="60"
                path="https://www.apple.com/mac/"
              />
              <SkillCard
                icon={SiHeroku}
                size="60"
                path="https://www.heroku.com/"
              />
            </div>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-1 justify-center">
              <Text size="5xl" classname="capitalize">
                day I <span className="text-baseCol">Code</span>
              </Text>
            </div>
            <div className="flex justify-center">
              <GitHubCalendar
                username="soumyajit4419"
                blockSize={15}
                blockMargin={5}
                color="#bcfd49"
                fontSize={18}
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default About;
