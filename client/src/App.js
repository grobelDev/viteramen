import React, { Fragment, useRef, useEffect } from 'react';

import Banner from './Banner';
import Navbar from './Navbar';
import { Hero, Hero3 } from './Hero';
import FeatureSection from './FeatureSection';
import StatsSection from './StatsSection';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Influencers from './Influencers';
import PatchNotes from './PatchNotes';
import Footer from './Footer';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = fun => useEffect(fun, []);

export default function App() {
  const myRef = useRef(null);

  function customScrollToRef() {
    scrollToRef(myRef);
  }

  return (
    <Fragment>
      <Banner></Banner>
      <Navbar></Navbar>
      <Hero></Hero>
      <Newsletter></Newsletter>
      <Hero3 scrollToRef={scrollToRef} refProp={myRef}></Hero3>
      <Testimonials></Testimonials>
      <FeatureSection refProp={myRef}></FeatureSection>
      <StatsSection></StatsSection>
      {/* <Influencers></Influencers> */}
      <PatchNotes></PatchNotes>
      <Footer></Footer>
    </Fragment>
  );
}
