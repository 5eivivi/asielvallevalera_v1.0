import { useState } from 'react'
import { ImgGallery } from '../components/ImgGallery.jsx'

export const useImgGallery = (projects) => {
  const [openOrCloseImgGallery, setOpenOrCloseImgGallery] = useState(false)
  const [imgListToShow, setImgListToShow] = useState([])

  const handleImgGallery = (projectId) => {
    const { images } = projects.filter(project => project.id === projectId)[0]
    setImgListToShow(images)
    setOpenOrCloseImgGallery(true)
  }

  return { openOrCloseImgGallery, setOpenOrCloseImgGallery, ImgGallery, handleImgGallery, imgListToShow }
}
