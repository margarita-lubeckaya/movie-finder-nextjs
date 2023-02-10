import * as React from 'react'

// import { useTranslation } from 'react-i18next'
import HomeSection from './HomeSection'
import { IHomepageData } from './types'

const Homepage = ({ data: { upcoming, popular } }: { data: IHomepageData }) => {
  // const { t } = useTranslation(['home', 'common'])

  return (
    <>
      {popular.movies ? <HomeSection data={popular} /> : null}
      {upcoming.movies ? <HomeSection data={upcoming} /> : null}
    </>
  )
}

export default Homepage
