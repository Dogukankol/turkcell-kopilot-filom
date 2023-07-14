import React from 'react';
import {HomeHero} from '@/components'
import HowToWork from './howToWork'
import Product from './product'
import WhyCoPilot from './whyCoPilot'
import HomeInfonSSS from './HomeInfonSSS'
import Campaign from './Campaign'
import WhatCanYouDo from './WhatCanYouDo';

import ModalServicePoint from './Product/Modals/servicePoint';

function Home() {
  return (
    <>
      <HomeHero />
      <HowToWork />
      <Product />
      <WhyCoPilot />
      <WhatCanYouDo />
      <HomeInfonSSS />
      
      <ModalServicePoint />
    </>
  )
}

export default Home