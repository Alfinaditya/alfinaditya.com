import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <div>
      <div>👨</div>
      <a href='https://github.com/Alfinaditya' rel='noreferrer' target='_blank'>
        <StaticImage alt='github-icon' src='../svg/github.svg' />
      </a>
      <a href='mailto:alfinaditia02@gmail.com'>
        <StaticImage alt='gmail-icon' src='../svg/gmail.svg' />
      </a>
      <a
        href='https://www.linkedin.com/in/alfin-aditya-617120184/'
        rel='noreferrer'
        target='_blank'
      >
        <StaticImage alt='linkedin-icon' src='../svg/linkedin.svg' />
      </a>
      <h1>Hi i’m Alfin👏</h1>
      <h1>i’m a Web Developer</h1>
      <button>Download CV</button>
    </div>
  );
};

export default Hero;
