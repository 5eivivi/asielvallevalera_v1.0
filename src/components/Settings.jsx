import './Settings.css'
// Language.
import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext.jsx' // Language context.
import { LuLanguages } from 'react-icons/lu' // Language icon.

// Hook - Theme (light or dark).
import { useTheme } from '../hooks/useTheme.jsx'
import { MdOutlineLightMode as LightIcon, MdOutlineModeNight as DarkIcon } from 'react-icons/md'
// import {IoSettingsOutline} from 'react-icons/io' // System icon.
// Skins
import { TfiPaintRoller } from 'react-icons/tfi'
import { useSkin } from '../hooks/useSkin.jsx'

export const Settings = () => {
  const language = useContext(LanguageContext) // Language.
  const { theme, handleChangeTheme } = useTheme() // Hook - Theme (light or dark).
  const { handleSkin } = useSkin() // Skins.

  return (
    <div className='settings'>
      {/* Theme */}
      {
        theme === 'dark'
          ? ((language.locale === 'en-US')
              ? <button className='icon settings-icon-color' title='Light Mode' onClick={() => handleChangeTheme()}><LightIcon /></button>
              : <button className='icon settings-icon-color' title='Modo Claro' onClick={() => handleChangeTheme()}><LightIcon /></button>)
          : ((language.locale === 'en-US')
              ? <button className='icon settings-icon-color' title='Dark Mode' onClick={() => handleChangeTheme()}><DarkIcon /></button>
              : <button className='icon settings-icon-color' title='Modo Oscuro' onClick={() => handleChangeTheme()}><DarkIcon /></button>)
      }

      {/* Language */}
      {
        language.locale === 'en-US'
          ? <button className='icon settings-icon-color' title='Cambiar a Español' onClick={() => { language.setLanguage('es-ES') }}><LuLanguages /></button>
          : <button className='icon settings-icon-color' title='Change to English' onClick={() => { language.setLanguage('en-US') }}><LuLanguages /></button>
      }

      {/* Skins */}
      {
        language.locale === 'en-US'
          ? <button className='icon settings-icon-color' title='Change Skin' onClick={() => handleSkin()}><TfiPaintRoller /></button>
          : <button className='icon settings-icon-color' title='Cambiar Color' onClick={() => handleSkin()}><TfiPaintRoller /></button>
      }
    </div>
  )
}
