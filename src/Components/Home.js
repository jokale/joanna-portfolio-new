import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const HeaderName = styled.h1`
  font-family: "Be Vietnam Pro", sans-serif;
  color: white;
  font-size: 140px;
  display: flex;
  justify-content: center;
  margin-top: 0px;
`;

const SubheadingTitle = styled.h2`
  font-family: "Be Vietnam Pro", sans-serif;
  color: white;
  font-size: 140px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: white;
`;
const Home = () => {
  return (
    <div id="home">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <HeaderName>
          <motion.a whileHover={{ scale: 1.1, x: -55, color: "pink" }}>
            <LinkStyle href="http://localhost:3000/about" mr={3}>
              Joanna
            </LinkStyle>{" "}
          </motion.a>{" "}
          Kalema{" "}
        </HeaderName>
        <SubheadingTitle>frontend developer</SubheadingTitle>
      </motion.div>
    </div>
  );
};

export default Home;

// I need to install react router, styled components, framer motion
