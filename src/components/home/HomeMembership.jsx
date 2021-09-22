import React from 'react'

import {
  HomeMembership,
  Cloud,
  CustomWrapper,
  HomeMembershipContent,
  HomeMembershipIllu,
  Image,
  HomeMembershipText
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
          <HomeMembershipText>
            Join the Devil‘s Club and be part of a great movement and an awesome
            & strong Community with amazing Things to come.Your Devil NFT will
            grant you access to Members Only Benefits and Features!
          </HomeMembershipText>
        </HomeMembershipContent>
      </CustomWrapper>
    </HomeMembership>
  )
}

export default HomeMembershipComponent
