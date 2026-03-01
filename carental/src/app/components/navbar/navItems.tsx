import React from "react";
import styled, { css } from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 0.2em;
`;

const NavItem = styled.li<{ menu?: boolean }>`
  position: relative;

  a {
    font-family: 'Courier New', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #d0d0d8;
    text-decoration: none;
    padding: 0.55em 0.9em;
    display: block;
    transition: color 0.2s ease;
    position: relative;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0.9em;
      right: 0.9em;
      height: 1px;
      background: #c9a84c;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
    }

    &:hover, &.active {
      color: #ffffff;
      &::after { transform: scaleX(1); }
    }
  }

  ${({ menu }) =>
    menu &&
    css`
      width: 100%;
      a {
        font-family: 'Courier New', monospace;
        font-size: 0.78rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #c8c8d0;
        text-decoration: none;
        padding: 0.9em 0;
        display: block;
        border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        transition: color 0.2s ease, padding-left 0.2s ease;

        &:hover, &.active {
          color: #c9a84c;
          padding-left: 0.6em;
        }

        &::after { display: none; }
      }
    `}
`;

const BookNowBtn = styled(NavLink)`
  font-family: 'Courier New', monospace;
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(135deg, #c9a84c, #e8d5a3);
  color: #0a0a0f !important;
  padding: 0.65em 1.4em;
  text-decoration: none;
  display: inline-block;
  margin-left: 0.8em;
  transition: all 0.25s ease;
  white-space: nowrap;

  &:hover {
    background: linear-gradient(135deg, #b8943c, #d4c090);
    box-shadow: 0 4px 18px rgba(201, 168, 76, 0.45);
    transform: translateY(-1px);
  }
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '0.5em 0' }}>
          <NavItem menu><NavLink to="/">Home</NavLink></NavItem>
          <NavItem menu><NavLink to="/cars">Cars</NavLink></NavItem>
          <NavItem menu><NavLink to="/services">Services</NavLink></NavItem>
          <NavItem menu><NavLink to="/contact">Contact Us</NavLink></NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem><NavLink to="/">Home</NavLink></NavItem>
      <NavItem><NavLink to="/cars">Cars</NavLink></NavItem>
      <NavItem><NavLink to="/services">Services</NavLink></NavItem>
      <NavItem><NavLink to="/contact">Contact Us</NavLink></NavItem>
    
    </ListContainer>
  );
}