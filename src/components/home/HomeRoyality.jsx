import React from 'react'

import {
  CustomWrapper,
  Image,
  HomeRoyalty,
  HomeRoyaltyContent,
  HomeRoyaltyText,
  HomeRoyaltyDiff,
  Wrap,
  HomeRoyaltyIllu,
  Flex
} from './home.styles'

const HomeRoyalityComponent = () => {
  return (
    <HomeRoyalty>
      <CustomWrapper>
        <HomeRoyaltyContent>
          <HomeRoyaltyIllu>
            <picture>
              <source srcSet="media/img/content/home/royalty-illu.webp" />
              <Image src="media/img/content/home/royalty-illu.jpg" />
            </picture>
          </HomeRoyaltyIllu>

          <Flex flexDirection="column">
            <HomeRoyaltyDiff>Charitable Donations </HomeRoyaltyDiff>
            <HomeRoyaltyText>
              • We will donate $5,000 to a charity of choice by the holders.
            </HomeRoyaltyText>

            <HomeRoyaltyText>
              • We will work with another charitable organization to supply and
              ship educational books and school supplies to underprivileged
              children in Africa.
            </HomeRoyaltyText>
          </Flex>
        </HomeRoyaltyContent>
      </CustomWrapper>
    </HomeRoyalty>
  )
}

export default HomeRoyalityComponent
