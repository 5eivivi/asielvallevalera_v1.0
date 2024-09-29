import './DownloadCV.css'

import CV from "../assets/Asiel Valle's CV.pdf"

// Multi language (Format.JS library).
import { FormattedMessage } from 'react-intl'

export default function DownloadCV () {
  // This function is because, when I download my CV, its name change to "Asiel Valle's CV" <whatever>.pdf" on Production Mode.
  const handleClickDownloadCV = () => {
    fetch(CV).then((response) => {
      response.blob().then((blod) => {
        const fileURL = window.URL.createObjectURL(blod)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = "Asiel Valle's resume.pdf"
        alink.click()
      })
    })
  }

  return (
    // <a href={CV} download className='download-cv-button'><FormattedMessage id='download-cv-button' defaultMessage='Download CV' /></a>
    <button className='download-cv-button' onClick={handleClickDownloadCV}><FormattedMessage id='download-cv-button' defaultMessage='Download CV' /></button>
  )
}
