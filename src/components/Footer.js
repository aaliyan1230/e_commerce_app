import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import routes from "../constants/routes.json";

const Footer = () => {
  const location = useLocation();

  return (
    <FooterWrapper>
      Copyright © 2022 Muhammad Aaliyan
      <GithubLink
        href="https://github.com/aaliyan1230"
        target="_blank"
        rel="noopener"
      >
        <FaGithub />
      </GithubLink>
      {location.pathname !== routes.PRODUCTS && (
        <BackgroundWave />
      )}
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 2rem;
`;

const GithubLink = styled.a`
  display: flex;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2rem;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const BackgroundWave = styled.div`
  display: block;
  box-sizing: border-box;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: ellipse(102% 100% at 50% 0%);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -100;
`;

export default Footer;
