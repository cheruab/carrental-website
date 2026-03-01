import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Car } from "../../components/car";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";
import { setTopCars } from "./slice";
import carService from "../../services/carService";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import MoonLoader from "react-spinners/MoonLoader";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f8f5ef;
  display: flex;
  flex-direction: column;
  font-family: 'Georgia', serif;
`;

const NavSpacer = styled.div`height: 72px;`;

const Hero = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #0a0a0f 0%, #13131f 60%, #1a1020 100%);
  padding: 5em 2em 4em;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c9a84c40, transparent);
  }
`;

const HeroEyebrow = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #c9a84c;
  display: block;
  margin-bottom: 0.8em;
`;

const HeroTitle = styled.h1`
  font-family: 'Georgia', serif;
  color: #f0ece4;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.4em;
  @media (min-width: 1024px) { font-size: 2.5rem; }
`;

const HeroSub = styled.p`
  color: #7a7a8a;
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.8;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4em 2em;
  flex: 1;
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 3em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid #e8e2d8;
`;

const FilterLabel = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #9a9aaa;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button<{ active?: boolean }>`
  font-family: 'Courier New', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.5em 1.2em;
  border: 1px solid ${({ active }) => active ? '#c9a84c' : '#e8e2d8'};
  background: ${({ active }) => active ? 'rgba(201,168,76,0.1)' : '#fff'};
  color: ${({ active }) => active ? '#c9a84c' : '#9a9aaa'};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { border-color: #c9a84c; color: #c9a84c; }
`;

const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2em;
  animation: ${fadeUp} 0.6s ease forwards;
`;

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 5em 2em;
  color: #9a9aaa;
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
`;

const ResultCount = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9a9aaa;
`;

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({ topCars }));

const FILTERS = ["All", "Auto", "Manual", "Petrol", "Diesel", "Electric"];

export function CarsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { topCars } = useSelector(stateSelector);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    const fetch = async () => {
      setLoading(true);
      const cars = await carService.getCars().catch(() => undefined);
      if (cars) dispatch(setTopCars(cars as GetCars_cars[]));
      setLoading(false);
    };
    fetch();
  }, []); // eslint-disable-line

  const filtered = topCars?.filter((car) => {
    if (activeFilter === "All") return true;
    return car.gearType === activeFilter || car.gas === activeFilter;
  }) || [];

  return (
    <PageWrapper>
      <Navbar />
      <NavSpacer />
      <Hero>
        <HeroEyebrow>Our Fleet</HeroEyebrow>
        <HeroTitle>Find Your Perfect Ride</HeroTitle>
        <HeroSub>Browse our premium selection of vehicles available for daily and monthly rental.</HeroSub>
      </Hero>
      <Content>
        <FilterBar>
          <FilterLabel>
            <ResultCount>{filtered.length} vehicles found</ResultCount>
          </FilterLabel>
          <FilterButtons>
            {FILTERS.map((f) => (
              <FilterBtn key={f} active={activeFilter === f} onClick={() => setActiveFilter(f)}>
                {f}
              </FilterBtn>
            ))}
          </FilterButtons>
        </FilterBar>
        {isLoading && (
          <LoadingWrap><MoonLoader loading size={28} color="#c9a84c" /></LoadingWrap>
        )}
        {!isLoading && filtered.length === 0 && (
          <EmptyState>No vehicles match your filter.</EmptyState>
        )}
        {!isLoading && filtered.length > 0 && (
          <CarsGrid>
            {filtered.map((car) => (
              <Car key={car.id} {...car} thumbnailSrc={car.thumbnailUrl} />
            ))}
          </CarsGrid>
        )}
      </Content>
      <Footer />
    </PageWrapper>
  );
}