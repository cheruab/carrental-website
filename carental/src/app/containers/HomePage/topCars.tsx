import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../services/carService";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.div`
  width: 100%;
  padding: 5em 0 6em;
  background: #f8f5ef;
  animation: ${fadeUp} 0.8s ease forwards;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5em;
`;

const EyebrowText = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #c9a84c;
  display: block;
  margin-bottom: 0.8em;
`;

const Title = styled.h2`
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #0a0a0f;
  line-height: 1.2;
  font-size: 2rem;
  margin: 0;
  @media (min-width: 1024px) { font-size: 3rem; }
`;

const GoldLine = styled.div`
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #c9a84c, #e8d5a3);
  margin: 1.2em auto 0;
`;

/* ── Carousel wrapper ── */
const CarouselOuter = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowBtn = styled.button<{ side: 'left' | 'right' }>`
  position: absolute;
  ${({ side }) => side === 'left' ? 'left: 1em;' : 'right: 1em;'}
  z-index: 10;
  width: 3em;
  height: 3em;
  border: 1px solid rgba(201,168,76,0.4);
  background: #fff;
  color: #c9a84c;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  flex-shrink: 0;

  &:hover {
    background: linear-gradient(135deg, #c9a84c, #e8d5a3);
    color: #0a0a0f;
    border-color: #c9a84c;
    box-shadow: 0 4px 20px rgba(201,168,76,0.3);
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
    &:hover { background: #fff; color: #c9a84c; box-shadow: none; }
  }

  @media (min-width: 1024px) {
    ${({ side }) => side === 'left' ? 'left: 2em;' : 'right: 2em;'}
    width: 3.5em;
    height: 3.5em;
  }
`;

const Track = styled.div`
  display: flex;
  gap: 1.5em;
  overflow: hidden;
  max-width: 1100px;
  width: 100%;
  padding: 1em 0 2em;
  justify-content: center;
`;

const DotsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5em;
  margin-top: 2em;
`;

const Dot = styled.button<{ active: boolean }>`
  width: ${({ active }) => active ? '2em' : '0.5em'};
  height: 0.5em;
  border: none;
  background: ${({ active }) => active ? '#c9a84c' : '#d0c8bc'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
`;

const EmptyCars = styled.div`
  text-align: center;
  color: #9a9aaa;
  font-family: 'Georgia', serif;
  padding: 3em 0;
  font-size: 1rem;
`;

const LoadingContainer = styled.div`
  ${tw`w-full mt-9 flex justify-center items-center`};
  min-height: 200px;
`;

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({ topCars }));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const isTablet = useMediaQuery({ maxWidth: SCREENS.md });

  const { topCars } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    const fetchTopCars = async () => {
      setLoading(true);
      const cars = await carService.getCars().catch((err) => {
        console.log("Error fetching cars:", err);
        return undefined;
      });
      if (cars) dispatch(setTopCars(cars as GetCars_cars[]));
      setLoading(false);
    };
    fetchTopCars();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const maxIndex = isEmptyTopCars ? 0 : Math.max(0, topCars.length - slidesPerView);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const visibleCars = isEmptyTopCars ? [] : topCars.slice(current, current + slidesPerView);
  const totalDots = maxIndex + 1;

  return (
    <Section>
      <Header>
        <EyebrowText>Our Collection</EyebrowText>
        <Title>Explore Our Top Deals</Title>
        <GoldLine />
      </Header>

      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={28} color="#c9a84c" />
        </LoadingContainer>
      )}

      {!isLoading && isEmptyTopCars && (
        <EmptyCars>No cars available at the moment.</EmptyCars>
      )}

      {!isLoading && !isEmptyTopCars && (
        <>
          <CarouselOuter>
            <ArrowBtn side="left" onClick={prev} disabled={current === 0} aria-label="Previous">
              <FontAwesomeIcon icon={faChevronLeft} />
            </ArrowBtn>

            <Track>
              {visibleCars.map((car) => (
                <Car key={car.id} {...car} thumbnailSrc={car.thumbnailUrl} />
              ))}
            </Track>

            <ArrowBtn side="right" onClick={next} disabled={current >= maxIndex} aria-label="Next">
              <FontAwesomeIcon icon={faChevronRight} />
            </ArrowBtn>
          </CarouselOuter>

          <DotsRow>
            {Array.from({ length: totalDots }).map((_, i) => (
              <Dot key={i} active={i === current} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </DotsRow>
        </>
      )}
    </Section>
  );
}

export default TopCars;