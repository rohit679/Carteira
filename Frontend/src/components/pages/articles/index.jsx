import React, { useEffect } from "react";
import Container from "../../organisms/atoms/container";
import Card from "../../organisms/molecules/card";
import aws from "../../../assets/Projects/dynamodb.png";
import PythonImg from "../../../assets/Projects/python.webp";
import code4 from "../../../assets/Projects/code6.webp";
import code3 from "../../../assets/Projects/code9.webp";
import code2 from "../../../assets/Projects/code9.webp";
import code1 from "../../../assets/Projects/code8.jpeg";
import hadoop from "../../../assets/Projects/hadoop.jpeg";
import Text from "../../organisms/atoms/Text";
import Footer from "../../organisms/atoms/footer";

const Articles = ({ setPath }) => {
  useEffect(() => {
    setPath(window.location.pathname);
  });
  return (
    <div>
      <div className="home-section">
        <Container classname="lg:my-12">
          <div className="flex flex-col items-center pb-8">
            <Text size="5xl" classname="capitalize">
              my <span className="text-baseCol">publications</span>
            </Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-flow-row gap-12">
            <Card
              title="How to use moto with AWS DynamoDB"
              imgUrl={PythonImg}
              btnText="view publication"
              btnUrl="https://qxf2.com/blog/how-to-use-moto-with-aws-dynamodb/"
            >
              ✨ This blog will let you know about, how we can use moto Python
              library with DynamoDB. ✨ Moto Python library will be useful while
              code level testing of functions using AWS resources. ✨ We can
              patch any AWS resources with moto.
            </Card>
            <Card
              title="Count of substrings containing given character"
              imgUrl={code1}
              btnText="view publication"
              btnUrl="https://www.geeksforgeeks.org/count-of-substrings-containing-only-the-given-character/"
            >
              ✅ This article is solely based on a competitive problem, which is
              quite often. ✅ There are couple different approaches are given
              there into it. ✅ I have seen this problem into one of the contest
              of LeetCode & hence written.
            </Card>
            <Card
              title="How to Mock AWS DynamoDB Services for Unit Testing?"
              imgUrl={aws}
              btnText="view publication"
              btnUrl="https://www.geeksforgeeks.org/how-to-mock-aws-dynamodb-services-for-unit-testing/"
            >
              🔰 How to mock the AWS DynamoDB resources in Unit-testing. 🔰 Use
              of Moto Python library.
            </Card>
            <Card
              title="Minimum value to be added to the prefix sums at each array indices to make them positive"
              imgUrl={code2}
              btnText="view publication"
              btnUrl="https://www.geeksforgeeks.org/minimum-value-to-be-added-to-the-prefix-sums-at-each-array-indices-to-make-them-positive/"
            >
              📌 This is a problem based article, where a problem approach has
              been described. 📌 The problem is under the category of
              competitive programming.
            </Card>
            <Card
              title="How namenode handles datanode failure"
              imgUrl={hadoop}
              btnText="view publication"
              btnUrl="https://www.geeksforgeeks.org/how-does-namenode-handles-datanode-failure-in-hadoop-distributed-file-system/"
            >
              👉 This article is upon Hadoop distributed file system. 👉 From
              here you will come to know how Namenode recovers all the deleted
              data from Datanode. 👉 In more simplified way, how our real life
              data are being safe in different website servers(Eg : facebook).
            </Card>
            <Card
              title="Print matrix elements from top-left to bottom right in diagonally upward manner"
              imgUrl={code3}
              btnText="view publication"
              btnUrl="https://www.geeksforgeeks.org/print-matrix-elements-from-top-left-to-bottom-right-in-diagonally-upward-manner/"
            >
              🔥 Competitive Programming Problem algorithm explained. 🔥 Quite
              common and interesting interview preparation problem.
            </Card>
            <Card
              title="Modify given array by reducing each element by its next smaller element"
              imgUrl={code4}
              btnText="view publication"
              btnUrl="https://www.geeksforgeeks.org/modify-given-array-by-reducing-each-element-by-its-next-smaller-element/"
            >
              🌈 Competitive Program which is quite popular to check DSA
              knowledge. 🌈 Different approaches to solve from brute force to
              most optimal solution.
            </Card>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
