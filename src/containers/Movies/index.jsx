import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTopMovies } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Home() {
  const [topMovies, setTopMovies] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getTopMovies()])
        .then(([topMovies]) => {
          setTopMovies(topMovies)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <Container>
      {topMovies &&
        topMovies.map((movie) => (
          <img
            key={movie.id}
            src={getImages(movie.poster_path || movie.profile_path || '')}
            onClick={() => navigate(`/filme/${movie.id}`)}
            alt=""
          />
        ))}
    </Container>
  )
}

export default Home
