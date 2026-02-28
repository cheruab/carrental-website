import React from "react";
import styled, { keyframes } from "styled-components";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const TopSectionContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(135deg, #0a0a0f 0%, #13131f 60%, #1a1020 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  /* Mobile: stack vertically */
  flex-direction: column;
  padding: 4em 1.5em 3em 1.5em;
  min-height: 480px;

  @media (min-width: ${SCREENS.md}) {
    flex-direction: row;
    padding: 5em 2.5em 4em 2.5em;
    min-height: 560px;
  }

  @media (min-width: ${SCREENS.lg}) {
    padding: 5em 4em 4em 4em;
    min-height: 620px;
  }

  @media (min-width: ${SCREENS.xl}) {
    padding: 5em 6em 5em 6em;
    min-height: 700px;
  }
`;

/* Left: never shrinks below its content */
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  animation: ${fadeUp} 0.9s ease forwards;
  box-sizing: border-box;
  min-width: 0; /* allow text wrapping, never overflow */

  /* Mobile */
  width: 100%;
  align-items: center;
  text-align: center;

  @media (min-width: ${SCREENS.md}) {
    width: 55%;
    flex-shrink: 0;
    align-items: flex-start;
    text-align: left;
    padding-right: 2em;
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 52%;
    padding-right: 3em;
  }
`;

const RightContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  flex-shrink: 1;

  /* Mobile */
  width: 100%;
  height: 180px;
  margin-top: 2.5em;

  @media (min-width: ${SCREENS.md}) {
    width: 45%;
    height: 300px;
    margin-top: 0;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 360px;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 430px;
  }
`;

const EyebrowText = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #c9a84c;
  display: block;
  margin-bottom: 1em;
  animation: ${fadeUp} 0.7s ease 0.1s both;
`;

const Slogan = styled.h1`
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #f0ece4;
  line-height: 1.2;
  margin: 0 0 0.2em;
  word-break: break-word;
  animation: ${fadeUp} 0.7s ease 0.2s both;

  font-size: 1.9rem;

  @media (min-width: ${SCREENS.sm}) {
    font-size: 2.3rem;
  }

  @media (min-width: ${SCREENS.md}) {
    font-size: 2.4rem;
  }

  @media (min-width: ${SCREENS.lg}) {
    font-size: 3rem;
  }

  @media (min-width: ${SCREENS.xl}) {
    font-size: 3.6rem;
  }
`;

const Accent = styled.span`
  color: #c9a84c;
  font-style: italic;
`;

const GoldLine = styled.div`
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #c9a84c, #e8d5a3);
  margin: 1em 0;
  animation: ${fadeUp} 0.7s ease 0.3s both;
  flex-shrink: 0;

  @media (max-width: ${SCREENS.md}) {
    margin: 1em auto;
  }
`;

const Description = styled.p`
  color: #7a7a8a;
  font-family: 'Georgia', serif;
  line-height: 1.8;
  animation: ${fadeUp} 0.7s ease 0.4s both;
  font-size: 0.85rem;
  margin: 0;

  @media (min-width: ${SCREENS.lg}) {
    font-size: 0.95rem;
  }

  @media (max-width: ${SCREENS.md}) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 2em;
  animation: ${fadeUp} 0.7s ease 0.5s both;

  @media (max-width: ${SCREENS.md}) {
    justify-content: center;
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 2em;
  margin-top: 2.5em;
  animation: ${fadeUp} 0.7s ease 0.6s both;

  @media (max-width: ${SCREENS.md}) {
    justify-content: center;
    gap: 1.5em;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${SCREENS.md}) {
    align-items: center;
  }
`;

const StatNumber = styled.span`
  font-family: 'Georgia', serif;
  font-weight: 700;
  color: #c9a84c;
  line-height: 1;
  font-size: 1.4rem;

  @media (min-width: ${SCREENS.md}) {
    font-size: 1.6rem;
  }
`;

const StatLabel = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #4a4a5a;
  margin-top: 0.3em;
`;

const BlobContainer = styled.div`
  position: absolute;
  opacity: 0.12;
  filter: hue-rotate(30deg) saturate(0.4);
  pointer-events: none;
  z-index: 0;
  img { width: 100%; height: auto; }

  width: 26em; right: -6em; top: -6em;
  transform: rotate(-20deg);

  @media (min-width: ${SCREENS.md}) {
    width: 44em; right: -10em; top: -12em; opacity: 0.15;
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 56em; right: -12em; top: -16em;
    transform: rotate(-28deg);
  }
`;

const CarImage = styled.img`
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 20px 50px rgba(201, 168, 76, 0.2));
  animation: ${fadeIn} 1.2s ease 0.3s both;
  max-width: 100%;
  object-fit: contain;
  height: 160px;

  @media (min-width: ${SCREENS.sm}) { height: 190px; }
  @media (min-width: ${SCREENS.md}) { height: 250px; }
  @media (min-width: ${SCREENS.lg}) { height: 310px; }
  @media (min-width: ${SCREENS.xl}) { height: 390px; }
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <EyebrowText>Premium Car Rental Experience</EyebrowText>
        <Slogan>
          Drive The <Accent>Finest</Accent> Cars With Us
        </Slogan>
        <GoldLine />
        <Description>
          Choose the best car from our local stores or order remotely at the
          best price — top-quality vehicles for as long as you need.
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonsContainer>
        <StatsRow>
          <StatItem>
            <StatNumber>500+</StatNumber>
            <StatLabel>Fleet Size</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>Locations</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>10k+</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
        </StatsRow>
      </LeftContainer>

      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="" />
        </BlobContainer>
        <CarImage src={MclarenCarImg} alt="Premium car" />
      </RightContainer>
    </TopSectionContainer>
  );
}