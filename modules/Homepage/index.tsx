import * as React from 'react'

// import { useTranslation } from 'react-i18next'
// import { ListVariants } from 'types/movie'
// import { usePopular } from '@hooks/queries/usePopular'
// import { useUpcoming } from '@hooks/queries/useUpcoming'
// import MovieCard from '@components/MovieCard'
import * as Styled from '@components/styled'

import * as S from './styled'

const Homepage = () => {
  // const popularMovies = usePopular()
  // const upcomingMovies = useUpcoming()
  // const { t } = useTranslation(['home', 'common'])

  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title as="h2">t('home:popularTitle')</Styled.Title>
        <Styled.Description as="p">t('home:popularText')</Styled.Description>
        <S.Test> test </S.Test>
        {/* {popularMovies.isLoading && <Styled.Loader />} */}
        {/* <S.CardList> */}
        {/* {popularMovies.popular?.length && */}
        {/*  popularMovies.popular.map((item) => ( */}
        {/*    <S.CardItem key={item.id}> */}
        {/*      <MovieCard movie={item} /> */}
        {/*    </S.CardItem> */}
        {/*  ))} */}
        {/* </S.CardList> */}
        {/* <S.CardsFooter> */}
        {/* <Styled.Button to={`/movies?list=${ListVariants.PopMovies}`}> */}
        {/* {t('common:seeAll')} */}
        dsf
        {/* </Styled.Button> */}
        {/* </S.CardsFooter> */}
        {/* </Styled.Container> */}
        {/* </Styled.Section> */}
        {/* <Styled.Section> */}
        {/*  <Styled.Container> */}
        {/* <Styled.Title as="h2">{t('home:upcomingTitle')}</Styled.Title> */}
        {/* <Styled.Description as="p"> */}
        sdf
        {/* {t('home:upcomingText')} */}
        {/* </Styled.Description> */}
        {/* {upcomingMovies.isLoading && <Styled.Loader />} */}
        {/* <S.CardList> */}
        {/*  {upcomingMovies.upcoming?.length && */}
        {/*    upcomingMovies.upcoming.map((item) => ( */}
        {/*      <S.CardItem key={item.id}> */}
        {/*        <MovieCard movie={item} /> */}
        {/*      </S.CardItem> */}
        {/*    ))} */}
        {/* </S.CardList> */}
        {/* <S.CardsFooter> */}
        {/* <Styled.Button to={'/movies'}>{t('common:seeAll')}</Styled.Button> */}
        {/* </S.CardsFooter> */}
      </Styled.Container>
    </Styled.Section>
  )
}

export default Homepage
