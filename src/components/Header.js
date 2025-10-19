// src/components/Header.tsx
import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
    /* Why: svh løser iOS-URL-bar-issue, vh som fallback */
    height: 100vh;
    min-height: 100vh;
    @supports (min-height: 100svh) {
        min-height: 100svh;
        height: 100svh;
    }

    position: relative;
    background-image: url("/pic/boujarFotball.jpeg");
    background-size: cover;
    background-position: 50% 24%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-inline: 20px;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.72);
        z-index: 1;
    }

    /* Why: flytt fokus høyere på portrett for bedre “crop” */
    @media (max-width: 640px) {
        background-position: 50% 35%;
    }
`;

const Title = styled.h1`
    position: relative;
    z-index: 2;
    /* Fluid typografi */
    font-size: clamp(2.2rem, 6vw, 4rem);
    padding: clamp(8px, 2.5vw, 20px);
    color: #c9cfcd;
    text-shadow:
        0 0 10px rgba(0, 0, 0, 0.6),
        2px 2px 4px rgba(0, 0, 0, 0.7);
    font-family: 'Arial Black', sans-serif;
    line-height: 1.06;
    letter-spacing: 0.5px;
    text-wrap: balance; /* bedre linjebalanse på små skjermer */
`;

const BrandAccent = styled.span`
    background: linear-gradient(90deg, #a6abaf 0%, #8b9094 50%, #9da2a6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow:
        0 0 16px rgba(130, 135, 140, 0.25),
        0 0 32px rgba(130, 135, 140, 0.15);
`;

const GlowDivider = styled.div`
    position: relative;
    z-index: 2;
    /* Fluid bredde: min 140px, maks 450px, ~50% av viewport på mobil */
    width: clamp(140px, 50vw, 450px);
    height: 2px;
    margin: -6px auto 10px;
    background: linear-gradient(90deg, transparent, rgba(150, 155, 160, 0.85), transparent);
    box-shadow: 0 0 18px rgba(150, 155, 160, 0.28);

    @media (max-width: 480px) {
        /* Why: litt mykere glow på veldig små skjermer */
        box-shadow: 0 0 12px rgba(150, 155, 160, 0.22);
    }
`;

const Subtitle = styled.h2`
    position: relative;
    z-index: 2;
    font-size: clamp(0.98rem, 2.4vw, 1.25rem);
    color: #b7bcbc;
    margin-top: 10px;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.55);
    letter-spacing: 0.7px;
    text-transform: uppercase;
    opacity: 0.92;
    text-wrap: balance;
`;

const Em = styled.span`
    color: #d0d4d6;
    text-shadow:
        0 0 10px rgba(140, 145, 150, 0.26),
        0 0 4px rgba(140, 145, 150, 0.16);
    letter-spacing: 1.1px;
`;

const ButtonRow = styled.div`
    position: relative;
    z-index: 2;
    margin-top: clamp(14px, 3vw, 22px);

    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const CTAButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: clamp(12px, 2.2vw, 14px) clamp(18px, 3.2vw, 24px);
    border-radius: 14px;
    font-weight: 700;
    font-size: clamp(0.98rem, 2.2vw, 1.05rem);
    letter-spacing: 0.4px;
    color: #eceeef;
    background: linear-gradient(180deg, #3c4044 0%, #2a2e32 100%);
    box-shadow:
        0 8px 20px rgba(20, 20, 20, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
    text-decoration: none;
    transform: translateZ(0);
    transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s ease;

    &:hover,
    &:focus-visible {
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 12px 26px rgba(20, 20, 20, 0.6);
        outline: none;
        filter: brightness(1.05);
    }

    &:active {
        transform: translateY(0);
    }

    /* Why: litt bredere på mobil */
    @media (max-width: 600px) {
        width: min(100%, 320px);
    }

    /* A11y: respekter redusert bevegelse */
    @media (prefers-reduced-motion: reduce) {
        transition: none;
        &:hover,
        &:focus-visible {
            transform: none;
            box-shadow: 0 8px 20px rgba(20, 20, 20, 0.5);
        }
    }
`;

function Header() {
  return (
    <HeaderSection>
      <Title>
        <BrandAccent>Boujar Coaching</BrandAccent>
      </Title>
      <GlowDivider />
      <Subtitle>
        Own the <Em>Off-Season</Em>. Build the next season today.
      </Subtitle>

      <ButtonRow>
        <CTAButton
          href="https://app.fitr.training/p/OffseasonTraining"
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
