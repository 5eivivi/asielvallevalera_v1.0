import { useState } from 'react'
import './ImgGallery.css'

export const ImgGallery = ({ setOpenOrCloseImgGallery, imgListToShow }) => {
  // ⬇️ Pagination ⬇️
  const [currentPage, setCurrentPage] = useState(1)

  const pagesNumbers = []
  for (let i = 1; i <= imgListToShow.length; i++) {
    pagesNumbers.push(i)
  }

  const handlePage = (page) => {
    setCurrentPage(page)
  }
  // ⬆️ Pagination ⬆️

  return (
    <div className='gallery'>
      <div className='gallery--close'>
        <button onClick={() => { setOpenOrCloseImgGallery(false) }} className='icon'>
          X
        </button>
      </div>

      <div className='gallery--imgs'>
        <img src={imgListToShow[currentPage - 1]} alt='Img of the project' />
      </div>

      <div className='gallery--pagination'>
        <div className='pagination-container'>
          {
            pagesNumbers.map(page => (
              <div className={`item ${page === currentPage ? 'activated' : ''}`} key={page} onClick={() => handlePage(page)}>{page}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
