import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
  `};
  background: #f8f5ef;
  padding: 6em 2em;
  position: relative;

  @media (max-width: 768px) {
    padding: 4em 1.5em;
  }
`;

const EyebrowText = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #c9a84c;
  display: block;
  margin-bottom: 0.8em;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #0a0a0f;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 0;

  font-size: 2rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const GoldLine = styled.div`
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #c9a84c, #e8d5a3);
  margin: 1.2em auto 0;
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-center
    flex-wrap
  `};
  margin-top: 4em;
  gap: 2em;

  @media (min-width: 1024px) {
    margin-top: 5em;
    gap: 3em;
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  position: relative;
`;

const StepNumber = styled.div`
  font-family: 'Georgia', serif;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: #c9a84c;
  text-transform: uppercase;
  margin-bottom: 1.2em;
`;

const Step = styled.div`
  width: 6em;
  height: 6em;
  border: 1px solid #e8d5a340;
  border-radius: 0;
  background: #fff;
  box-shadow: 0 4px 30px rgba(0,0,0,0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 6px;
    border: 1px solid #c9a84c20;
  }

  &:hover {
    box-shadow: 0 8px 40px rgba(201, 168, 76, 0.2);
    border-color: #c9a84c60;
  }
`;

const StepTitle = styled.h4`
  font-family: 'Georgia', serif;
  color: #0a0a0f;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.3em;
  margin-bottom: 0.5em;
  text-align: center;
  letter-spacing: 0.02em;
`;

const StepDescription = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #7a7a8a;
  line-height: 1.7;
  font-family: 'Georgia', serif;
  max-width: 200px;
`;

const StepIcon = styled.span`
  color: #c9a84c;
  font-size: 1.8rem;
`;

export function BookingSteps() {
  return (
    <Container>
      <EyebrowText>Simple Process</EyebrowText>
      <Title>Our Working Steps</Title>
      <GoldLine />
      <StepsContainer>
        <StepContainer>
          <StepNumber>01</StepNumber>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Yourcar point and book your car.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <StepNumber>02</StepNumber>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup the best date to rent a car for you.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <StepNumber>03</StepNumber>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            Book your car with ease in one single click.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}