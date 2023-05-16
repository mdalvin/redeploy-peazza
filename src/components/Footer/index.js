import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconsLink,
  SocialIcons,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>peazza</SocialLogo>
            <SocialIcons>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener"
              >
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener"
              >
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener"
              >
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="YouTube"
                rel="noopener"
              >
                <FaYoutube />
              </SocialIconsLink>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener"
              >
                <FaLinkedin />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
