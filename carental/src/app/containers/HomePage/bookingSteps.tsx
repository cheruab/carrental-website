import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PlansSection = styled.div`
  background: #fff;
  padding: 5em 2em;
  width: 100%;
`;

const PlansInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5em;
`;

const SectionEyebrow = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #c9a84c;
  display: block;
  margin-bottom: 0.8em;
`;

const SectionTitle = styled.h2`
  font-family: 'Georgia', serif;
  color: #0a0a0f;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  @media (min-width: 1024px) { font-size: 2.6rem; }
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2em;
`;

const PlanCard = styled.div<{ featured?: boolean }>`
  border: 1px solid ${({ featured }) => featured ? '#c9a84c' : '#e8e2d8'};
  padding: 2.5em 2em;
  position: relative;
  background: ${({ featured }) => featured ? 'linear-gradient(135deg, #0a0a0f, #13131f)' : '#fff'};
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 12px 50px rgba(0,0,0,0.1);
    transform: translateY(-4px);
  }
`;

const PlanBadge = styled.span`
  position: absolute;
  top: -0.7em;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #c9a84c, #e8d5a3);
  color: #0a0a0f;
  font-family: 'Courier New', monospace;
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.3em 1em;
  font-weight: 700;
  white-space: nowrap;
`;

const PlanName = styled.h3<{ featured?: boolean }>`
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ featured }) => featured ? '#f0ece4' : '#0a0a0f'};
  margin: 0 0 0.3em;
`;

const PlanPrice = styled.div<{ featured?: boolean }>`
  font-family: 'Georgia', serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: #c9a84c;
  margin: 0.5em 0;
  span {
    font-size: 0.9rem;
    color: ${({ featured }) => featured ? '#7a7a8a' : '#9a9aaa'};
    font-weight: 400;
  }
`;

const PlanFeatures = styled.ul<{ featured?: boolean }>`
  list-style: none;
  padding: 0;
  margin: 1.5em 0 2em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;

  li {
    font-family: 'Georgia', serif;
    font-size: 0.9rem;
    color: ${({ featured }) => featured ? '#b0b0be' : '#7a7a8a'};
    display: flex;
    align-items: center;
    gap: 0.6em;
    svg { color: #c9a84c; font-size: 0.75rem; flex-shrink: 0; }
  }
` as any;

const PlanBtn = styled.button<{ featured?: boolean }>`
  width: 100%;
  font-family: 'Courier New', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.9em;
  border: 1px solid #c9a84c;
  background: ${({ featured }) => featured ? 'linear-gradient(135deg, #c9a84c, #e8d5a3)' : 'transparent'};
  color: ${({ featured }) => featured ? '#0a0a0f' : '#c9a84c'};
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background: linear-gradient(135deg, #c9a84c, #e8d5a3);
    color: #0a0a0f;
    box-shadow: 0 4px 20px rgba(201,168,76,0.4);
  }
`;

export function BookingSteps() {
  return (
    <PlansSection>
      <PlansInner>
        <SectionHeader>
          <SectionEyebrow>Pricing Plans</SectionEyebrow>
          <SectionTitle>Choose Your Plan</SectionTitle>
        </SectionHeader>
        <PlansGrid>
          <PlanCard>
            <PlanName>Basic</PlanName>
            <PlanPrice><span>from </span>$29<span>/day</span></PlanPrice>
            <PlanFeatures>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Economy &amp; compact cars</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Basic insurance</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> 200km/day included</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Standard support</li>
            </PlanFeatures>
            <PlanBtn>Get Started</PlanBtn>
          </PlanCard>

          <PlanCard featured>
            <PlanBadge>Most Popular</PlanBadge>
            <PlanName featured>Premium</PlanName>
            <PlanPrice featured><span>from </span>$79<span>/day</span></PlanPrice>
            <PlanFeatures featured>
              <li><FontAwesomeIcon icon={faCheckCircle} /> SUVs &amp; luxury sedans</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Full insurance cover</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Unlimited mileage</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> 24/7 priority support</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Free airport pickup</li>
            </PlanFeatures>
            <PlanBtn featured>Get Started</PlanBtn>
          </PlanCard>

          <PlanCard>
            <PlanName>Corporate</PlanName>
            <PlanPrice><span>from </span>$199<span>/mo</span></PlanPrice>
            <PlanFeatures>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Full fleet access</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Dedicated account manager</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Monthly invoicing</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Multi-driver accounts</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Custom reporting</li>
            </PlanFeatures>
            <PlanBtn>Contact Sales</PlanBtn>
          </PlanCard>
        </PlansGrid>
      </PlansInner>
    </PlansSection>
  );
}