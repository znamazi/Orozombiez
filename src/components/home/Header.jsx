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
import menuItems from '../../constants/menu'

const Header = (props) => {
  const menuItemsJsx = menuItems.map((item) => {
    if (item.link) {
      return (
        <MenuItem>
          <MenuLabel>{item.name}</MenuLabel>
        </MenuItem>
      )
    } else {
      return (
        <Link to={item.to} spy={true} smooth={true}>
          <MenuItem>
            <MenuLabel>{item.name}</MenuLabel>
          </MenuItem>
        </Link>
      )
    }
  })
  return (
    <HeaderWrap>
      <CustomWrapper>
        <HeaderContent>
          <Logo href="/">
            <Image src="media/img/svg/logo-svg.svg" />
          </Logo>
          <Nav>
            <Menu>{menuItemsJsx}</Menu>
          </Nav>
        </HeaderContent>
      </CustomWrapper>
    </HeaderWrap>
  )
}

export default Header
