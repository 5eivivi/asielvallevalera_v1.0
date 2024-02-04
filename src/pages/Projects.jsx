import './Projects.css'

// Multi language (Format.JS library).
import { FormattedMessage } from 'react-intl'

// icons
import { TbBrandGithub } from 'react-icons/tb'

// Projects from the folder "mock".
import { projects } from '../mock/projects.js'

// Custom Hook.
// Filter and Pagination.
import { useFilterAndPagination } from '../hooks/useFilterAndPagination.jsx'

// Custom Hook of the Images Gallery.
import { useImgGallery } from '../hooks/useImgGallery.jsx'

// Custom Hook.
// To detect when this website is on a desktop device or a mobile device.
import useIsMobileDevice from '../hooks/useIsMobileDevice.jsx'

export const Projects = () => {
  // Custom Hook useFilterAndPagination.
  const { type, handleFilter, currentProjects, pagesNumbers, currentPage, handlePage } = useFilterAndPagination(projects)

  // Custom Hook of the Images Gallery.
  const { openOrCloseImgGallery, setOpenOrCloseImgGallery, ImgGallery, handleImgGallery, imgListToShow } = useImgGallery(projects)

  // Custom Hook.
  const { isMobileDevice } = useIsMobileDevice()

  return (
    <section className='projects-section' id='projects'>
      <div className='container' style={{ display: openOrCloseImgGallery ? 'none' : '' }}>
        <article className='projects-section__container--header'>
          <h1 className='h1-green-color'><FormattedMessage id='my-projects' defaultMessage='My projects' /></h1>
          <p className='projects-header-height-text'>
            <FormattedMessage id='text-myprojects' defaultMessage='Here you will find some of my personal projects that I have created. Each project contains its own brief description.' />
          </p>
        </article>
        <article className='projects-section__container--filter'>
          <div>
            <button onClick={() => handleFilter('all')} className={type === 'all' ? 'activated' : ''}>All</button>
            <button onClick={() => handleFilter('frontend')} className={type === 'frontend' ? 'activated' : ''}>Frontend</button>
            <button onClick={() => handleFilter('backend')} className={type === 'backend' ? 'activated' : ''}>Backend</button>
            <button onClick={() => handleFilter('fullstack')} className={type === 'fullstack' ? 'activated' : ''}>Full-Stack</button>
          </div>
        </article>
        <article className='projects-section__container--cards'>
          {
            currentProjects.map(project => (
              <div className='card' key={project.id}>
                <div className='card-container'>
                  <div className='card_header'>

                    {/* To set only on the desktop devices the onclick event to the image gallery; Not on mobile devices. */}
                    {
                      !isMobileDevice
                        ? (
                          <img
                            src={project.imgCover} alt={`Img of the project ${project.id}`}
                            onClick={() => handleImgGallery(project.id)}
                          />
                          )
                        : (<img src={project.imgCover} alt={`Img of the project ${project.id}`} />)
                    }

                  </div>
                  <div>
                    <h2 className='card-title'>
                      <FormattedMessage id={project.title} defaultMessage={project.title} />
                    </h2>
                    <p className='card-paragraph'>
                      <FormattedMessage id={project.description} defaultMessage={project.description} />
                    </p>
                  </div>
                  <div className='card_footer'>
                    <div className='img-footer-card'>
                      {
                        project.type === 'fullstack' && project.subType === 'mern' && (
                          <div className='stack'>
                            <span className='stack-title'>Full-Stack Project | <strong>MERN</strong></span>
                            <div className='stack-tech'>
                              <span>MongoDB</span>
                              <span>ExpressJS</span>
                              <span>ReactJS</span>
                              <span>NodeJS</span>
                            </div>
                          </div>
                        )
                      }
                      {
                        project.type === 'fullstack' && project.subType === 'pern' && (
                          <div className='stack'>
                            <span className='stack-title'>Full-Stack Project | <strong>PERN</strong></span>
                            <div className='stack-tech'>
                              <span>PostgreSQL</span>
                              <span>ExpressJS</span>
                              <span>ReactJS</span>
                              <span>NodeJS</span>
                            </div>
                          </div>
                        )
                      }
                      {
                        project.type === 'frontend' && project.subType === 'react' && (
                          <div className='stack'>
                            <span className='stack-title'><strong>Frontend</strong> Project</span>
                            <div className='stack-tech'>
                              <span>ReactJS</span>
                            </div>
                          </div>
                        )
                      }
                      {
                        project.type === 'backend' && project.subType === 'mern' && (
                          <div className='stack'>
                            <span className='stack-title'><strong>Backend</strong> Project</span>
                            <div className='stack-tech'>
                              <span>MongoDB</span>
                              <span>ExpressJS</span>
                              <span>NodeJS</span>
                            </div>
                          </div>
                        )
                      }
                      {
                        project.type === 'backend' && project.subType === 'pern' && (
                          <div className='stack'>
                            <span className='stack-title'><strong>Backend</strong> Project</span>
                            <div className='stack-tech'>
                              <span>PostgreSQL</span>
                              <span>ExpressJS</span>
                              <span>NodeJS</span>
                            </div>
                          </div>
                        )
                      }
                    </div>
                    <div className='link-footer-card'>
                      <a href={project.link_GitHub} className='icon' rel='noreferrer' target='_blank'><TbBrandGithub /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </article>
        <article className='pagination'>
          <div className='pagination-container'>
            {
              pagesNumbers.map(page => (
                <div className={`item ${page === currentPage ? 'activated' : ''}`} key={page} onClick={() => handlePage(page)}>{page}</div>
              ))
            }
          </div>
        </article>
      </div>
      {
        openOrCloseImgGallery
          ? (
            <>
              <div className='container'>
                <ImgGallery setOpenOrCloseImgGallery={setOpenOrCloseImgGallery} imgListToShow={imgListToShow} />
              </div>
            </>
            )
          : null
      }
    </section>
  )
}
