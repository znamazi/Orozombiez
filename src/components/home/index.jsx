import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

import { Container } from './home.styles'

const Home = (props) => {
  return (
    <Container>
      <Header />
      <Content {...props} />
      <Footer />
    </Container>
  )
}

export default Home
