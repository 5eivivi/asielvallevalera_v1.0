import { useEffect, useState } from 'react'

export const useHiddenOrVisibleNavigationForMobile = () => {
  const [visibility, setVisibility] = useState('-')

  window.addEventListener('scroll', () => {
    setVisibility('-')
  })

  useEffect(() => {
    // Global Styles.
    const style = document.createElement('style')
    if (visibility === '+') {
      style.innerHTML = `
        :root {
          --visibility-for-settings-and-social-networks: visible;
        }
      `
    } else {
      style.innerHTML = `
        :root {
          --visibility-for-settings-and-social-networks: hidden;
        }
      `
    }

    document.head.appendChild(style)
  }, [visibility])

  const handleclick = () => {
    setVisibility(prev => prev === '-' ? '+' : '-')
  }

  return { visibility, handleclick }
}
