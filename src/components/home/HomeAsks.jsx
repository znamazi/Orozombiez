import React from 'react'

import {
  CustomWrapper,
  HomeAsks,
  Flex,
  HomeAsksTitle,
  HomeAsksSpan,
  HomeAsksImage,
  // HomeAsksInfoTitle,
  HomeAsksInfo,
  HomeAsksInfoItem,
  HomeAsksInfoList
  // HomeAsksInfoAddition
} from './home.styles'

const HomeAsksComponent = () => {
  return (
    <HomeAsks>
      <CustomWrapper>
        <Flex flexDirection="column">
          <HomeAsksTitle>
            <HomeAsksSpan>FAQ</HomeAsksSpan>
            <HomeAsksImage src="media/img/svg/big-candy-svg.svg" />
          </HomeAsksTitle>
          <HomeAsksInfo>
            {/* <HomeAsksInfoTitle>Well, that’s simple..</HomeAsksInfoTitle> */}
            <HomeAsksInfoList>
              <HomeAsksInfoItem>
                1. How many Orozombiez do I need to mint to earn a passive
                income?
              </HomeAsksInfoItem>
              <HomeAsksInfoItem maxWidth="1000px" margin="0 50px">
                • You can mint as many as you would like. However, you must hold
                at list one Orozombiez to earn passive income.
              </HomeAsksInfoItem>
              <HomeAsksInfoItem>
                2. When will the game be released?
              </HomeAsksInfoItem>
              <HomeAsksInfoItem maxWidth="1000px" margin="0 50px">
                ◦ We anticipate the trailer to be released in Q1 2022, the game
                will follow soon after.
              </HomeAsksInfoItem>
              <HomeAsksInfoItem>
                3. How much is the mint price of the Baby OZs?
              </HomeAsksInfoItem>
              <HomeAsksInfoItem maxWidth="1000px" margin="0 50px">
                ◦ Baby OZs will be minted or airdropped to all holders free of
                charge.
              </HomeAsksInfoItem>
            </HomeAsksInfoList>
            {/* <HomeAsksInfoAddition>
              Also: After we are sold out, we will fund the community wallet
              with 66.6 ETH to kick the Community Collection off
            </HomeAsksInfoAddition> */}
          </HomeAsksInfo>
        </Flex>
      </CustomWrapper>
    </HomeAsks>
  )
}

export default HomeAsksComponent
