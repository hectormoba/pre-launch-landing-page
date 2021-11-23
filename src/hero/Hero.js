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

    const {imageLeft, imageRight, scrollImage, imageMobile} = this.props
    const {screenSize} = this.state


    if(screenSize < 868) {
      chosenHeroImageLeft = <img src={imageMobile} alt="Hero image mobile" />
    } else {
      chosenHeroImageLeft = <img src={imageLeft} alt="First Hero image" />
      chosenHeroImageRight = <img src={imageRight} alt="First Hero image" />
    }
    return(
      <section>
        {chosenHeroImageLeft}
        <div>
          <h1>Get paid for the work you <em>love</em> to do</h1>
          <p> The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered</p>
          <img src={scrollImage} alt="Scroll icon" />
        </div>
        {chosenHeroImageRight}
      </section>
    )
  }
}

export default Hero