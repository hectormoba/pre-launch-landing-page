import React from 'react'
import Header from './hero/Header'
import Hero from './hero/Hero'

import Logo from './assets/logo.svg'
import HeroMobile from './assets/illustration-hero-mobile.png'
import HeroLeft from './assets/illustration-hero-left.svg'
import HeroRight from './assets/illustration-hero-right.svg'
import Scroll from './assets/icon-scroll.svg'

class App extends React.Component {
  render(){
    return(
      <div>
        <Header logo={Logo}/>
        <Hero imageLeft={HeroLeft} imageRight={HeroRight} imageMobile={HeroMobile}  scrollImage={Scroll}/>
      </div>
      )
  }
}

export default App