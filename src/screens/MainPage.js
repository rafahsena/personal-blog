import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import BlogContainer from "../components/BlogContainer";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainPage = ({ children }) => {

  return (
    <BlogContainer height="100vh">
      <Sidebar />
      <Box overflowY="scroll">
        <Header />
        {children}
      </Box>
    </BlogContainer>
  );
};

export default MainPage;
