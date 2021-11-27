import React from 'react';
import {
  Description,
  DownloadCV,
  DownloadCVIcon,
  GithubIcon,
  GmailIcon,
  HeroContainer,
  IconContainer,
  LinkedInIcon,
  ProfilePicture,
} from './Hero.style';
import { css } from '@emotion/react';
import CV from '../contents/assets/CV.pdf';

const Hero = () => {
  return (
    <HeroContainer>
      <ProfilePicture>
        <span>👨</span>
      </ProfilePicture>
      <Description>
        <div>
          <h1>Hi i’m Alfin</h1>
          <span>👏</span>
        </div>
        <h1>i’m a Web Developer</h1>
      </Description>
      <IconContainer>
        <a
          href='https://github.com/Alfinaditya'
          rel='noreferrer'
          target='_blank'
        >
          <GithubIcon />
        </a>

        <a href='mailto:alfinaditia02@gmail.com'>
          <GmailIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/alfin-aditya-617120184/'
          rel='noreferrer'
          target='_blank'
        >
          <LinkedInIcon />
        </a>
      </IconContainer>
      <a
        href={CV}
        css={css`
          text-decoration: none;
        `}
        download='CV.pdf'
      >
        <DownloadCV>
          <DownloadCVIcon />
          Download CV
        </DownloadCV>
      </a>
    </HeroContainer>
  );
};

export default Hero;
