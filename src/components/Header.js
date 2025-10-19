// src/components/Header.tsx
import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
    height: 100vh;
    position: relative;
    background-image: url("/pic/boujarFotball.jpeg");
    background-size: cover;
    background-position: 50% 24%;
    display: flex;
    flex-direction: column; /* beholder vertikal stabling */
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    padding: 20px;
    position: relative; /* låser stacking over overlay */
    z-index: 2;
    color: #dcdcdc;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9);
    font-family: 'Arial Black', sans-serif;

    @media (max-width: 600px) {
        font-size: 2.2rem;
        padding: 10px 0;
    }
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    color: #ffffff;
    margin-top: 10px;
    position: relative; /* sikrer samme lag som tittel */
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

    @media (max-width: 600px) {
        font-size: 1.1rem;
        word-break: break-word;
    }
`;

/* Why: kun spacing + z-index over overlay, rører ikke typografi */
const ButtonRow = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 18px;

    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

/* Match mørk/glow-stil, fokus/hover for a11y */
const CTAButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    border-radius: 14px;
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: 0.4px;
    color: #0b0b0b;
    background: linear-gradient(180deg, #00e0c2, #00bfa6);
    box-shadow: 0 10px 24px rgba(0, 191, 166, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);
    text-decoration: none;
    transform: translateZ(0);
    transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s ease;

    &:hover,
    &:focus-visible {
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 14px 32px rgba(0, 191, 166, 0.45);
        outline: none;
        filter: brightness(1.02);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 600px) {
        width: 100%;
        max-width: 320px;
    }
`;

function Header() {
  return (
    <HeaderSection>
      <Title>Boujar Coaching</Title>
      <Subtitle>Start your off season here!</Subtitle>

      <ButtonRow>
        <CTAButton
          href="https://app.fitr.training/p/OffseasonTraining"  // bytt til ekstern URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start 14 days trial (opens in a new tab)"
        >
          14 days trial
        </CTAButton>
      </ButtonRow>
    </HeaderSection>
  );
}

export default Header;
