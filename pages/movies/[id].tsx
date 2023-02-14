import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'

import MovieDetails from '@modules/MovieDetails'
import { IMovieData } from '@modules/MovieDetails/types'

import MovieService from '@services/movie.service'

interface IQueryParams extends ParsedUrlQuery {
  id?: string
}

type TMovieProps = {
  data: IMovieData
  head: {
    title: string
    description: string
  }
}

function MoviePage({ data, head }: TMovieProps) {
  return (
    <>
      <Head>
        <title>MFinder: {head.title}</title>
        <meta name="description" content={head.description} />
      </Head>
      <MovieDetails data={data} />
    </>
  )
}

export const getStaticProps: GetStaticProps<TMovieProps, IQueryParams> = async (
  context
) => {
  const { results: movie } = await MovieService.getDetailed(
    context.params?.id || ''
  )

  return {
    props: {
      data: {
        movie,
      },
      head: {
        title: movie.titleText.text,
        description: `${movie.titleText.text}: ${movie.genres.genres
          .map((it) => it.text)
          .join(', ')}`,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths<IQueryParams> = async () => {
  return {
    paths: [{ params: { id: 'tt20453244' } }, { params: { id: 'tt26452638' } }],
    fallback: false,
  }
}

export default MoviePage
