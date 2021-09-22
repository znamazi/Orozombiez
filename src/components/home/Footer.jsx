import React from 'react'
import {
  Copyright,
  CustomWrapper,
  FooterContent,
  FooterWrap,
  SocialWrap,
  SocialItem,
  Image
} from './home.styles'

const Footer = () => {
  return (
    <FooterWrap>
      <CustomWrapper>
        <FooterContent>
          <Copyright>© 2021 SympathyForTheDevils</Copyright>
          <SocialWrap>
            <SocialItem href="https://twitter.com/SFTD_ART" target="_blank">
              <Image src="media/img/svg/footer-twitter.svg" />
            </SocialItem>
            <SocialItem href="https://discord.gg/AaNj9qfHgt" target="_blank">
              <Image src="media/img/svg/footer-discord.svg" />
            </SocialItem>
            <SocialItem
              href="https://opensea.io/collection/sympathyforthedevils"
              target="_blank"
            >
              <Image src="media/img/svg/footer-ship.svg" />
            </SocialItem>
          </SocialWrap>
        </FooterContent>
      </CustomWrapper>
    </FooterWrap>
  )
}

export default Footer
