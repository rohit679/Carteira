import React, { useEffect } from "react";
import Container from "../../organisms/atoms/container";
import Card from "../../organisms/molecules/card";
import img1 from "../../../assets/Projects/code11.jpeg";
import img2 from "../../../assets/Projects/code10.jpeg";
import img3 from "../../../assets/Projects/code8.jpeg";
import img4 from "../../../assets/Projects/code9.webp";
import img5 from "../../../assets/Projects/code9.webp";
import img6 from "../../../assets/Projects/code6.webp";
import Text from "../../organisms/atoms/Text";
import Footer from "../../organisms/atoms/footer";

const Projects = ({ setPath }) => {
  useEffect(() => {
    setPath(window.location.pathname);
  });
  return (
    <div>
      <div className="home-section">
        <Container classname="lg:my-12">
          <div className="flex flex-col items-center pb-8">
            <Text size="5xl" classname="capitalize">
              my recent <span className="text-baseCol">work</span>
            </Text>
            <Text size="sm" classname="font-light">
              Here are a few <span className="text-baseCol">projects</span> I've
              worked on recently.
            </Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-flow-row gap-12">
            <Card
              title="Carteira"
              imgUrl={img1}
              btnText="view project"
              btnUrl="https://rohit-prasad-portfolio.herokuapp.com/"
            >
              🔰 Deployed MERN stack portfolio CMS project. 🔰 Featured with
              Server side rendering with EJS, JWT Authentication along with Mail
              sending option. 🔰 The website is fully controlled by the admin
              panel made with REACT.
            </Card>
            <Card
              title="Stock Price Prediction"
              imgUrl={img2}
              btnText="view project"
              btnUrl="https://github.com/rohit679/Stock-Price-Prediction"
            >
              ✨ Stock price prediction is a simple Machine learning project
              made in Python. ✨ Jupyter Notebook used as a tools & technology.
              ✨ For more details check out my GitHub account.
            </Card>
            <Card
              title="Visit World"
              imgUrl={img3}
              btnText="view project"
              btnUrl="https://prasadrohit.github.io/"
            >
              📌 This is a web development project, a website which accumulates
              all the interesting facts about various cities in all over the
              globe together. 📌 Html, Css, Javascript, Bootstrap, Php & Mysql
              used as tools and technology. 📌 For more details check out my
              GitHub account.
            </Card>
            <Card
              title="Predictive Cricket"
              imgUrl={img4}
              btnText="view project"
              btnUrl="https://github.com/rohit679/Predictive-Cricket"
            >
              👉 Predictive cricket is a Python console based cricket game. 👉
              Random module is used for making this game. 👉 File handling used
              for storing highest run.
            </Card>
            <Card
              title="Third Eye Keylogger"
              imgUrl={img5}
              btnText="view project"
              btnUrl="https://github.com/rohit679/Third-Entry-Keylogger"
            >
              ✅ Third eye key-logger is a Python based key-logger created for
              educational purpose. ✅ Python file handling used for keep
              tracking user input. ✅ Datetime & pynput module used for project
              making.
            </Card>
            <Card
              title="Student database management system"
              imgUrl={img6}
              btnText="view project"
              btnUrl="https://github.com/rohit679/Student-database-management-system"
            >
              🔥 It is a basic C++ console based project used for storing
              student data records. 🔥 File handling used for storing student
              information with unique id. 🔥 You can check this out in the given
              link.
            </Card>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
