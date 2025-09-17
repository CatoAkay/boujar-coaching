// src/components/About.tsx
import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9);
`;

const StyledTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: #dcdcdc;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 20px;
`;

const StyledDescription = styled.p`
    font-size: 1.2rem;
    margin: 20px auto;
    max-width: 800px;
    line-height: 1.6;
    color: #b0b0b0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

/* Why: use grid for tidy columns, keep items consistent in width */
const StyledList = styled.ul`
    margin: 24px auto;
    padding: 0;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px 24px;
    list-style: none;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

/* Why: custom bullets + better readability on dark bg */
const StyledListItem = styled.li`
    position: relative;
    padding: 14px 16px 14px 48px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
    color: #d0d0d0;
    text-align: left; /* avoid centered list text */
    line-height: 1.55;

    &::before {
        content: "";
        position: absolute;
        left: 18px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #00d1b2; /* accent bullet */
        box-shadow: 0 0 0 6px rgba(0, 209, 178, 0.15);
    }

    /* keyboard focus for a11y when items become focusable (links/buttons inside) */
    &:focus-within {
        outline: 2px solid #00d1b2;
        outline-offset: 2px;
    }
`;

const StyledImageContainer = styled.div`
    position: relative;
    margin: 30px auto;
    display: inline-block;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    max-width: 400px;
    height: auto;
    transition: transform 0.3s ease;
`;

const StyledExpectImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 15px;
`;

const StyledOverlayText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 15px;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
`;

const StyledImageContainerHover = styled(StyledImageContainer)`
  &:hover ${StyledExpectImage} {
    transform: scale(1.05);
  }
  &:hover ${StyledOverlayText} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
  }
`;

function About() {
  return (
    <StyledAboutSection id="about">
      {/* About Me Section */}
      <StyledTitle>About Me</StyledTitle>
      <StyledDescription>
        Hi, I’m Boujar — a Norwegian CrossFit Games athlete and coach. I help athletes and driven
        everyday performers move better, get stronger, and build sustainable habits. My coaching is
        practical, personalized, and shaped by years on the competition floor and in the gym.
      </StyledDescription>

      <StyledImageContainerHover>
        <StyledExpectImage src="/pic/boujar1.jpg" alt="Boujar coaching and training" />
        <StyledOverlayText>“Strong body. Sharp mind. Consistent habits.”</StyledOverlayText>
      </StyledImageContainerHover>

      {/* What to Expect Section */}
      <StyledTitle>What to Expect</StyledTitle>
      <StyledList>
        <StyledListItem>
          Individual programming built around your goals (strength, engine, gymnastics, mobility)
        </StyledListItem>
        <StyledListItem>
          Structured phases with clear weekly targets and measurable progress
        </StyledListItem>
        <StyledListItem>
          Weekly check-ins: training review, adjustments, and accountability
        </StyledListItem>
        <StyledListItem>
          Video feedback on lifts and skills to refine technique
        </StyledListItem>
        <StyledListItem>
          Competition prep (strategy, pacing, peaking) when needed
        </StyledListItem>
        <StyledListItem>
          Lifestyle guidance to support recovery, sleep, and consistency
        </StyledListItem>
      </StyledList>

      <StyledImageContainerHover>
        <StyledExpectImage src="/pic/boujar3.jpg" alt="Training results and progress with Boujar" />
        <StyledOverlayText>“Push with purpose. Progress on repeat.”</StyledOverlayText>
      </StyledImageContainerHover>

      {/* More Info */}
      <StyledTitle>More Info</StyledTitle>
      <StyledDescription>
        I’ve competed at the highest level and won multiple events—experiences that shape how I coach.
        You’ll get a clear plan, honest feedback, and a supportive partnership focused on long-term
        progress. Whether you’re chasing your first pull-up or prepping for the podium, we’ll build
        durable capacity, technical precision, and the mindset to perform when it counts.
      </StyledDescription>
    </StyledAboutSection>
  );
}

export default About;
