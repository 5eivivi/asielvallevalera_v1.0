import './AnchorWithMyLogo.css'

// My logo.
import { TbLetterA } from 'react-icons/tb'

// Custom Hook.
// To detect when this website is on a desktop device or a mobile device.
import useIsMobileDevice from '../hooks/useIsMobileDevice.jsx'

export default function AnchorWithMyLogo () {
  // Custom Hook.
  const { isMobileDevice } = useIsMobileDevice()

  return (
    <a
      href='https://asielvalle96.vercel.app/'
      title='Asiel Valle Valera'
      className={!isMobileDevice ? 'logo desktop-logo' : 'logo mobile-logo'} // To put a style on my logo on desktop devices and another style on mobile devices.
      rel='noreferrer'
    >
      <TbLetterA />
    </a>
  )
}
