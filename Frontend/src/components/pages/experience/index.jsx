import React, { useEffect } from "react";
import Container from "../../organisms/atoms/container";
import {
  ExperienceCard,
  ExperienceReverseCard,
} from "../../organisms/molecules/experienceCard";
import { CodeSetup } from "../../organisms/atoms/images";
import Footer from "../../organisms/atoms/footer";

const Resume = ({ setPath }) => {
  useEffect(() => {
    setPath(window.location.pathname);
  });
  return (
    <div>
      <div className="home-section">
        <Container classname="lg:my-12">
          <div className="flex justify-center items-center">
            <CodeSetup width="500px" />
          </div>
          <div className="flex flex-col gap-12 md:px-4 xl:px-14 2xl:px-28 mt-8">
            <ExperienceCard
              tenure="Feb 2023 - PRESENT"
              company="AdGlobal360"
              position="MERN Stack Developer"
              content={[
                "Building country specific Lead Qualification System for the client dashboard [Suzuki Global]",
                "Key responsibility includes creating cross platform RESTful APIS, designing dashboard components, managing AWS services for different country environments.",
                "Some of the commonly used AWS services - Lambda, API Gateway, S3, Secret Manager, SQS, Code Commit.",
                "Tools & Technologies used - NestJS, NextJS, TailwindCSS, MongoDB, Git, AWS, Swagger API",
              ]}
            />
            <ExperienceReverseCard
              tenure="JUN 2021 - Feb 2023"
              company="Plaxonic Technologies"
              position="Software Engineer"
              content={[
                "Worked with multiple product development modules as both frontend & backend asset",
                "Got Excellence award 2021-2022",
                "Tools & Technologies - NextJS, NodeJS, Express, MongoDB, ReactJS, Postman, TailwindCSS, Docker",
              ]}
            />
            <ExperienceCard
              tenure="Nov 2020 - Jun 2021"
              company="Plaxonic Technologies"
              position="Software Engineer,Intern"
              content={[
                "Working on MERN stack client projects",
                "Made CMS for the client project called TerraOne. Tech stack included - React, NodeJs, MongoDB",
                "Currently working on a client project called SinglePoint, written Rest API and made admin dashboard. Tech stack - React, NodeJs, MongoDB",
                "Apart from MERN stack, I used to use Heroku, Postman etc",
              ]}
            />
            <ExperienceReverseCard
              tenure="JULY 2020 - Oct 2020"
              company="Qxf2 Services"
              position="Software Engineer,Intern"
              content={[
                "Worked on Selenium for Automation Testing Suite",
                "Automated Python scripts for QElo rating system by using AWS Lambda+CloudWatch+SNS+DynamoDB",
                "Tools & Technology using - AWS Services, Git, jira, Wordpress, Serverless",
                "Here's my GitHub repository of my first end to end automated project",
              ]}
            />
            <ExperienceCard
              tenure="Feb 2020 - May 2020"
              company="Notchup"
              position="Curriculum Developer"
              content={[
                "Key responsibility were to develop & maintain the curriculum regarding Python",
                "Developed couple of mini projects in Python, Do check out the link given below -",
                "Tools & Technology used - Jupyter Notebook, Microsoft Word, Microsoft Powerpoint & Microsoft Excel",
              ]}
            />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
