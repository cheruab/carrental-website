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
        font-size: 0.88rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #c8c8d0;
        text-decoration: none;
        padding: 1em 0;
        display: block;
        border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        transition: color 0.2s ease, padding-left 0.2s ease;

        &:hover, &.active {
          color: #c9a84c;
          padding-left: 0.5em;
        }

        &::after { display: none; }
      }
    `}
`;

const BookNowItem = styled.li`
  margin-left: 0.8em;

  a {
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
    transition: all 0.25s ease;
    white-space: nowrap;

    &:hover {
      background: linear-gradient(135deg, #b8943c, #d4c090);
      box-shadow: 0 4px 18px rgba(201, 168, 76, 0.45);
      transform: translateY(-1px);
    }

    &::after { display: none !important; }
  }
`;

const MobileBookNow = styled.div`
  margin-top: 2.5em;

  a {
    font-family: 'Courier New', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 700;
    background: linear-gradient(135deg, #c9a84c, #e8d5a3);
    color: #0a0a0f;
    padding: 0.9em 1.4em;
    text-decoration: none;
    display: block;
    text-align: center;
    transition: all 0.25s ease;

    &:hover {
      background: linear-gradient(135deg, #b8943c, #d4c090);
      box-shadow: 0 4px 18px rgba(201, 168, 76, 0.45);
    }
  }
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <NavItem menu><NavLink to="/">Home</NavLink></NavItem>
        <NavItem menu><NavLink to="/cars">Cars</NavLink></NavItem>
        <NavItem menu><NavLink to="/services">Services</NavLink></NavItem>
        <NavItem menu><NavLink to="/contact">Contact Us</NavLink></NavItem>
        <MobileBookNow><NavLink to="/cars">Book Now</NavLink></MobileBookNow>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem><NavLink to="/">Home</NavLink></NavItem>
      <NavItem><NavLink to="/cars">Cars</NavLink></NavItem>
      <NavItem><NavLink to="/services">Services</NavLink></NavItem>
      <NavItem><NavLink to="/contact">Contact Us</NavLink></NavItem>
      <BookNowItem><NavLink to="/cars">Book Now</NavLink></BookNowItem>
    </ListContainer>
  );
}