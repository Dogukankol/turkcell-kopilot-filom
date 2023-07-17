import { Header, Footer } from '@/components'
import Modals from '@/containers/Modals'
import 'swiper/css';
import '@/assets/css/_styles.scss'


import { StoreProvider } from "@/stores/store-provider";
import { store } from "@/stores";


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Modals />
        </StoreProvider>
      </body>
    </html>
  )
}
