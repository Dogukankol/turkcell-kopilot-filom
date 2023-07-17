import React from 'react';
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
      <HomeInfonSSS />
    </>
  )
}

export default Home