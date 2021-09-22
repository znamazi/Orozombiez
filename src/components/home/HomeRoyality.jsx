import React from 'react'

import {
  CustomWrapper,
  Image,
  HomeRoyalty,
  HomeRoyaltyContent,
  HomeRoyaltyText,
  HomeRoyaltyDiff,
  Wrap,
  HomeRoyaltyIllu
} from './home.styles'

const HomeRoyalityComponent = () => {
  return (
    <HomeRoyalty>
      <CustomWrapper>
        <HomeRoyaltyContent>
          <HomeRoyaltyIllu>
            <picture>
              <source srcset="media/img/content/home/royalty-illu.webp" />
              <Image src="media/img/content/home/royalty-illu.jpg" />
            </picture>
          </HomeRoyaltyIllu>

          <Wrap>
            <HomeRoyaltyText>
              Sympathy For The Devils NFTs are generative and provably rare &
              unique artworks limited to a total amount of 6666 generated from
              160+ different attributes/traits. 2 x 66 of them will be reserved
              for giveaways & airdrops. Minting cost will be 0.0666 ETH + Gas.
              BUT the best thing comes now:
            </HomeRoyaltyText>
            <HomeRoyaltyDiff>
              Holders of our Devil NFTs will get rewarded with passive income!!
            </HomeRoyaltyDiff>
            <HomeRoyaltyText>
              We decided to set our royalties to 4.16% (+2.5% opensea fee), so
              we have a total sales fee of 6.66%.
            </HomeRoyaltyText>
          </Wrap>
        </HomeRoyaltyContent>
      </CustomWrapper>
    </HomeRoyalty>
  )
}

export default HomeRoyalityComponent
