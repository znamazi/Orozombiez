import React from 'react'

import {
  CustomWrapper,
  HomeAsks,
  Flex,
  HomeAsksTitle,
  HomeAsksSpan,
  HomeAsksImage,
  HomeAsksInfoTitle,
  HomeAsksInfo,
  HomeAsksInfoItem,
  HomeAsksInfoList,
  HomeAsksInfoAddition
} from './home.styles'

const HomeAsksComponent = () => {
  return (
    <HomeAsks>
      <CustomWrapper>
        <Flex flexDirection="column">
          <HomeAsksTitle>
            <HomeAsksSpan>
              You might ask! <br />
              What happens with the royalties?
            </HomeAsksSpan>
            <HomeAsksImage src="media/img/svg/big-candy-svg.svg" />
          </HomeAsksTitle>
          <HomeAsksInfo>
            <HomeAsksInfoTitle>Well, that’s simple..</HomeAsksInfoTitle>
            <HomeAsksInfoList>
              <HomeAsksInfoItem>
                Of course, 2.5% goes to Opensea.
              </HomeAsksInfoItem>
              <HomeAsksInfoItem>
                3% will be distributed to all devil holders. The more devils you
                own, the bigger will be your share. We will call it "Hells Piggy
                Bank" and holders are able to claim their rewards twice a month
              </HomeAsksInfoItem>
              <HomeAsksInfoItem>
                0.66% of the secondary sales goes to the community pool, where
                we will run votes on where we should spend the money: community
                collection NFTs (Apes, Punks, CoolCats, etc.), charity
                donations, ETH airdrops or giveaways &amp; many more
              </HomeAsksInfoItem>
              <HomeAsksInfoItem>
                0.5% goes to the team, to keep up motivation, cashflow &amp;
                ideas to push this project forward, and make the community
                better and stronger everyday
              </HomeAsksInfoItem>
            </HomeAsksInfoList>
            <HomeAsksInfoAddition>
              Also: After we are sold out, we will fund the community wallet
              with 66.6 ETH to kick the Community Collection off
            </HomeAsksInfoAddition>
          </HomeAsksInfo>
        </Flex>
      </CustomWrapper>
    </HomeAsks>
  )
}

export default HomeAsksComponent
