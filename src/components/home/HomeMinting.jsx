import React from 'react'

import {
  CustomWrapper,
  HomeMinting,
  HomeMintingContent,
  HomeMintingCard
} from './home.styles'

const HomeMintingComponent = () => {
  return (
    <HomeMinting>
      <CustomWrapper>
        <HomeMintingContent>
          <HomeMintingCard></HomeMintingCard>
        </HomeMintingContent>
      </CustomWrapper>
    </HomeMinting>
  )
}

export default HomeMintingComponent
