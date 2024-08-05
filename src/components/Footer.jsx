// components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled.a`
  margin: 0 10px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
        </FooterContainer>
    );
};

export default Footer;
