import React from 'react';
import './home.scss';
import HomeHero from '@/components/homeHero'

function Home() {
  const accordions = [
    {
      title: "Turkcell Kopilot Filom nedir? 1",
      desc: "Turkcell Kopilot Filom servisinden faydalanmak için Turkcell Kurumsal Satış Yöneticiniz aracılığıyla Turkcell Kopilot Filom cihazı satın alabilir ve cihaz içerisindeki ya da cihaz ile birlikte temin edilecek Turkcell M2M hat ile Turkcell Kopilot Filom tarifesine abone olabilirsiniz. Fiyat bilgilerini https://www.turkcell.com.tr/kurumsal/kurumsal-cozumler/kopilot-filom web sitesinde bulabilirsiniz."
    },
    {
      title: "Turkcell Kopilot Filom nedir? 2",
      desc: "Turkcell Kopilot Filom servisinden faydalanmak için Turkcell Kurumsal Satış Yöneticiniz aracılığıyla Turkcell Kopilot Filom cihazı satın alabilir ve cihaz içerisindeki ya da cihaz ile birlikte temin edilecek Turkcell M2M hat ile Turkcell Kopilot Filom tarifesine abone olabilirsiniz. Fiyat bilgilerini https://www.turkcell.com.tr/kurumsal/kurumsal-cozumler/kopilot-filom web sitesinde bulabilirsiniz."
    },
    {
      title: "Turkcell Kopilot Filom nedir? 3",
      desc: "Turkcell Kopilot Filom servisinden faydalanmak için Turkcell Kurumsal Satış Yöneticiniz aracılığıyla Turkcell Kopilot Filom cihazı satın alabilir ve cihaz içerisindeki ya da cihaz ile birlikte temin edilecek Turkcell M2M hat ile Turkcell Kopilot Filom tarifesine abone olabilirsiniz. Fiyat bilgilerini https://www.turkcell.com.tr/kurumsal/kurumsal-cozumler/kopilot-filom web sitesinde bulabilirsiniz."
    }
  ]

  return (
    <>
      <HomeHero />
    </>
  )
}

export default Home