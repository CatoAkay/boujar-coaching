import React from "react";
import styled from "styled-components";

const StyledExpectSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9);
`;

const StyledExpectTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffffff;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
`;

const StyledExpectDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 20px auto;
    color: #d4d4d4;
`;

const StyledImageContainer = styled.div`
    position: relative;
    margin: 30px auto;
    display: inline-block;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    max-width: 600px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    &:hover .overlay-text {
        opacity: 1;
    }
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
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 15px;
`;

function Expect() {
  return (
    <StyledExpectSection id="expect">
      <StyledExpectTitle>How Coaching Works</StyledExpectTitle>
      <StyledExpectDescription>
        Coaching with Boujar is simple and effective: you get individual
        programming built around your goals, schedule, and training history;
        weekly check-ins with clear targets and adjustments; video feedback
        on lifts and skills; and practical guidance on recovery, nutrition
        basics, and competition prep when needed. You bring the effort, I
        bring the plan, the structure, and the accountability to keep you
        progressing week after week.
      </StyledExpectDescription>

      <StyledImageContainer>
        <StyledExpectImage src="/pic/boujar5.jpg" alt="How Coaching Works" />
        <StyledOverlayText className="overlay-text">
          “Consistency beats motivation. Show up—I’ll handle the plan.”
        </StyledOverlayText>
      </StyledImageContainer>
    </StyledExpectSection>
  );
}

export default Expect;
