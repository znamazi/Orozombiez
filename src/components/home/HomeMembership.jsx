import React from 'react'

import {
  HomeMembership,
  Cloud,
  CustomWrapper,
  HomeMembershipContent,
  HomeMembershipIllu,
  Image,
  HomeMembershipText,
  Flex
} from './home.styles'

const HomeMembershipComponent = () => {
  return (
    <HomeMembership>
      <Cloud>
        <embed
          type="image/svg+xml"
          src="media/img/svg/membership-clouds.svg"
        ></embed>
      </Cloud>
      <CustomWrapper>
        <HomeMembershipContent>
          <HomeMembershipIllu>
            <Image src="media/img/svg/logo-white.svg" />
          </HomeMembershipIllu>
          <Flex flexDirection="column">
            <HomeMembershipText>
              Holders of our Orozombiez NFTs will get rewarded with passive
              income. We have set our royalties to 4.5%, and 2.5%
              marketplace fee, with a total of 7%.
            </HomeMembershipText>
            <HomeMembershipText padding="20px 40px">
              • 3% will be distributed to all holders. The more Zombiez you own,
              the bigger your share. Holders can claim their rewards every
              month.
            </HomeMembershipText>
          </Flex>
        </HomeMembershipContent>
      </CustomWrapper>
    </HomeMembership>
  )
}

export default HomeMembershipComponent
