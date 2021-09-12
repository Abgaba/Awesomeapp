import React from 'react';
import web from '../src/Images/rocket.jpg';
import Common from './Common';

const Home = () => {
    return (
        <>
          <Common name="Grow your business with" img={web} visit="/service" btnName="Get Started" />
        </>
    );
}

export default Home;
