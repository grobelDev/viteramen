import React, { Fragment } from 'react';

import Banner from './Banner';
import Navbar from './Navbar';
import Hero from './Hero';
import FeatureSection from './FeatureSection';

export default function App() {
  return (
    <Fragment>
      <Banner></Banner>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeatureSection></FeatureSection>
    </Fragment>
  );
}
