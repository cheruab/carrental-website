import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  background: #fff;
  border: 1px solid #e8e2d8;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative;

  ${tw`
    flex
    justify-center
    items-center
    pt-3
    pb-3
    pr-4
    pl-4
    md:pt-4
    md:pb-4
    md:pl-10
    md:pr-10
    flex-wrap
    md:flex-nowrap
  `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative items-center`};
  padding: 0.5em 0;
`;

const Icon = styled.span`
  color: #c9a84c;
  font-size: 0.85rem;
  margin-right: 0.6em;
`;

const Label = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9a9aaa;
  display: block;
  margin-bottom: 2px;
`;

const Name = styled.div`
  cursor: pointer;
  user-select: none;
`;

const NameText = styled.span`
  font-family: 'Georgia', serif;
  color: #0a0a0f;
  font-size: 0.85rem;
  font-weight: 600;
`;

const SmallIcon = styled.span`
  color: #c9a84c;
  font-size: 0.7rem;
  margin-left: 0.4em;
`;

const LineSeperator = styled.span`
  width: 1px;
  height: 2.5em;
  background: #e8e2d8;
  margin: 0 1.5em;

  @media (max-width: 640px) {
    display: none;
  }
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3.5em;
  left: 0;
  border: 1px solid #e8e2d8 !important;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  z-index: 999;
  font-family: 'Georgia', serif;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 4em;
    left: -2em;
  }

  .react-calendar__tile--active {
    background: #c9a84c !important;
  }

  .react-calendar__tile:hover {
    background: #f8f5ef;
  }
` as any;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>
          <Label>Pick Up</Label>
          <NameText>
            {formatDate(startDate)}
            <SmallIcon>
              <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
            </SmallIcon>
          </NameText>
        </Name>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>
          <Label>Return</Label>
          <NameText>
            {formatDate(returnDate)}
            <SmallIcon>
              <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
            </SmallIcon>
          </NameText>
        </Name>
        {isReturnCalendarOpen && (
          <DateCalendar
            offset
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="1.5em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}