import './NavigationMenus.css'

// Multilanguage (Format.JS library).
import { FormattedMessage } from 'react-intl'
import { LanguageContext } from '../context/languageContext.jsx'
import { useContext } from 'react'

// Icons.
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { LiaToolsSolid } from 'react-icons/lia'
import { MdWorkOutline } from 'react-icons/md'

export default function NavigationMenus () {
  const language = useContext(LanguageContext)
  return (
    <>
      <a href='#home' className='menus icon' title={language.locale === 'en-US' ? 'Home' : 'Inicio'}>
        <AiOutlineHome />
        <span className='icon-text disable-text'><FormattedMessage id='home' defaultMessage='Home' /></span>
      </a>
      <a href='#about' className='menus icon' title={language.locale === 'en-US' ? 'About' : 'Sobre mí'}>
        <BiUser />
        <span className='icon-text disable-text'><FormattedMessage id='about' defaultMessage='About' /></span>
      </a>
      <a href='#skills' className='menus icon' title={language.locale === 'en-US' ? 'Skills' : 'Habilidades'}>
        <LiaToolsSolid />
        <span className='icon-text disable-text'><FormattedMessage id='skills' defaultMessage='Skills' /></span>
      </a>
      <a href='#projects' className='menus icon' title={language.locale === 'en-US' ? 'Projects' : 'Proyectos'}>
        <MdWorkOutline />
        <span className='icon-text disable-text'><FormattedMessage id='projects' defaultMessage='Projects' /></span>
      </a>
    </>
  )
}
