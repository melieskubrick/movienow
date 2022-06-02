import React, { useMemo, useRef } from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import CardActor from '../../components/CardActor'
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

  const renderItem = ({ item, index }) => {
    return <Card />
  }

  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1'
    },
    {
      title: 'Item 2',
      text: 'Text 2'
    },
    {
      title: 'Item 3',
      text: 'Text 3'
    },
    {
      title: 'Item 4',
      text: 'Text 4'
    },
    {
      title: 'Item 5',
      text: 'Text 5'
    }
  ]

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
            ref={carouselRef}
            data={carouselItems}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width - 80}
            autoplay
            loop
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
            data={carouselItems}
            renderItem={(item) => <CardActor />}
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
  }, [carouselItems])

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
