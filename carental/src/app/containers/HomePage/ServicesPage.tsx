import React from "react";
import styled, { keyframes } from "styled-components";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide, faShieldAlt, faHeadset, faMapMarkedAlt,
  faClock, faCheckCircle, faStar, faThumbsUp,
  faWrench, faRoad, faGlobeAmericas, faHandshake,
} from "@fortawesome/free-solid-svg-icons";

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
  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c9a84c40, transparent);
  }
`;

const Eyebrow = styled.span`
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
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.4em;
  @media (min-width: 1024px) { font-size: 3.5rem; }
`;

const HeroSub = styled.p`
  color: #7a7a8a;
  font-size: 1rem;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.8;
`;

const GoldLine = styled.div`
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #c9a84c, #e8d5a3);
  margin: 1.2em auto 0;
`;

/* ── Main services grid ── */
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5em 2em;
  width: 100%;
  animation: ${fadeUp} 0.7s ease forwards;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2em;
`;

const ServiceCard = styled.div`
  background: #fff;
  border: 1px solid #e8e2d8;
  padding: 2.5em 2em;
  transition: all 0.3s ease;
  position: relative;

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
    box-shadow: 0 12px 50px rgba(0,0,0,0.1);
    transform: translateY(-4px);
    &::before { transform: scaleX(1); }
  }
`;

const ServiceIcon = styled.div`
  width: 3em;
  height: 3em;
  border: 1px solid rgba(201, 168, 76, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9a84c;
  font-size: 1.2rem;
  margin-bottom: 1.5em;
`;

const ServiceTitle = styled.h3`
  font-family: 'Georgia', serif;
  color: #0a0a0f;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.7em;
`;

const ServiceDesc = styled.p`
  color: #7a7a8a;
  font-size: 0.9rem;
  line-height: 1.8;
  margin: 0;
`;

/* ── Why us strip ── */
const WhyStrip = styled.div`
  background: linear-gradient(135deg, #0a0a0f, #13131f);
  padding: 5em 2em;
  position: relative;
  &::before, &::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c9a84c30, transparent);
  }
  &::before { top: 0; }
  &::after { bottom: 0; }
`;

const WhyInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3em;
  @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
  @media (min-width: 1024px) { grid-template-columns: 1fr 1fr 1fr 1fr; }
`;

const WhyStat = styled.div`
  text-align: center;
`;

const WhyNumber = styled.div`
  font-family: 'Georgia', serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: #c9a84c;
  line-height: 1;
  margin-bottom: 0.3em;
`;

const WhyLabel = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #7a7a8a;
`;

/* ── Plans ── */
const PlansSection = styled.section`
  background: #fff;
  padding: 5em 2em;
`;

const PlansInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2em;
  margin-top: 3em;
`;

const PlanCard = styled.div<{ featured?: boolean }>`
  border: 1px solid ${({ featured }) => featured ? '#c9a84c' : '#e8e2d8'};
  padding: 2.5em 2em;
  position: relative;
  background: ${({ featured }) => featured ? 'linear-gradient(135deg, #0a0a0f, #13131f)' : '#fff'};
  transition: all 0.3s ease;
  &:hover { box-shadow: 0 12px 50px rgba(0,0,0,0.1); transform: translateY(-4px); }
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
`;

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

const services = [
  { icon: faCarSide, title: "Short-Term Rental", desc: "Flexible daily rentals from 1 to 30 days. Perfect for business trips, holidays, or whenever your own car is unavailable." },
  { icon: faRoad, title: "Long-Term Lease", desc: "Monthly rental plans with reduced rates for extended stays. Ideal for relocations, projects, or extended travel." },
  { icon: faShieldAlt, title: "Full Insurance Cover", desc: "Every vehicle comes with comprehensive insurance. Drive with confidence knowing you're fully protected." },
  { icon: faHeadset, title: "24/7 Customer Support", desc: "Our dedicated support team is available around the clock to assist you with any queries or roadside assistance." },
  { icon: faMapMarkedAlt, title: "Airport Transfers", desc: "Hassle-free pick-up and drop-off at all major airports. Pre-book your vehicle and find it waiting on arrival." },
  { icon: faWrench, title: "Free Maintenance", desc: "All vehicles are serviced and maintained to the highest standard. Any mechanical issues are resolved at no cost to you." },
  { icon: faGlobeAmericas, title: "Multi-City Pickup", desc: "Pick up in one city and return in another. We have 50+ locations across the country for maximum flexibility." },
  { icon: faHandshake, title: "Corporate Accounts", desc: "Special rates and billing for businesses. Manage your entire fleet rental through a single corporate account." },
];

export function ServicesPage() {
  return (
    <PageWrapper>
      <Navbar />
      <NavSpacer />

      <Hero>
        <Eyebrow>What We Offer</Eyebrow>
        <HeroTitle>Premium Rental Services</HeroTitle>
        <HeroSub>Everything you need for a seamless car rental experience — from pick-up to drop-off and beyond.</HeroSub>
        <GoldLine />
      </Hero>

      <Section>
        <SectionHeader>
          <SectionEyebrow>Our Services</SectionEyebrow>
          <SectionTitle>Everything Included</SectionTitle>
        </SectionHeader>
        <ServicesGrid>
          {services.map((s, i) => (
            <ServiceCard key={i}>
              <ServiceIcon><FontAwesomeIcon icon={s.icon} /></ServiceIcon>
              <ServiceTitle>{s.title}</ServiceTitle>
              <ServiceDesc>{s.desc}</ServiceDesc>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      <WhyStrip>
        <WhyInner>
          <WhyStat>
            <WhyNumber>500+</WhyNumber>
            <WhyLabel>Vehicles in Fleet</WhyLabel>
          </WhyStat>
          <WhyStat>
            <WhyNumber>50+</WhyNumber>
            <WhyLabel>City Locations</WhyLabel>
          </WhyStat>
          <WhyStat>
            <WhyNumber>10k+</WhyNumber>
            <WhyLabel>Happy Clients</WhyLabel>
          </WhyStat>
          <WhyStat>
            <WhyNumber>99.8%</WhyNumber>
            <WhyLabel>Satisfaction Rate</WhyLabel>
          </WhyStat>
        </WhyInner>
      </WhyStrip>

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
                <li><FontAwesomeIcon icon={faCheckCircle} /> Economy & compact cars</li>
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
                <li><FontAwesomeIcon icon={faCheckCircle} /> SUVs & luxury sedans</li>
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

      <Footer />
    </PageWrapper>
  );
}