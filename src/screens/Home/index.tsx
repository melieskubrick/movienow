import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import CardActor from '../../components/CardActor'
import CardMovie from '../../components/CardMovie'
import { getPopularActors, getTopRated, getTrendings } from '../../services/api'
import { getImage } from '../../utils/helpers/image'
import Card from './Card'
import Divider from './Divider'
import * as S from './styles'

interface Item {
  key: string
  render: () => JSX.Element
  isTitle?: boolean
}

const Home = () => {
  const carouselRef = useRef()
  const [trendingMovies, setTrendingsMovies] = useState<TrendingMovies | any>()
  const [popularActors, setPopularActors] = useState<PopularActors | any>()
  const [topRated, setTopRated] = useState<TopRated | any>()

  useEffect(() => {
    const fetch = async () => {
      const responseTrendings = await getTrendings()
      const responsePopularActors = await getPopularActors()
      const responseTopRated = await getTopRated()
      setTrendingsMovies(responseTrendings.data.results)
      setPopularActors(responsePopularActors.data.results)
      setTopRated(responseTopRated.data.results)
    }
    fetch()
  }, [])

  const { data, indices } = useMemo(() => {
    console.log('trendingMovies', trendingMovies)
    const items: Item[] = [
      {
        key: 'featured',
        render: () => <Divider title="Em destaque" />,
        isTitle: true
      },
      {
        key: 'carousel',
        render: () => (
          <Carousel
            ref={carouselRef}
            data={trendingMovies}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                description={item.release_date}
                uri={getImage(item.backdrop_path)}
              />
            )}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width - 80}
            autoplay
            autoplayDelay={4000}
            autoplayInterval={4000}
          />
        )
      },
      {
        key: 'popular_actors',
        render: () => <Divider title="Atores populares" />,
        isTitle: true
      },
      {
        key: 'actors',
        render: () => (
          <S.List
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            horizontal
            data={popularActors}
            renderItem={({ item }) => (
              <CardActor name={item.name} uri={getImage(item.profile_path)} />
            )}
          />
        )
      },
      {
        key: 'evaluated',
        render: () => <Divider title="Bem avaliados" />,
        isTitle: true
      },
      {
        key: 'movies',
        render: () => (
          <S.List
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            horizontal
            data={topRated}
            renderItem={({ item }) => (
              <CardMovie
                title={item.title}
                rate={item.vote_average + ` (${item.vote_count})`}
                uri={getImage(item.poster_path)}
              />
            )}
          />
        )
      }
    ]

    const indices: number[] = []
    items.forEach((item, index) => item.isTitle && indices.push(index))

    return {
      data: items,
      indices
    }
  }, [trendingMovies, popularActors, topRated])

  return (
    <S.Container>
      <S.List
        data={data}
        stickyHeaderIndices={indices}
        renderItem={({ item }: Item | any) => item.render()}
      />
    </S.Container>
  )
}

export default Home
