import React from "react";
import { Box } from "@chakra-ui/react";
import BlogContainer from "../components/BlogContainer";
import ReponsiveSidebar from "./Sidebar";
import Header from "./Header";

const MainPage = ({ children }) => {

  return (
    <BlogContainer height="100vh">
      <ReponsiveSidebar />
      <Box overflowY="scroll">
        <Header />
        {children}
      </Box>
    </BlogContainer>
  );
};

export default MainPage;