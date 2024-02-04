import './NavigationForMobile.css'

// Multi language (Format.JS library).
import { LanguageContext } from '../context/languageContext.jsx'
import { useContext } from 'react'

// Icons.
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { LiaToolsSolid } from 'react-icons/lia'
import { MdWorkOutline } from 'react-icons/md'
import { BsPlusLg } from 'react-icons/bs'
import { RxDividerHorizontal } from 'react-icons/rx'

// Custom Hook que maneja si el hidden o visible la NavigationForMobile.
import { useHiddenOrVisibleNavigationForMobile } from '../hooks/useHiddenOrVisibleNavigationForMobile.jsx'

// My logo is for both screen size desktop and mobile.
import AnchorWithMyLogo from '../components/AnchorWithMyLogo.jsx'

export const NavigationForMobile = () => {
  const language = useContext(LanguageContext)

  // Custom Hook.
  // Visible or hidden Settings.jsx and SocialNetworks.jsx over NavigationForMobile.jsx for screen width <= 850px (App.css).
  const { visibility, handleclick } = useHiddenOrVisibleNavigationForMobile()

  return (
    <aside className='navigation-for-mobile'>
      <div className='navigation-for-mobile__container'>

        {/*  My logo */}
        <AnchorWithMyLogo />

        <nav>
          <a href='#home' className='icon' title={language.locale === 'en-US' ? 'Home' : 'Inicio'}>
            <AiOutlineHome />
          </a>
          <a href='#about' className='icon' title={language.locale === 'en-US' ? 'About' : 'Sobre mi'}>
            <BiUser />
          </a>
          <a href='#skills' className='icon' title={language.locale === 'en-US' ? 'Skills' : 'Habilidades'}>
            <LiaToolsSolid />
          </a>
          <a href='#projects' className='icon' title={language.locale === 'en-US' ? 'Projects' : 'Proyectos'}>
            <MdWorkOutline />
          </a>
        </nav>
        {
          visibility === '-'
            ? <button className='icon' title='On' onClick={() => { handleclick() }}><BsPlusLg /></button>
            : <button className='icon' title='Off' onClick={() => { handleclick() }}><RxDividerHorizontal /></button>
        }
      </div>
    </aside>
  )
}
