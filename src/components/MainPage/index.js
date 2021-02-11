import React from "react";
import Sidebar from "../Sidebar";
import { Container } from "../Container";

const MainPage = ({ children }) => {
  return (
    <Container height="100vh" >
      <Sidebar />
      {children}
    </Container>
  );
};

export default MainPage;
