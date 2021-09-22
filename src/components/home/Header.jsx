import React from 'react'
import {
  CustomWrapper,
  HeaderContent,
  HeaderWrap,
  Logo,
  Image,
  Nav,
  Menu,
  MenuItem,
  MenuLabel
} from './home.styles'
import { Link } from 'react-scroll'

const Header = (props) => {
  return (
    <HeaderWrap>
      <CustomWrapper>
        <HeaderContent>
          <Logo href="/">
            <Image src="media/img/svg/logo-svg.svg" />
          </Logo>
          <Nav>
            <Menu>
              <MenuItem>
                <MenuLabel>Home</MenuLabel>
              </MenuItem>
              <Link to="membership" spy={true} smooth={true}>
                <MenuItem>
                  <MenuLabel>Membership</MenuLabel>
                </MenuItem>
              </Link>
              <Link to="roadmap" spy={true} smooth={true}>
                <MenuItem>
                  <MenuLabel>Roadmap</MenuLabel>
                </MenuItem>
              </Link>
              <MenuItem>
                <MenuLabel>Hell’s Kitchen</MenuLabel>
              </MenuItem>
              <MenuItem>
                <MenuLabel>Hell’s Piggy Bank</MenuLabel>
              </MenuItem>
              <MenuItem>
                <MenuLabel>Minting</MenuLabel>
              </MenuItem>
            </Menu>
          </Nav>
        </HeaderContent>
      </CustomWrapper>
    </HeaderWrap>
  )
}

export default Header
