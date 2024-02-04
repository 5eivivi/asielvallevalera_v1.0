import { useState } from 'react'

export const useFilterAndPagination = (projects) => {
  // ⬇️ Filter ⬇️
  const localS = localStorage.getItem('type')

  const [type, setType] = useState(() => {
    if (localS === 'frontend' || localS === 'backend' || localS === 'mern') {
      return localS
    } else {
      localStorage.setItem('type', 'frontend')
      return 'frontend'
    }
  })

  const handleFilter = (type) => {
    localStorage.setItem('type', type)
    setType(type)
    setCurrentPage(1)
  }
  // ⬆️ Filter ⬆️

  // ⬇️ Pagination ⬇️
  const [currentPage, setCurrentPage] = useState(1)
  // const [projectsPerPage, setProjectsPerPage] = useState(3) // Dinamica la cantidad de projectos por pagina.
  const projectsPerPage = 3

  // Get current posts
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = ((type === 'all') ? (projects.slice(indexOfFirstProject, indexOfLastProject)) : ((projects.filter(p => p.type === type)).slice(indexOfFirstProject, indexOfLastProject)))

  const pagesNumbers = []
  const totalOfProjectsToShow = ((type === 'all') ? projects : (projects.filter(p => p.type === type)))
  for (let i = 1; i <= (Math.ceil(totalOfProjectsToShow.length / projectsPerPage)); i++) {
    pagesNumbers.push(i)
  }
  // console.log(Math.ceil(4))     // Expected output: 4
  // console.log(Math.ceil(7.004)) // Expected output: 8

  const handlePage = (page) => {
    setCurrentPage(page)
  }
  // ⬆️ Pagination ⬆️

  return { type, handleFilter, currentProjects, pagesNumbers, currentPage, handlePage }
}
