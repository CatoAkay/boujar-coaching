import React from 'react';
import styled from 'styled-components';

/* ─── Static data ────────────────────────────────────────────── */

const TESTIMONIALS = [
    {
        id: 1,
        name: "Andreas Timenes",
        feedback: "Working with Boujar has been life-changing! I've never felt better.",
    },
    {
        id: 2,
        name: "Cato Akay",
        feedback: "The coaching sessions were tailored perfectly to my needs. Highly recommend!",
    },
    {
        id: 3,
        name: "Aleksander Fridén",
        feedback: "Incredible support and guidance! I've achieved results I never thought possible.",
    },
];

/* ─── Styled components ──────────────────────────────────────── */

const FeedbackContainer = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9);
`;

const FeedbackTitle = styled.h2`
    font-size: 3rem;
    color: #dcdcdc;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 40px;
`;

const FeedbackList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0;
`;

const FeedbackCard = styled.div`
    background-color: rgba(30, 30, 30, 0.8);
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 20px;
    margin: 15px;
    max-width: 300px;
    color: #b0b0b0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;

    p {
        font-size: 1rem;
        font-style: italic;
        margin: 0 0 8px;
    }

    h4 {
        margin-top: 10px;
        color: #dcdcdc;
        font-weight: bold;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
        background-color: rgba(40, 40, 40, 0.9);
        border-color: #dcdcdc;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;

/* ─── Component ──────────────────────────────────────────────── */

const Feedback = () => (
    <FeedbackContainer id="feedback">
        <FeedbackTitle>What Our Customers Say</FeedbackTitle>
        <FeedbackList>
            {TESTIMONIALS.map((item) => (
                <FeedbackCard key={item.id}>
                    <p>"{item.feedback}"</p>
                    <h4>— {item.name}</h4>
                </FeedbackCard>
            ))}
        </FeedbackList>
    </FeedbackContainer>
);

export default Feedback;
