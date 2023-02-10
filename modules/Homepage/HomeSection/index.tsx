import * as React from 'react'

// import { useTranslation } from 'react-i18next'
import MovieCard from '@components/MovieCard'
import * as Styled from '@components/styled'

import { TSection } from '../types'
import * as S from './styled'

const HomeSection = ({ data }: { data: TSection }) => {
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title as="h2">{data.title}</Styled.Title>
        <Styled.Description as="p">{data.text}</Styled.Description>
        <S.CardsList>
          {data.movies?.length &&
            data.movies.map((item) => (
              <S.CardsItem key={item.id}>
                movie {item.id}
                <MovieCard movie={item} />
              </S.CardsItem>
            ))}
        </S.CardsList>
        <S.CardsFooter>
          <Styled.Button href={data.linkUrl}>{data.linkText}</Styled.Button>
        </S.CardsFooter>
      </Styled.Container>
    </Styled.Section>
  )
}

export default HomeSection
