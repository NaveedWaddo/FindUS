import '@/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import type { AppProps } from 'next/app'
import { Footer } from '@findus-org/ui/src/components/organisms/Footer'
import { Header } from '@findus-org/ui/src/components/organisms/Header'
import { MenuItem } from '@findus-org/types'
import { ReduxProvider } from '@findus-org/store/Provider'
import { ApolloProvider } from '@findus-org/network/src/config/apollo'
import { AppLevelListeners } from '@findus-org/ui/src/components/atoms/AppLevelListeners'
import { Notifications } from '@findus-org/ui/src/components/organisms/Notifications'
import { useInitialiseUser } from '@findus-org/hooks/src/user'

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/', loggedIn: true },
  { label: 'About', href: '/about', loggedIn: false },
]
const SUBMENUITEMS: MenuItem[] = [
  ...MENUITEMS,
  { label: 'FAQs', href: '/faqs', loggedIn: false },
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <AppLevelListeners role="witness" />

        <Header menuItems={MENUITEMS} sideMenuItems={SUBMENUITEMS} />

        <Component {...pageProps} />
        <Footer />
        <Notifications />
      </ApolloProvider>
    </ReduxProvider>
  )
}
