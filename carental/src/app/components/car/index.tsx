import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 17em;
  min-height: 24em;
  background: #fff;
  border: 1px solid #e8e2d8;
  position: relative;
  transition: all 0.3s ease;

  ${tw`
    flex
    flex-col
    items-center
    p-4
    pb-6
    m-4
    sm:m-5
    md:m-6
  `};

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #c9a84c, #e8d5a3);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: 10em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f5ef;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${CarContainer}:hover & img {
    transform: scale(1.04);
  }
`;

const CarName = styled.h3`
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #0a0a0f;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-top: 1em;
  margin-bottom: 0.3em;
  text-align: center;
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-2
  `};
  gap: 1em;
`;

const SmallText = styled.span`
  font-size: 0.65rem;
  font-family: 'Courier New', monospace;
  opacity: 0.7;
`;

const DailyPrice = styled.div`
  font-family: 'Georgia', serif;
  color: #c9a84c;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: baseline;
  gap: 2px;
`;

const MonthlyPrice = styled.div`
  font-family: 'Georgia', serif;
  color: #9a9aaa;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: baseline;
  gap: 2px;
`;

const SmallIcon = styled.span`
  color: #c9a84c;
  font-size: 0.75rem;
  margin-right: 4px;
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
    mt-1
  `};
`;

const CarDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
`;

const CarInfo = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: #9a9aaa;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #e8e2d8;
  margin: 0.8em 0;
`;

const RentButton = styled(Button)`
  width: 100%;
  margin-top: 0.5em;
`;

export function Car(props: ICarProps) {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    mileage,
    gearType,
    gas,
  } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt={name} />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice}
          <SmallText>/Mo</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
}