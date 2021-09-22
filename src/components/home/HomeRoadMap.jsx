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
                  20% sold: We give away 6 rare Devils (top 10% rarity) to
                  random holders
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  40% sold: We fund our community wallet with 6.66 ETH
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  60% sold: 10 super-rare Devils (top 6% rarity) will be
                  airdropped to random holders with 6 or more Devils
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  80% sold: Sending out 66 physical devil sculptures to random
                  holders
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  100% sold: We fund the community wallet with a total of 66.6
                  ETH.
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  We launch a merch store exclusively for Devil Holders with
                  Limited Edition Merch.
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  We launch our Hell's Kitchen. Click{' '}
                  <a class="header-list__link text-36px" href="kitchen">
                    here
                  </a>{' '}
                  to check it out!
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  We announce the Free-To-Mint Devil Companions (Baby-Devils?
                  Hell-Hounds? Who knows?).
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  We will start a HUGE Community NFT Collection!
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  We will buy Punks, Apes, CoolCats &amp; whatever you want!
                  Holders can decide on what to purchase &amp; what offers to
                  accept! Profit will be shared among all holders and is
                  claimable through our "Hell's Piggy Bank".
                </HomeRoadmapInfoTextP>
                <HomeRoadmapInfoTextP>
                  We donate 10 ETH to charity organisations, the community can
                  decide which one it will be.
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
