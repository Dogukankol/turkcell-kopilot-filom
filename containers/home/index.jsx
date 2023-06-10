import React from 'react';
import './home.scss';
import {HomeHero} from '@/components'
import HowToWork from './howToWork'
import Product from './product'

function Home() {
  return (
    <>
      <HomeHero />
      <HowToWork />
      <Product />
      <i className='icon-arrow'></i>
    </>
  )
}

export default Home