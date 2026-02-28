import React from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
  `};
  background: linear-gradient(135deg, #0a0a0f 0%, #13131f 100%);
  padding: 5em 2em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c9a84c40, transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c9a84c40, transparent);
  }

  @media (min-width: ${SCREENS.md}) {
    padding: 7em 4em;
  }
`;

const CarContainer = styled.div`
  width: auto;
  height: 14em;
  position: relative;
  flex-shrink: 0;

  img {
    width: auto;
    height: 100%;
    filter: drop-shadow(0 20px 50px rgba(201, 168, 76, 0.2));
  }

  @media (min-width: ${SCREENS.md}) {
    height: 26em;
    margin-right: 1em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-2/5
    flex
    flex-col
    ml-4
    md:ml-12
    2xl:ml-20
  `};
  animation: ${fadeUp} 0.8s ease forwards;
`;

const EyebrowText = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #c9a84c;
  display: block;
  margin-bottom: 1em;
`;

const Title = styled.h1`
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #f0ece4;
  line-height: 1.2;
  margin-bottom: 0.5em;

  font-size: 1.8rem;

  @media (min-width: ${SCREENS.md}) {
    font-size: 2.8rem;
  }

  @media (min-width: ${SCREENS.lg}) {
    font-size: 3.2rem;
  }
`;

const GoldLine = styled.div`
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #c9a84c, #e8d5a3);
  margin: 1.2em 0;
`;

const InfoText = styled.p`
  color: #7a7a8a;
  font-family: 'Georgia', serif;
  line-height: 1.9;
  font-size: 0.9rem;
  max-width: 480px;

  @media (min-width: ${SCREENS.md}) {
    font-size: 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
  margin-top: 2.5em;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #c9a84c;
  margin-bottom: 0.3em;
`;

const FeatureValue = styled.span`
  font-family: 'Georgia', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #f0ece4;
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <EyebrowText>Why Choose Us</EyebrowText>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <GoldLine />
        <InfoText>
          Discover the best deals you'll ever find with our unbeatable offers.
          We're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services without breaking the bank.
          Our deals are designed to give you the ultimate renting experience,
          so don't miss out on your chance to save big.
        </InfoText>
        <FeaturesGrid>
          <Feature>
            <FeatureTitle>Experience</FeatureTitle>
            <FeatureValue>15+ Years</FeatureValue>
          </Feature>
          <Feature>
            <FeatureTitle>Fleet Size</FeatureTitle>
            <FeatureValue>500+ Cars</FeatureValue>
          </Feature>
          <Feature>
            <FeatureTitle>Locations</FeatureTitle>
            <FeatureValue>50+ Cities</FeatureValue>
          </Feature>
          <Feature>
            <FeatureTitle>Satisfaction</FeatureTitle>
            <FeatureValue>99.8%</FeatureValue>
          </Feature>
        </FeaturesGrid>
      </InfoContainer>
    </AboutUsContainer>
  );
}