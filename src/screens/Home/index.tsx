import { NavigationProp } from '@react-navigation/native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import CardActor from '../../components/CardActor'
import CardMovie from '../../components/CardMovie'
import Loading from '../../components/Loading'
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

interface IHome {
  navigation: NavigationProp<any>
}

const Home = ({ navigation }: IHome) => {
  const carouselRef = useRef()
  const [trendingMovies, setTrendingsMovies] = useState<TrendingMovies | any>()
  const [popularActors, setPopularActors] = useState<PopularActors | any>()
  const [topRated, setTopRated] = useState<TopRated | any>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      try {
        const responseTrendings = await getTrendings()
        const responsePopularActors = await getPopularActors()
        const responseTopRated = await getTopRated()
        setTrendingsMovies(responseTrendings.data.results)
        setPopularActors(responsePopularActors.data.results)
        setTopRated(responseTopRated.data.results)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [])

  const { data, indices } = useMemo(() => {
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
            loop
            ref={carouselRef}
            data={trendingMovies}
            renderItem={({ item }) => (
              <Card
                onPress={() => navigation.navigate('DetailMovie', { id: item.id })}
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
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24 }}
            horizontal
            data={topRated}
            renderItem={({ item }) => (
              <CardMovie
                onPress={() => navigation.navigate('DetailMovie', { id: item.id })}
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
  }, [trendingMovies, navigation, popularActors, topRated])

  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : (
        <S.List
          data={data}
          stickyHeaderIndices={indices}
          renderItem={({ item }: Item | any) => item.render()}
        />
      )}
    </S.Container>
  )
}

export default Home
