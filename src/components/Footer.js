// src/components/FooterSection.jsx
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FooterBar = styled.footer`
    background-color: rgba(30, 30, 30, 0.9);
    backdrop-filter: saturate(120%) blur(2px);
    padding: 20px 16px;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const FooterInner = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    gap: 10px;
`;

const Line = styled.p`
    color: #e0e0e0;
    margin: 0;
    font-size: 0.95rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const Small = styled.small`
    color: #bdbdbd;
`;

const Links = styled.nav`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
`;

const LinkDot = styled.span`
    color: #8f8f8f;
`;

const FooterLink = styled.a`
    color: #d0d0d0;
    text-decoration: none;
    border-bottom: 1px dashed transparent;
    transition: border-color 0.2s ease, color 0.2s ease;

    &:hover,
    &:focus-visible {
        color: #ffffff;
        border-bottom-color: rgba(255, 255, 255, 0.35);
        outline: none;
    }
`;

function rangeYear(startYear, nowYear) {
  if (!startYear || startYear >= nowYear) return `${nowYear}`;
  return `${startYear}–${nowYear}`;
}

const FooterSection = ({
                         ownerName = "Boujar Coaching",
                         startYear = 2024,
                         developerName = "Cato Akay",
                         developerUrl = "https://www.instagram.com/catoakay/",
                         showDeveloperCredit = true,
                         policyLinks = [],
                       }) => {
  const nowYear = new Date().getFullYear();
  const yearText = rangeYear(startYear, nowYear);

  return (
    <FooterBar role="contentinfo" aria-label="Site footer">
      <FooterInner>
        <Line>
          &copy; {yearText} {ownerName}. All rights reserved.
        </Line>

        {policyLinks.length > 0 && (
          <Links aria-label="Footer links">
            {policyLinks.map((l, i) => (
              <React.Fragment key={l.href || l.label}>
                {i > 0 && <LinkDot aria-hidden>•</LinkDot>}
                <FooterLink href={l.href}>{l.label}</FooterLink>
              </React.Fragment>
            ))}
          </Links>
        )}

        {showDeveloperCredit && (
          <Small>
            {developerUrl ? (
              <>
                Built by{" "}
                <FooterLink href={developerUrl} rel="noopener noreferrer" target="_blank">
                  {developerName}
                </FooterLink>
              </>
            ) : (
              <>&copy; Built by {developerName}</>
            )}
          </Small>
        )}
      </FooterInner>
    </FooterBar>
  );
};

FooterSection.propTypes = {
  ownerName: PropTypes.string,
  startYear: PropTypes.number, // first year the site went live
  developerName: PropTypes.string,
  developerUrl: PropTypes.string,
  showDeveloperCredit: PropTypes.bool,
  policyLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default FooterSection;

/*
Usage:

<FooterSection
  ownerName="Boujar Coaching"
  startYear={2024}
  developerName="Cato H. Akay"
  developerUrl="https://your-site.example"
  showDeveloperCredit
  policyLinks={[
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ]}
/>
*/
