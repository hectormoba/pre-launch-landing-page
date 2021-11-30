import React, { Component } from 'react'

class Hero extends Component {
  state = {
    screenSize: window.innerWidth
  }

  updateSize = () => {
    this.setState({screenSize: window.innerWidth})
  }
  
  componentDidMount(){
    window.addEventListener('resize', this.updateSize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateSize)
  }


  render() {
    let chosenHeroImageLeft
    let chosenHeroImageRight
    let heroTextClass
    let heroClass = "hero"

    const {imageLeft, imageRight, scrollImage, imageMobile} = this.props
    const {screenSize} = this.state


    if(screenSize < 649) {
      chosenHeroImageLeft = <img className="hero-image" src={imageMobile} alt="Hero image mobile" />
      heroClass = "hero"
      heroTextClass = "hero-text-container globalpadding"
    } else {
      chosenHeroImageLeft = <img className="hero-image" src={imageLeft} alt="First Hero image" />
      chosenHeroImageRight = <img className="hero-image" src={imageRight} alt="First Hero image" />
      heroClass += " display-flex"
      heroTextClass = "hero-text-container"
    }
    return(
      <section className={heroClass}>
        {chosenHeroImageLeft}
        <div className={heroTextClass}>
          <h1 className="title">Get paid for the work you <b>love</b> to do</h1>
          <p className="regular-text"> The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered</p>
          <img className="icon" src={scrollImage} alt="Scroll icon" />
        </div>
        {chosenHeroImageRight}
      </section>
    )
  }
}

export default Hero