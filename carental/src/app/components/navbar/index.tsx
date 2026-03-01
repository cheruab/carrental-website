import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../logo";
import { NavItems } from "./navItems";

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`;

const NavbarContainer = styled.div<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  min-height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  animation: ${slideDown} 0.5s ease forwards;
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  box-sizing: border-box;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }

  background: ${({ scrolled }) =>
    scrolled ? 'rgba(10, 10, 15, 0.98)' : 'rgba(10, 10, 15, 0.82)'};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ scrolled }) =>
    scrolled ? 'rgba(201, 168, 76, 0.25)' : 'rgba(201, 168, 76, 0.1)'};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none'};
`;

const BrandLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.75em;
    text-decoration: none;
  }
`;

const CompanyName = styled.span`
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.04em;
  line-height: 1;

  span {
    color: #c9a84c;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 1.4em;
  background: rgba(201, 168, 76, 0.35);
`;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <BrandLink>
        <Link to="/">
          <Logo color="white" bgColor="dark" />
          <Divider />
          <CompanyName><span>Car</span>Rent</CompanyName>
        </Link>
      </BrandLink>
      <NavItems />
    </NavbarContainer>
  );
}