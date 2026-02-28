import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../services/carService";
import { Dispatch } from "redux";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
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
  margin-bottom: 0.8em;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #0a0a0f;
  text-align: center;
  line-height: 1.2;

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

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
  `};
  color: #9a9aaa;
  font-family: 'Georgia', serif;
  letter-spacing: 0.1em;
  padding: 3em 0;
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  console.log("Cars", topCars);

  const fetchTopCars = async () => {
    setLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.log("Error: ", err);
    });

    console.log("Cars: ", cars);
    if (cars) setTopCars(cars);
    setLoading(false);
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars =
    (!isEmptyTopCars &&
      topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />)) ||
    [];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <EyebrowText>Our Collection</EyebrowText>
      <Title>Explore Our Top Deals</Title>
      <GoldLine />
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} color="#c9a84c" />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars Available</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}