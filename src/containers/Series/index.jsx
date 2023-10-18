import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTopSeries } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Home() {
  const [topSeries, setTopSeries] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getTopSeries()])
        .then(([topSeries]) => {
          setTopSeries(topSeries)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <Container>
      {topSeries &&
        topSeries.map((movie) => (
          <img
            key={movie.id}
            src={getImages(movie.poster_path || movie.profile_path || '')}
            onClick={() => navigate(`/serie/${movie.id}`)}
            alt=""
          />
        ))}
    </Container>
  )
}

export default Home
