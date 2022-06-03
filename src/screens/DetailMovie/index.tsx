import Feather from '@expo/vector-icons/Feather'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import CardMovie from '../../components/CardMovie'
import Loading from '../../components/Loading'
import RoundButton from '../../components/RoundButton'
import { getMovieDetail, getMovieSimilar } from '../../services/api'
import { theme } from '../../theme'
import { getImage } from '../../utils/helpers/image'
import Divider from '../Home/Divider'
import Tag from './Tag'
import * as S from './styles'

interface IDetailMovie {
  navigation: NavigationProp<any>
  route: RouteProp<{ params: { id: string } }, 'params'>
}

const DetailMovie = ({ navigation, route }: IDetailMovie) => {
  const { id } = route.params

  const [movieDetail, setMovieDetail] = useState<MovieDetail>()
  const [movieSimilar, setMovieSimilar] = useState<TrendingMovies | any>()
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const responseMovieDetail = await getMovieDetail(id)
      const responseMovieSimilar = await getMovieSimilar(id)
      setMovieDetail(responseMovieDetail.data)
      setMovieSimilar(responseMovieSimilar.data.results)
      console.log('MELIES:::', responseMovieSimilar.data.results)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : (
        <S.Parallax
          backgroundScale={1.6}
          fadeOutParallaxBackground
          fadeOutParallaxForeground
          showsVerticalScrollIndicator={false}
          renderHeader={({ animatedValue }) => (
            <S.ContainerHeader>
              <RoundButton onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" size={20} color={theme.colors.white} />
              </RoundButton>
            </S.ContainerHeader>
          )}
          headerHeight={getStatusBarHeight() + 50}
          isHeaderFixed
          renderParallaxBackground={({ animatedValue }) => (
            <>
              <S.Gradient colors={['transparent', theme.colors.black]}></S.Gradient>
              <S.Image source={{ uri: getImage(movieDetail.backdrop_path) }} />
            </>
          )}
          renderParallaxForeground={({ animatedValue }) => (
            <S.ContainerMovieCover>
              <CardMovie
                title={movieDetail.title}
                uri={getImage(movieDetail.poster_path)}
                rate={`${movieDetail.vote_average}`}
              />
            </S.ContainerMovieCover>
          )}
          parallaxBackgroundScrollSpeed={5}
          parallaxForegroundScrollSpeed={2.5}
        >
          <>
            <S.ContainerInformations>
              <Divider title="Descrição" />
              <S.Description>{movieDetail.overview}</S.Description>
              <Divider title="Gêneros" />
              <S.List
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                horizontal
                data={movieDetail.genres}
                renderItem={({ item }) => <Tag title={item.name} />}
              />
            </S.ContainerInformations>
            <Divider title="Filmes Similares" />
            <S.List
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: getStatusBarHeight() }}
              horizontal
              data={movieSimilar}
              renderItem={({ item }) => (
                <CardMovie
                  onPress={() => {
                    setLoading(true)
                    navigation.navigate('DetailMovie', { id: item.id })
                  }}
                  title={item.title}
                  rate={item.vote_average + ` (${item.vote_count})`}
                  uri={getImage(item.poster_path)}
                />
              )}
            />
          </>
        </S.Parallax>
      )}
    </S.Container>
  )
}

export default DetailMovie
