import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt, faEnvelope, faMapMarkerAlt,
  faClock, faCheckCircle, faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

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
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.8;
`;

const GoldLine = styled.div`
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #c9a84c, #e8d5a3);
  margin: 1.2em auto 0;
`;

const MainSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5em 2em;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3em;
  animation: ${fadeUp} 0.7s ease forwards;
  @media (min-width: 1024px) { grid-template-columns: 1fr 1.4fr; }
`;

/* ── Info column ── */
const InfoCol = styled.div`display: flex; flex-direction: column; gap: 2em;`;

const InfoCard = styled.div`
  background: #fff;
  border: 1px solid #e8e2d8;
  padding: 2em;
`;

const InfoCardTitle = styled.h3`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #c9a84c;
  margin: 0 0 1.5em;
  padding-bottom: 0.8em;
  border-bottom: 1px solid #f0ece4;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1em;
  margin-bottom: 1.3em;
  &:last-child { margin-bottom: 0; }
`;

const IconBox = styled.div`
  width: 2.2em;
  height: 2.2em;
  border: 1px solid rgba(201,168,76,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9a84c;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

const ContactLabel = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9a9aaa;
`;

const ContactValue = styled.span`
  font-family: 'Georgia', serif;
  color: #0a0a0f;
  font-size: 0.95rem;
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6em 1em;
`;

const HourRow = styled.div`
  font-family: 'Georgia', serif;
  font-size: 0.85rem;
  color: #7a7a8a;
  span { color: #0a0a0f; font-weight: 600; }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.7em;
  margin-top: 0.5em;
`;

const SocialBtn = styled.a`
  width: 2.4em;
  height: 2.4em;
  border: 1px solid #e8e2d8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9a9aaa;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover { border-color: #c9a84c; color: #c9a84c; background: rgba(201,168,76,0.05); }
`;

/* ── Form column ── */
const FormCard = styled.div`
  background: #fff;
  border: 1px solid #e8e2d8;
  padding: 2.5em;
`;

const FormTitle = styled.h2`
  font-family: 'Georgia', serif;
  color: #0a0a0f;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.3em;
`;

const FormSub = styled.p`
  color: #9a9aaa;
  font-size: 0.9rem;
  margin: 0 0 2em;
  font-family: 'Georgia', serif;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;
`;

const Label = styled.label`
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9a9aaa;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  font-family: 'Georgia', serif;
  font-size: 0.9rem;
  color: #0a0a0f;
  background: #f8f5ef;
  border: 1px solid #e8e2d8;
  padding: 0.8em 1em;
  outline: none;
  transition: border-color 0.2s ease;
  &:focus { border-color: #c9a84c; background: #fff; }
  &::placeholder { color: #c0b8ae; }
`;

const Select = styled.select`
  font-family: 'Georgia', serif;
  font-size: 0.9rem;
  color: #0a0a0f;
  background: #f8f5ef;
  border: 1px solid #e8e2d8;
  padding: 0.8em 1em;
  outline: none;
  transition: border-color 0.2s ease;
  cursor: pointer;
  &:focus { border-color: #c9a84c; background: #fff; }
`;

const Textarea = styled.textarea`
  font-family: 'Georgia', serif;
  font-size: 0.9rem;
  color: #0a0a0f;
  background: #f8f5ef;
  border: 1px solid #e8e2d8;
  padding: 0.8em 1em;
  outline: none;
  transition: border-color 0.2s ease;
  resize: vertical;
  min-height: 120px;
  &:focus { border-color: #c9a84c; background: #fff; }
  &::placeholder { color: #c0b8ae; }
`;

const SubmitBtn = styled.button<{ sent?: boolean }>`
  width: 100%;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1em;
  border: none;
  background: ${({ sent }) => sent ? '#2a7a4b' : 'linear-gradient(135deg, #c9a84c, #e8d5a3)'};
  color: ${({ sent }) => sent ? '#fff' : '#0a0a0f'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  margin-top: 0.5em;
  &:hover:not(:disabled) {
    box-shadow: 0 4px 20px rgba(201,168,76,0.4);
    transform: translateY(-1px);
  }
`;

/* ── Map strip ── */
const MapStrip = styled.div`
  background: linear-gradient(135deg, #0a0a0f, #13131f);
  padding: 4em 2em;
  text-align: center;
`;

const MapInner = styled.div`max-width: 900px; margin: 0 auto;`;

const MapTitle = styled.h3`
  font-family: 'Georgia', serif;
  color: #f0ece4;
  font-size: 1.6rem;
  margin: 0 0 0.4em;
`;

