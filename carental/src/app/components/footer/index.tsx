import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";

/* ─── Wrapper ─────────────────────────────────────────────────────────────── */

const FooterWrapper = styled.footer`
  width: 100%;
  background: #08080f;
  border-top: 1px solid rgba(201, 168, 76, 0.3);
`;

/* ─── Top gold accent bar ───────────────────────────────────────────────────*/

const GoldBar = styled.div`
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, #c9a84c 40%, #e8d5a3 60%, transparent 100%);
`;

/* ─── Main content area — centered, max-width, equal padding ────────────── */

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5em 2em 4em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3em;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 1.4fr;
    gap: 2em;
  }
`;

/* ─── Brand column ──────────────────────────────────────────────────────── */

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Tagline = styled.p`
  font-family: 'Georgia', serif;
  color: #8a8a9a;
  font-size: 0.88rem;
  line-height: 1.85;
  margin: 0;
  max-width: 260px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75em;
  margin-top: 0.5em;
`;

const SocialIcon = styled.a`
  width: 2.2em;
  height: 2.2em;
  border: 1px solid rgba(201, 168, 76, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7a7a8a;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    border-color: #c9a84c;
    color: #c9a84c;
    background: rgba(201, 168, 76, 0.08);
  }
`;

/* ─── Link columns ──────────────────────────────────────────────────────── */

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColTitle = styled.h4`
  font-family: 'Courier New', monospace;
  font-size: 0.63rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #c9a84c;
  margin: 0 0 1.4em 0;
  padding-bottom: 0.8em;
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`;

const LinkItem = styled.li`
  a {
    font-family: 'Courier New', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8a8a9a;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5em;
    transition: color 0.2s ease, gap 0.2s ease;

    &::before {
      content: '—';
      color: #c9a84c;
      font-size: 0.6rem;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    &:hover {
      color: #e0e0e8;
      gap: 0.75em;

      &::before { opacity: 1; }
    }
  }
`;

/* ─── Contact column ────────────────────────────────────────────────────── */

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1em;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.9em;
`;

const IconBox = styled.span`
  width: 2em;
  height: 2em;
  border: 1px solid rgba(201, 168, 76, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9a84c;
  font-size: 0.72rem;
  flex-shrink: 0;
  margin-top: 1px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15em;
`;

const ContactLabel = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #4a4a5a;
`;

const ContactValue = styled.span`
  font-family: 'Georgia', serif;
  font-size: 0.85rem;
  color: #b0b0be;
`;

/* ─── Divider ───────────────────────────────────────────────────────────── */

const Divider = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin-left: 2em;
  margin-right: 2em;
`;

/* ─── Bottom bar ────────────────────────────────────────────────────────── */

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5em 2em 2.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;
`;

const Copyright = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #4a4a5a;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Badge = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #c9a84c;
  border: 1px solid rgba(201, 168, 76, 0.3);
  padding: 0.3em 0.85em;
`;

/* ─── Component ─────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <FooterWrapper>
      <GoldBar />

      <Inner>
        {/* Brand */}
        <BrandCol>
          <Logo color="white" bgColor="dark" />
          <Tagline>
            Carent is a premium car rental company with locations worldwide,
            offering top-quality vehicles and five-star rated service since 2010.
          </Tagline>
          <SocialRow>
            <SocialIcon href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
          </SocialRow>
        </BrandCol>

        {/* Company links */}
        <Col>
          <ColTitle>Company</ColTitle>
          <LinkList>
            <LinkItem><a href="#">Home</a></LinkItem>
            <LinkItem><a href="#">About Us</a></LinkItem>
            <LinkItem><a href="#">Services</a></LinkItem>
            <LinkItem><a href="#">Our Fleet</a></LinkItem>
            <LinkItem><a href="#">Blog</a></LinkItem>
          </LinkList>
        </Col>

        {/* Support links */}
        <Col>
          <ColTitle>Support</ColTitle>
          <LinkList>
            <LinkItem><a href="#">FAQ</a></LinkItem>
            <LinkItem><a href="#">Contact Us</a></LinkItem>
            <LinkItem><a href="#">Help Centre</a></LinkItem>
            <LinkItem><a href="#">Privacy Policy</a></LinkItem>
            <LinkItem><a href="#">Terms &amp; Conditions</a></LinkItem>
          </LinkList>
        </Col>

        {/* Contact */}
        <Col>
          <ColTitle>Get In Touch</ColTitle>
          <ContactList>
            <ContactRow>
              <IconBox><FontAwesomeIcon icon={faPhoneAlt} /></IconBox>
              <ContactInfo>
                <ContactLabel>Call Us</ContactLabel>
                <ContactValue>+251 912-345-678</ContactValue>
              </ContactInfo>
            </ContactRow>
            <ContactRow>
              <IconBox><FontAwesomeIcon icon={faEnvelope} /></IconBox>
              <ContactInfo>
                <ContactLabel>Email Us</ContactLabel>
                <ContactValue>info@carent.com</ContactValue>
              </ContactInfo>
            </ContactRow>
            <ContactRow>
              <IconBox><FontAwesomeIcon icon={faMapMarkerAlt} /></IconBox>
              <ContactInfo>
                <ContactLabel>Head Office</ContactLabel>
                <ContactValue>Addis Ababa, Ethiopia</ContactValue>
              </ContactInfo>
            </ContactRow>
          </ContactList>
        </Col>
      </Inner>

      <Divider />

      <BottomBar>
        <Copyright>
          &copy; {new Date().getFullYear()} Carent. All rights reserved.
        </Copyright>
        <BadgeRow>
          <Badge>ISO Certified</Badge>
          <Badge>Premium Since 2010</Badge>
        </BadgeRow>
      </BottomBar>
    </FooterWrapper>
  );
}