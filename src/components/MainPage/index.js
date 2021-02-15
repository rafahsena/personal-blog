import React from "react";
import Sidebar from "../Sidebar";
import { BlogContainer } from "../BlogContainer";

const MainPage = ({ children }) => {
  return (
    <BlogContainer minHeight="100vh">
      <Sidebar />
      {children}
    </BlogContainer>
  );
};

export default MainPage;
