import { useState, useEffect } from 'react'

export const useSkin = () => {
  const localS = localStorage.getItem('skin')

  const [skin, setSkin] = useState(() => {
    if (localS === 'green' || localS === 'pink' || localS === 'blue') {
      return localS
    } else {
      localStorage.setItem('skin', 'green')
      return 'green'
    }
  })

  const handleSkin = () => {
    setSkin(prev => {
      if (prev === 'green') {
        localStorage.setItem('skin', 'pink')
        return 'pink'
      }
      if (prev === 'pink') {
        localStorage.setItem('skin', 'blue')
        return 'blue'
      }
      if (prev === 'blue') {
        localStorage.setItem('skin', 'green')
        return 'green'
      }
    })
  }

  useEffect(() => {
    // Global Styles.
    const style = document.createElement('style')
    if (skin === 'green') {
      style.innerHTML = `
        :root {
          --skin-color: #229142;
        }
      `
    }
    if (skin === 'pink') {
      style.innerHTML = `
        :root {
          --skin-color: #D53F6C;
        }
      `
    }
    if (skin === 'blue') {
      style.innerHTML = `
        :root {
          --skin-color: #1B75BC;
        }
      `
    }
    document.head.appendChild(style)
  }, [skin])

  return { handleSkin }
}
