import './App.css'
import { Navigation } from './components/Navigation.jsx'
import { Body } from './components/Body.jsx'
import { Settings } from './components/Settings.jsx'
import { SocialNetworks } from './components/SocialNetworks.jsx'
import { NavigationForMobile } from './components/NavigationForMobile.jsx'
import { Footer } from './components/Footer.jsx'

export const App = () => {
  return (
    <>
      <Navigation />
      <Body />
      <Footer />
      <div className='settings-and-social-networks'>
        <Settings />
        <SocialNetworks />
      </div>
      <NavigationForMobile />
    </>
  )
}
