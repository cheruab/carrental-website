import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./app/containers/HomePage";
import { CarsPage } from "./app/containers/HomePage/CarsPage";
import { ServicesPage } from "./app/containers/HomePage/ServicesPage";
import { ContactPage } from "./app/containers/HomePage/ContactPage";

const AppContainer = styled.div`
  ${tw`w-full h-full flex flex-col`};
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;