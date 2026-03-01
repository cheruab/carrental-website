import {
  faGasPump,
  faTachometerAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { keyframes } from "styled-components";
import { ICar } from "../../../typings/car";

interface ICarProps extends ICar {}

const lift = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-6px); }
`;

const CarCard = styled.div`
  width: 300px;
  flex-shrink: 0;
  background: #ffffff;
  border: 1px solid #e8e2d8;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #c9a84c, #e8d5a3);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  &:hover {
    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
    transform: translateY(-6px);
    &::before { transform: scaleX(1); }
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: #f3efe8;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${CarCard}:hover & img {
    transform: scale(1.06);
  }
`;

const Body = styled.div`
  padding: 1.4em 1.6em 1.6em;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.8em;
`;

const CarName = styled.h3`
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #0a0a0f;
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`;

const PriceBlock = styled.div`
  text-align: right;
  flex-shrink: 0;
  margin-left: 0.5em;
`;

const DailyPrice = styled.div`
  font-family: 'Georgia', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #c9a84c;
  line-height: 1;
`;

const MonthlyPrice = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.1em;
  color: #b0a898;
  text-transform: uppercase;
  margin-top: 0.3em;
`;

const Divider = styled.div`
  height: 1px;
  background: #ede8e0;
  margin: 0.9em 0;
`;

const SpecsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.4em;
`;

const Spec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3em;
  flex: 1;

  &:not(:last-child) {
    border-right: 1px solid #ede8e0;
  }
`;

const SpecIcon = styled.span`
  color: #c9a84c;
  font-size: 0.85rem;
`;

const SpecValue = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7a7a8a;
`;

const RentBtn = styled.button`
  width: 100%;
  font-family: 'Courier New', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.85em;
  border: 1px solid #c9a84c;
  background: transparent;
  color: #c9a84c;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: auto;

  &:hover {
    background: linear-gradient(135deg, #c9a84c, #e8d5a3);
    color: #0a0a0f;
    box-shadow: 0 4px 20px rgba(201,168,76,0.35);
  }
`;

export function Car(props: ICarProps) {
  const { name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType, gas } = props;

  return (
    <CarCard>
      <ImageWrap>
        <img src={thumbnailSrc} alt={name} />
      </ImageWrap>
      <Body>
        <TopRow>
          <CarName>{name}</CarName>
          <PriceBlock>
            <DailyPrice>${dailyPrice}<span style={{ fontSize: '0.55rem', color: '#b0a898', fontFamily: 'Courier New', letterSpacing: '0.1em', textTransform: 'uppercase', marginLeft: '2px' }}>/day</span></DailyPrice>
            <MonthlyPrice>${monthlyPrice}/mo</MonthlyPrice>
          </PriceBlock>
        </TopRow>

        <Divider />

        <SpecsRow>
          <Spec>
            <SpecIcon><FontAwesomeIcon icon={faTachometerAlt} /></SpecIcon>
            <SpecValue>{mileage}</SpecValue>
          </Spec>
          <Spec>
            <SpecIcon><FontAwesomeIcon icon={faCog} /></SpecIcon>
            <SpecValue>{gearType}</SpecValue>
          </Spec>
          <Spec>
            <SpecIcon><FontAwesomeIcon icon={faGasPump} /></SpecIcon>
            <SpecValue>{gas}</SpecValue>
          </Spec>
        </SpecsRow>

        <RentBtn>Rent Now</RentBtn>
      </Body>
    </CarCard>
  );
}