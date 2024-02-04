import { useState, useEffect } from 'react'

export const useTheme = () => {
  // Fijo, por defecto, light mode.
  // const [theme, setTheme] = useState('light')

  // Leer el modo del Sistema Operativo.
  const [theme, setTheme] = useState(() => {
    // matchMedia comprueba la existencia de propiedad prefers-color-scheme.
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  useEffect(() => {
    // Global Styles.
    const style = document.createElement('style')
    if (theme === 'dark') {
      // document.getElementById('navigation').classList.add('dark-navigation')
      // document.getElementById('body').classList.add('dark-body') // Body.jsx
      // document.getElementById('settings').classList.add('dark-settings')
      // document.getElementById('social-networks').classList.add('dark-social-networks')
      // document.getElementById('mobile-navigation').classList.add('dark-mobile-navigation')
      style.innerHTML = `
        :root {
          /* ⬇️ Dark mode ⬇️ */
          /* Backgrounds */
          --background-navigation-color: #1A1A1A;
          --background-body-color: #292929;
          --background-body-2-color: #292929ec; 

          /* Letter */
          --primary-letter-color: #fff;
          --secondary-letter-color: #ffffff6c;
        }
      `
    } else {
      // Al quitarle la clase dark ya se pone el modo claro.
      // document.getElementById('navigation').classList.remove('dark-navigation')
      // document.getElementById('body').classList.remove('dark-body')
      // document.getElementById('settings').classList.remove('dark-settings')
      // document.getElementById('social-networks').classList.remove('dark-social-networks')
      // document.getElementById('mobile-navigation').classList.remove('dark-mobile-navigation')
      style.innerHTML = `
        :root {
          /* ⬇️ Light mode ⬇️ */
          /* Backgrounds */
          --background-navigation-color: #fff;
          --background-body-color: #EDEDED; 
          --background-body-2-color: #fff;          

          /* Letter */
          --primary-letter-color: #000000df;
          --secondary-letter-color: #000000c0;
        }
      `
    }

    document.head.appendChild(style)
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return { theme, handleChangeTheme }
}
