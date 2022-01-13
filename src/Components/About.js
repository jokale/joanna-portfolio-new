import React from "react";
import styled from "styled-components";

const DescriptionText = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Inconsolata", monospace;
  color: white;
  word-break: break-all;
  font-size: 20px;
  flex-wrap: wrap;
  overflow-wrap: break-word;
`;

const About = () => {
  return (
    <>
      <DescriptionText>
        I'm a front-end developer, intrigued by design and how to make things
        look good and be practical at the same time.
        <br />I was not always a developer, I initially studied Economics and
        Politics at University. <br />
        Till I realized I wanted to get into technology, specifically UX/UI but
        I also wanted to be able to build want I had designed.
        <br />
        Long story short I enrolled in a coding bootcamp and I began to self
        teach after I graduated university in July 2019 <br />
        up until Decemeber of 2019 whereby I enrolled in a coding bootcamp and
        have been coding and learning ever since <br /> Including this very
        portfolio you are looking at.
      </DescriptionText>
    </>
  );
};

/* <p>
          Check out my{" "}
          <a
            href="https://learn.co/alpha-convention-4182/resume"
            target="blank"
          >
            resume
          </a>{" "}
          for more information{" "}
        </p> */

export default About;
