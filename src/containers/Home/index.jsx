import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getPopArtists,
  getTopSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, Info, Poster, ContainerButtons } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [popArtists, setPopArtist] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopArtists()
      ])
        .then(([movie, topMovies, topSeries, popularSeries, popArtist]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setPopArtist(popArtist)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  red
                  color="#e21"
                  onClick={() => navigate(`/filme/${movie.id}`)}
                >
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="poster-do-filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Popular Series'} />
      )}
      {popArtists && <Slider info={popArtists} title={'Popular Artistas'} />}
    </>
  )
}

export default Home
