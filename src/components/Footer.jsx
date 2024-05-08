import './Footer.css'

// Multi language (Format.JS library).
import { FormattedMessage } from 'react-intl'

import NavigationMenus from './NavigationMenus.jsx'

import { SocialNetworks } from '../components/SocialNetworks.jsx'

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <article>
          <nav>
            <NavigationMenus />
          </nav>
        </article>

        <article className='social-networks-footer'>
          <SocialNetworks />
        </article>

        <article className='my-right-on-footer'>
          <span>&copy; Asiel Valle. <FormattedMessage id='footer' defaultMessage='All right reserved.' /></span>
        </article>
      </div>
    </footer>
  )
}
