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
  MenuLabel,
  BurgerBtn,
  BurgerContainer,
  BurgerBtnSpan
} from './home.styles'
import { Link } from 'react-scroll'
import menuItems from '../../constants/menu'

const Header = (props) => {
  const [transform, setTransform] = React.useState(100)
  const [burger, setBurger] = React.useState(false)

  React.useEffect(() => {
    if (burger) {
      setTransform(0)
      document.body.style.overflow = 'hidden'
    } else {
      setTransform(100)
      document.body.style.overflow = 'unset'
    }
  }, [burger])

  const menuItemsJsx = menuItems.map((item) => {
    if (item.link) {
      return (
        <MenuItem onClick={() => setBurger(false)} key={item.name}>
          <MenuLabel>{item.name}</MenuLabel>
        </MenuItem>
      )
    } else {
      return (
        <Link to={item.to} spy={true} smooth={true}>
          <MenuItem onClick={() => setBurger(false)} key={item.name}>
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
          <Nav transform={transform}>
            <Menu>{menuItemsJsx}</Menu>
          </Nav>
          <BurgerBtn onClick={() => setBurger(!burger)}>
            <BurgerContainer>
              <BurgerBtnSpan active={burger}></BurgerBtnSpan>
              <BurgerBtnSpan active={burger}></BurgerBtnSpan>
            </BurgerContainer>
          </BurgerBtn>
        </HeaderContent>
      </CustomWrapper>
    </HeaderWrap>
  )
}

export default Header
