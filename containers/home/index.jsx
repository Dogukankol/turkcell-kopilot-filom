import React from 'react';
import './home.scss';
import {HomeHero} from '@/components'
import HowToWork from './howToWork'
import Product from './product'
import WhyCoPilot from './whyCoPilot'
import HomeInfonSSS from './HomeInfonSSS'
import Campaign from './Campaign'
import WhatCanYouDo from './WhatCanYouDo';

function Home() {
  return (
    <>
      <HomeHero />
      <HowToWork />
      <Product />
      <WhyCoPilot />
      <WhatCanYouDo />
      <Campaign />
      <HomeInfonSSS />
      <i className='icon-arrow'></i>
    </>
  )
}

export default Home