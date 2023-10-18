import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  getSerieById,
  getSerieCredit,
  getSerieSimilar,
  getSerieVideos
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, Cover, Info, ContainerMovies } from './styles'

function Detail() {
  const { id } = useParams()
  const [serie, setSerie] = useState()
  const [serieVideos, setSerieVideos] = useState()
  const [serieCredits, setSerieCredits] = useState()
  const [serieSimilar, setSerieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSerieById(id),
        getSerieVideos(id),
        getSerieCredit(id),
        getSerieSimilar(id)
      ])
        .then(([movie, videos, credits, similar]) => {
          setSerie(movie)
          setSerieVideos(videos)
          setSerieCredits(credits)
          setSerieSimilar(similar)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])
  return (
    <>
      {serie && (
        <>
          <Background image={getImages(serie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(serie.poster_path)} alt="" />
            </Cover>
            <Info>
              <h2>{serie.name}</h2>
              <SpanGenres genres={serie.genres} />
              <p>{serie.overview}</p>
              <div>
                <Credits credits={serieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {serieVideos &&
              serieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    height="500px"
                    width="100%"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube Video Player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {serieSimilar && (
            <Slider info={serieSimilar} title={'Filmes Similares'} />
          )}
        </>
      )}
    </>
  )
}

export default Detail
