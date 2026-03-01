import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import TopCars  from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `};
  background: #f8f5ef;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

/* Pushes content below the fixed navbar (72px tall) */
const NavSpacer = styled.div`
  height: 72px;
  width: 100%;
  flex-shrink: 0;
`;

const BookCardWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  padding: 0 1.5em;
  position: relative;
  z-index: 10;
  margin-top: -2em;

  @media (min-width: 768px) {
    margin-top: -2.5em;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <NavSpacer />
      <TopSection />
      <BookCardWrapper>
        <BookCard />
      </BookCardWrapper>
      <Marginer direction="vertical" margin="7em" />
      <SectionWrapper>
        <BookingSteps />
      </SectionWrapper>
      <Marginer direction="vertical" margin="6em" />
      <SectionWrapper>
        <AboutUs />
      </SectionWrapper>
      <Marginer direction="vertical" margin="6em" />
      <SectionWrapper>
        <TopCars />
      </SectionWrapper>
      <Marginer direction="vertical" margin="4em" />
      <Footer />
    </PageContainer>
  );
}