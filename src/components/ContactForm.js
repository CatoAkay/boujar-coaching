import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";

/* ─── Styled components ─────────────────────────────────────── */

const ContactSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9);
`;

const ContactTitle = styled.h2`
    font-size: 3rem;
    color: #dcdcdc;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 40px;
`;

const Form = styled.form`
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 6px;
`;

const Label = styled.label`
    color: #b0b0b0;
    font-size: 0.9rem;
    margin-bottom: 4px;
`;

const inputBase = `
    padding: 15px;
    font-size: 1.1rem;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    font-family: inherit;
    transition: border-color 0.2s ease;

    &::placeholder {
        color: #888;
    }

    &:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.3);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const Input = styled.input`${inputBase}`;

const TextArea = styled.textarea`
    ${inputBase}
    resize: vertical;
    min-height: 120px;
`;

const Button = styled.button`
    padding: 15px;
    background-color: #2b4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 6px;
    transition: background-color 0.3s;

    &:hover:enabled {
        background-color: #1f3838;
    }

    &:disabled {
        background-color: #888;
        cursor: not-allowed;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;

const SuccessMessage = styled.div`
    margin-top: 20px;
    padding: 16px;
    background: rgba(0, 180, 140, 0.12);
    border: 1px solid rgba(0, 180, 140, 0.35);
    border-radius: 8px;
    color: #6ee7d0;
    font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
    margin-top: 16px;
    padding: 14px 16px;
    background: rgba(220, 60, 60, 0.12);
    border: 1px solid rgba(220, 60, 60, 0.35);
    border-radius: 8px;
    color: #f08080;
    font-size: 1rem;
`;

const Warning = styled.div`
    color: #ffb347;
    font-size: 0.95rem;
    margin-bottom: 4px;
    text-align: left;
`;

const spin = keyframes`
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
    margin: 20px auto;
    border: 4px solid rgba(220, 220, 220, 0.2);
    border-top-color: #2b4d4d;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: ${spin} 1s linear infinite;
`;

/* ─── Helpers ─────────────────────────────────────────────────── */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const emailjsConfigured =
    Boolean(EMAILJS_SERVICE_ID) &&
    Boolean(EMAILJS_TEMPLATE_ID) &&
    Boolean(EMAILJS_PUBLIC_KEY);

/* ─── Component ───────────────────────────────────────────────── */

const INITIAL_FORM = { name: "", email: "", message: "" };

function ContactForm() {
    const [formData, setFormData]   = useState(INITIAL_FORM);
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending]     = useState(false);
    const [sendError, setSendError] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!formData.name.trim())    errors.name    = "Name is required.";
        if (!formData.email.trim())   errors.email   = "Email is required.";
        else if (!EMAIL_REGEX.test(formData.email)) errors.email = "Please enter a valid email address.";
        if (!formData.message.trim()) errors.message = "Message is required.";
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear field error on change
        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSendError(null);

        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        if (!emailjsConfigured) {
            setSendError("Contact form is not configured yet. Please reach out directly via Instagram or email.");
            return;
        }

        setSending(true);

        emailjs
            .send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name:    formData.name,
                    email:   formData.email,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setFormData(INITIAL_FORM);
                setSubmitted(true);
                setSending(false);
            })
            .catch(() => {
                setSending(false);
                setSendError("Something went wrong — please try again in a moment.");
            });
    };

    return (
        <ContactSection id="contact">
            <ContactTitle>Contact Me</ContactTitle>

            {submitted ? (
                <SuccessMessage role="status">
                    Thank you! I'll be in touch soon 🙌
                </SuccessMessage>
            ) : (
                <Form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <FieldWrapper>
                        <Label htmlFor="contact-name">Your Name</Label>
                        <Input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="e.g. Andreas Timenes"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={sending}
                            aria-describedby={fieldErrors.name ? "error-name" : undefined}
                            aria-invalid={Boolean(fieldErrors.name)}
                            autoComplete="name"
                        />
                        {fieldErrors.name && (
                            <Warning id="error-name" role="alert">{fieldErrors.name}</Warning>
                        )}
                    </FieldWrapper>

                    <FieldWrapper>
                        <Label htmlFor="contact-email">Your Email</Label>
                        <Input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={sending}
                            aria-describedby={fieldErrors.email ? "error-email" : undefined}
                            aria-invalid={Boolean(fieldErrors.email)}
                            autoComplete="email"
                        />
                        {fieldErrors.email && (
                            <Warning id="error-email" role="alert">{fieldErrors.email}</Warning>
                        )}
                    </FieldWrapper>

                    <FieldWrapper>
                        <Label htmlFor="contact-message">Your Message</Label>
                        <TextArea
                            id="contact-message"
                            name="message"
                            rows="5"
                            placeholder="Tell me about your goals, schedule, or anything else..."
                            value={formData.message}
                            onChange={handleChange}
                            disabled={sending}
                            aria-describedby={fieldErrors.message ? "error-message" : undefined}
                            aria-invalid={Boolean(fieldErrors.message)}
                        />
                        {fieldErrors.message && (
                            <Warning id="error-message" role="alert">{fieldErrors.message}</Warning>
                        )}
                    </FieldWrapper>

                    {sending ? (
                        <Spinner aria-label="Sending…" />
                    ) : (
                        <Button type="submit">Send Message</Button>
                    )}

                    {sendError && (
                        <ErrorMessage role="alert">{sendError}</ErrorMessage>
                    )}
                </Form>
            )}
        </ContactSection>
    );
}

export default ContactForm;