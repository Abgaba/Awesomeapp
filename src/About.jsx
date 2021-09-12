import React from 'react';
import Common from './Common';
import web from '../src/Images/ab1.jpg';

const About = () => {
  return (
    <>
      <Common name="Welcome to About page" img={web} visit="/contact" btnName="Contact now" />
    </>
  );
}

export default About;
