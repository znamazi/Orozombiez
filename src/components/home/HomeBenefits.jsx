import React from 'react'

import {
  CustomWrapper,
  Image,
  Flex,
  HomeAsksImage,
  HomeBenefits,
  HomeBenefitsTitle,
  HomeBenefitsSpan,
  HomeBenefitsList,
  HomeBenefitsItem,
  HomeBenefitsItemTop,
  HomeBenefitsItemBottom,
  HomeBenefitsItemBottomSpan
} from './home.styles'

const HomeBenefitsComponent = () => {
  return (
    <HomeBenefits>
      <CustomWrapper>
        <Flex flexDirection="column">
          <HomeBenefitsTitle>
            <HomeBenefitsSpan>Membership Benefits</HomeBenefitsSpan>
            <HomeAsksImage src="media/img/svg/candy-svg.svg" />
          </HomeBenefitsTitle>
          <HomeBenefitsList>
            <HomeBenefitsItem>
              <HomeBenefitsItemTop>
                <picture>
                  <source srcset="media/img/content/benefits-piggy.webp" />
                  <Image src="media/img/content/benefits-piggy.png" />
                </picture>
              </HomeBenefitsItemTop>
              <HomeBenefitsItemBottom background="#db6e61">
                <HomeBenefitsItemBottomSpan>
                  Benefit from the Hell‘s Piggy Bank and claim your share of the
                  secondary sales and community collection sales
                </HomeBenefitsItemBottomSpan>
              </HomeBenefitsItemBottom>
            </HomeBenefitsItem>
            <HomeBenefitsItem>
              <HomeBenefitsItemTop>
                <Image src="media/img/svg/footer-discord.svg" />
              </HomeBenefitsItemTop>
              <HomeBenefitsItemBottom background="#6286bf">
                <HomeBenefitsItemBottomSpan>
                  Get Access to our hidden discord channels and use your voting
                  power to decide with the community what we should do next
                </HomeBenefitsItemBottomSpan>
              </HomeBenefitsItemBottom>
            </HomeBenefitsItem>
            <HomeBenefitsItem>
              <HomeBenefitsItemTop>
                <Image src="media/img/svg/benefits-people.svg" />
              </HomeBenefitsItemTop>
              <HomeBenefitsItemBottom background="#ff006e">
                <HomeBenefitsItemBottomSpan>
                  Be part of cool community airdrops/ giveaway
                </HomeBenefitsItemBottomSpan>
              </HomeBenefitsItemBottom>
            </HomeBenefitsItem>
            <HomeBenefitsItem>
              <HomeBenefitsItemTop>
                <Image src="media/img/svg/logo-white.svg" />
              </HomeBenefitsItemTop>
              <HomeBenefitsItemBottom background="#f1572a">
                <HomeBenefitsItemBottomSpan>
                  All Members will be able to mint a companion for their devils
                  in the near future (like BAKC)
                </HomeBenefitsItemBottomSpan>
              </HomeBenefitsItemBottom>
            </HomeBenefitsItem>
            <HomeBenefitsItem>
              <HomeBenefitsItemTop>
                <Image src="media/img/svg/benefits-money.svg" />
              </HomeBenefitsItemTop>
              <HomeBenefitsItemBottom background="#3a86ff">
                <HomeBenefitsItemBottomSpan>
                  Commercial Ownership for your devils
                </HomeBenefitsItemBottomSpan>
              </HomeBenefitsItemBottom>
            </HomeBenefitsItem>
          </HomeBenefitsList>
        </Flex>
      </CustomWrapper>
    </HomeBenefits>
  )
}

export default HomeBenefitsComponent