const MapSub = styled.p`
  color: #7a7a8a;
  font-size: 0.9rem;
  margin: 0 0 2em;
  font-family: 'Georgia', serif;
`;

const MapEmbed = styled.div`
  width: 100%;
  height: 320px;
  background: #1a1a2e;
  border: 1px solid rgba(201,168,76,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9a84c;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(0.3) invert(0.1);
  }
`;

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PageWrapper>
      <Navbar />
      <NavSpacer />

      <Hero>
        <Eyebrow>Get In Touch</Eyebrow>
        <HeroTitle>Contact Us</HeroTitle>
        <HeroSub>Have a question, need a quote, or want to make a booking? We're here to help.</HeroSub>
        <GoldLine />
      </Hero>

      <MainSection>
        <InfoCol>
          <InfoCard>
            <InfoCardTitle>Contact Details</InfoCardTitle>
            <ContactRow>
              <IconBox><FontAwesomeIcon icon={faPhoneAlt} /></IconBox>
              <ContactText>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue>+251 912-345-678</ContactValue>
              </ContactText>
            </ContactRow>
            <ContactRow>
              <IconBox><FontAwesomeIcon icon={faEnvelope} /></IconBox>
              <ContactText>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>info@carent.com</ContactValue>
              </ContactText>
            </ContactRow>
            <ContactRow>
              <IconBox><FontAwesomeIcon icon={faMapMarkerAlt} /></IconBox>
              <ContactText>
                <ContactLabel>Head Office</ContactLabel>
                <ContactValue>Addis Ababa, Ethiopia</ContactValue>
              </ContactText>
            </ContactRow>
          </InfoCard>

          <InfoCard>
            <InfoCardTitle>Opening Hours</InfoCardTitle>
            <HoursGrid>
              <HourRow>Mon – Fri <br /><span>8am – 8pm</span></HourRow>
              <HourRow>Saturday <br /><span>9am – 6pm</span></HourRow>
              <HourRow>Sunday <br /><span>10am – 4pm</span></HourRow>
              <HourRow>Holidays <br /><span>10am – 2pm</span></HourRow>
            </HoursGrid>
            <ContactRow style={{ marginTop: '1.5em', marginBottom: 0 }}>
              <IconBox><FontAwesomeIcon icon={faClock} /></IconBox>
              <ContactText>
                <ContactLabel>24/7 Roadside</ContactLabel>
                <ContactValue>Emergency line always open</ContactValue>
              </ContactText>
            </ContactRow>
          </InfoCard>

          <InfoCard>
            <InfoCardTitle>Follow Us</InfoCardTitle>
            <SocialRow>
              <SocialBtn href="https://wa.me/915552348469" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </SocialBtn>
              <SocialBtn href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialBtn>
              <SocialBtn href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </SocialBtn>
            </SocialRow>
          </InfoCard>
        </InfoCol>

        <FormCard>
          <FormTitle>Send Us a Message</FormTitle>
          <FormSub>Fill in the form below and we'll get back to you within 24 hours.</FormSub>

          <FormRow>
            <Field>
              <Label>Full Name</Label>
              <Input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" />
            </Field>
            <Field>
              <Label>Email Address</Label>
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
            </Field>
          </FormRow>

          <FormRow>
            <Field>
              <Label>Phone Number</Label>
              <Input name="phone" value={form.phone} onChange={handleChange} placeholder="+251 912 345 678" />
            </Field>
            <Field>
              <Label>Subject</Label>
              <Select name="subject" value={form.subject} onChange={handleChange}>
                <option value="">Select a topic</option>
                <option value="booking">Make a Booking</option>
                <option value="quote">Request a Quote</option>
                <option value="support">Customer Support</option>
                <option value="corporate">Corporate Account</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </Select>
            </Field>
          </FormRow>

          <Field>
            <Label>Message</Label>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
            />
          </Field>

          <SubmitBtn sent={sent} onClick={sent ? undefined : handleSubmit} disabled={sent}>
            <FontAwesomeIcon icon={sent ? faCheckCircle : faPaperPlane} />
            {sent ? "Message Sent!" : "Send Message"}
          </SubmitBtn>
        </FormCard>
      </MainSection>

      <MapStrip>
        <MapInner>
          <MapTitle>Find Our Office</MapTitle>
          <MapSub>Addis Ababa, Ethiopia — open 7 days a week</MapSub>
          <MapEmbed>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.2167!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f4!2sConnaught+Place%2C+Addis+Ababa!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen
              loading="lazy"
            />
          </MapEmbed>
        </MapInner>
      </MapStrip>

      <Footer />
    </PageWrapper>
  );
}