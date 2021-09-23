import React from 'react'

import { Main, HomeWrap } from './home.styles'
import HomeHero from './HomeHero'
import HomeMembership from './HomeMembership'
import HomeRoyality from './HomeRoyality'
import HomeBenefits from './HomeBenefits'
// import HomeMinting from './HomeMinting'
import HomeRoadMap from './HomeRoadMap'
import HomeAsks from './HomeAsks'

const Content = (props) => {
  return (
    <Main>
      <HomeWrap>
        <HomeHero {...props} />
        <div id="members">
          <HomeMembership />
        </div>
        {/* <HomeMinting /> */}
        <HomeRoyality />
        <div id="faq">
          <HomeAsks />
        </div>

        <HomeBenefits />
        <div id="roadmap">
          <HomeRoadMap />
        </div>
      </HomeWrap>
    </Main>
  )
}

export default Content
