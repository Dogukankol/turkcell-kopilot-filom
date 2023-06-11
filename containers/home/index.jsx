import React from 'react';
import './home.scss';
import {HomeHero} from '@/components'
import HowToWork from './howToWork'
import Product from './product'
import WhyCoPilot from './whyCoPilot'
import HomeInfonSSS from './HomeInfonSSS'
import Campaign from './Campaign'

function Home() {
  return (
    <>
      <HomeHero />
      <HowToWork />
      <Product />
      <WhyCoPilot />
      <Campaign />
      <HomeInfonSSS />
      <i className='icon-arrow'></i>
    </>
  )
}

export default Home