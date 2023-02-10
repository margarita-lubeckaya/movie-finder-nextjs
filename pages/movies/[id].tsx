import Head from 'next/head'
import { useRouter } from 'next/router'

// import Homepage from "../../modules/Homepage";

function MovieDetails() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>MFinder: Search</title>
        <meta name="description" content="Movie Finder" />
      </Head>
      <div>specific movie: {id} </div>
    </>
  )
}

export default MovieDetails
