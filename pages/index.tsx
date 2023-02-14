// import { Inter } from '@next/font/google'
import Head from 'next/head'

import Homepage from '@modules/Homepage'
import { IHomepageData } from '@modules/Homepage/types'

import InfoService from '@services/info.service'

// const inter = Inter({ subsets: ['latin'] })

function Home({ data }: { data: IHomepageData }) {
  return (
    <>
      <Head>
        <title>MFinder: Homepage</title>
        <meta name="description" content="Movie Finder" />
      </Head>

      <Homepage data={data} />
    </>
  )
}

export async function getStaticProps() {
  const [upcomingMovies, popularMovies] = await Promise.all([
    InfoService.getUpcoming(),
    InfoService.getPopular(),
  ])

  // console.log('popularMovies')
  // console.log(popularMovies)

  return {
    props: {
      data: {
        upcoming: {
          title: 'upcomingTitle',
          text: 'upcomingText',
          linkText: 'seeAll',
          linkUrl: '/movies',
          movies: upcomingMovies.results || [],
        },
        popular: {
          title: 'popularTitle',
          text: 'popularText',
          linkText: 'seeAll',
          linkUrl: '/movies',
          movies: popularMovies.results || [],
        },
      },
    },
  }
}

export default Home
