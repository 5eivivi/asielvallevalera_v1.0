import './Navigation.css'

import NavigationMenus from './NavigationMenus.jsx'

// My logo is for both screen size desktop and mobile.
import AnchorWithMyLogo from '../components/AnchorWithMyLogo.jsx'

export const Navigation = () => {
  return (
    <aside className='navigation'>
      <div className='navigation__container'>

        {/*  My logo */}
        <AnchorWithMyLogo />

        <nav>
          <NavigationMenus />
        </nav>
      </div>
    </aside>
  )
}
