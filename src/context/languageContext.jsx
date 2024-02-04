// Uncomment lines with ❌ for storing language in localStorage.

import { createContext, useState } from 'react'

import EnglishMessages from '../assets/languages/en-US.json'
import SpanishMessages from '../assets/languages/es-ES.json'

// FormatJS, module to change the language.
import { IntlProvider } from 'react-intl'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  let defaultLocale
  let defaultMessages

  // const langFromStorage = localStorage.getItem('lang') ❌
  const langFromStorage = 'en-US'

  if (langFromStorage) {
    defaultLocale = langFromStorage

    if (langFromStorage === 'en-US') {
      defaultMessages = EnglishMessages
    } 
    // else if (langFromStorage === 'es-ES') { ❌
    //   defaultMessages = SpanishMessages
    // } ❌
    // else { ❌
    //   defaultLocale = 'en-US'
    //   defaultMessages = EnglishMessages
    // } ❌
  } 
  // else { ❌
  //   const langOS = navigator.language // To get Operative System language.
  //   localStorage.setItem('lang', langOS)
  //   defaultLocale = langOS
  //   if (langOS === 'en-US') {
  //     defaultMessages = EnglishMessages
  //   } else if (langOS === 'es-ES') {
  //     defaultMessages = SpanishMessages
  //   } else {
  //     defaultMessages = EnglishMessages
  //   }
  // } ❌

  const [locale, setLocale] = useState(defaultLocale)
  const [messages, setMessages] = useState(defaultMessages)

  const setLanguage = (englishOrSpanish) => {
    if (englishOrSpanish === defaultLocale) {
      if (englishOrSpanish === 'en-US') {
        setLocale('en-US')
        setMessages(EnglishMessages)
      } else {
        setLocale('es-ES')
        setMessages(SpanishMessages)
      }
    } else {
      if (englishOrSpanish === 'en-US') {
        setLocale('en-US')
        setMessages(EnglishMessages)
        // localStorage.setItem('lang', 'en-US') ❌
      } else {
        setLocale('es-ES')
        setMessages(SpanishMessages)
        // localStorage.setItem('lang', 'es-ES') ❌
      }
    }
  }

  return (
    <LanguageContext.Provider value={
      {
        setLanguage: setLanguage,
        locale
      }
    }
    >
      <IntlProvider locale={locale} messages={messages} defaultLocale='en-US'>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}
