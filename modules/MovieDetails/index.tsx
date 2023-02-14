import formatDate from '@helpers/formatDate'
import * as React from 'react'

// import { useMovie } from '@hooks/queries/useMovie'
import { useImageFallback } from '@hooks/useImageFallback'

import * as Styled from '@components/styled'

import IconStar from './IconStar'
import * as S from './styled'
import { IMovieData } from './types'

const MovieDetails = ({ data: { movie } }: { data: IMovieData }) => {
  const { imageOnErrorHandler, imageSrc } = useImageFallback(
    movie?.primaryImage?.url
  )

  return (
    <Styled.Section>
      <Styled.Container>
        {!!movie && (
          <S.MovieInfo>
            <Styled.Title $size="title">{movie.titleText.text}</Styled.Title>

            <S.Rating>
              <IconStar />
              {movie.ratingsSummary.voteCount
                ? movie.ratingsSummary.aggregateRating
                : '0'}
            </S.Rating>

            <S.MovieDescription>
              <S.ReleaseDate>{formatDate(movie.releaseDate)}</S.ReleaseDate>
              <Styled.Description>
                {movie.plot?.plotText?.plainText}
              </Styled.Description>
              <S.Tags>
                {movie.genres.genres.map((genre) => (
                  <S.Tag href={`/movies/?genre=${genre.id}`} key={genre.id}>
                    {genre.text}
                  </S.Tag>
                ))}
              </S.Tags>
            </S.MovieDescription>

            <S.Media>
              <Styled.Image
                width={300}
                height={400}
                onError={imageOnErrorHandler}
                src={imageSrc}
                alt={
                  movie.primaryImage?.caption?.plainText || movie.titleText.text
                }
              />
            </S.Media>
          </S.MovieInfo>
        )}
      </Styled.Container>
    </Styled.Section>
  )
}

export default MovieDetails
