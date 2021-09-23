import React from 'react'

import {
  CustomWrapper,
  Image,
  Flex,
  HomeRoadmap,
  HomeRoadmapContent,
  HomeRoadmapInfo,
  HomeRoadmapIllu,
  HomeRoadmapInfoTitle,
  HomeRoadmapInfoText,
  HomeRoadmapInfoTextP
} from './home.styles'

const HomeRoadMapComponent = () => {
  return (
    <HomeRoadmap>
      <CustomWrapper>
        <HomeRoadmapContent>
          <HomeRoadmapIllu>
            <picture>
              <source
                srcset="media/img/svg/roadmap.svg"
                media="(min-width:993px)"
              />
              <source
                srcset="media/img/svg/roadmap-mobile.svg"
                media="(max-width:992px)"
              />
              <Image src="media/img/svg/roadmap.webp" />
            </picture>
          </HomeRoadmapIllu>
          <HomeRoadmapInfo>
            <Flex flexDirection="column">
              <HomeRoadmapInfoTitle>Roadmap</HomeRoadmapInfoTitle>
              <HomeRoadmapInfoText>
                <HomeRoadmapInfoTextP>
                  • We will create an interactive, and dynamic huge community
                  together.
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  • 80% sold: We fund the OZ wallet with 80 SOL
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  • 100% sold: We fund the OZ wallet with a total of 100 SOL.
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  • With these proceeds we will purchase, and sell NFTs. Holders
                  vote on what to invest in. Profits will be shared among all
                  holders and is claimed through our OZ’s Wallet.
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  • We launch a merch store exclusively for Zombie holders with
                  Limited edition
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  • We will announce free to mint Baby OZs to all Holders. These
                  might get airdropped. We will keep the community updated.
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  • A trailer will be released for the upcoming game.
                </HomeRoadmapInfoTextP>
              </HomeRoadmapInfoText>
            </Flex>
          </HomeRoadmapInfo>
        </HomeRoadmapContent>
      </CustomWrapper>
    </HomeRoadmap>
  )
}

export default HomeRoadMapComponent
