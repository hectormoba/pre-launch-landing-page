import React from 'react'
import Header from './hero/Header'
import Hero from './hero/Hero'
import Item from './main/Item'
import Plans from './main/Plans'
import Input from './bottom/Input'

import Logo from './assets/logo.svg'
import HeroMobile from './assets/illustration-hero-mobile.png'
import HeroLeft from './assets/illustration-hero-left.svg'
import HeroRight from './assets/illustration-hero-right.svg'
import Scroll from './assets/icon-scroll.svg'
import Passions from './assets/illustration-passions.svg'
import Freedom from './assets/illustration-financial-freedom.svg'
import Lifestyle from './assets/illustration-lifestyle.svg'
import Work from './assets/illustration-work-anywhere.svg'
import FreePlan from './assets/icon-free.svg'
import PaidPlan from './assets/icon-paid.svg'

const itemsContent = [
  {
    image: Passions,
    title: 'Indulge your passions',
    text: 'Your passions shouldn\'t be just for the weekend. Earn a living doing what you love.',
    id: 'passion'
  },
  {
    image: Freedom,
    title: 'Gain financial freedom',
    text: 'Start making money work for you. There’s nothing quite like earning while you sleep.',
    id: 'freedoom'
  },
  {
    image: Lifestyle,
    title: 'Choose your lifestyle',
    text: 'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
    id: 'lifestyle'
  },
  {
    image: Work,
    title: 'Work from anywhere',
    text: 'Selling online means not being pinned down. Want to work AND travel? Go for it!',
    id: 'work'
  }
]

const plansContent = [
  {
    icon: FreePlan,
    title: 'Dip your toe',
    upperText: 'Just getting started? No problem at all! Our free plan will take you a long way.',
    planPricing: 'Free',
    planIntallment: null,
    itemsList: ['Unlimited products','Basic analytics','Limited marketplace exposure','10% fee per transaction'],
    id: "free"
  },
  {
    icon: PaidPlan,
    title: 'Dive right in',
    upperText: 'Ready for the big time? Our paid plan will help you take your business to the next level.',
    planPricing: '$25.00',
    planInstallment: '/month',
    itemsList: ['Custom domain','Advanced analytics and reports','High marketplace visibility','5% fee per transaction'],
    id: "paid-25"
  }
]


class App extends React.Component {
  render(){
    return(
      <div>
        <Header logo={Logo}/>
        <Hero imageLeft={HeroLeft} imageRight={HeroRight} imageMobile={HeroMobile}  scrollImage={Scroll}/>
        <section className="page-section globalpadding">
          {itemsContent.map(item => 
            <Item name={item.id} image={item.image} title={item.title} text={item.text} key={item.id}/>)}
        </section>
        <section className="plans-section page-section globalpadding">
          <h2 className="title">Our pricing plans</h2>
          <p className="regular-text">We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
          {plansContent.map(item=>
          <Plans name={item.id} topIcon={item.icon} title={item.title} upperText={item.upperText} pricing={item.planPricing} planInstallment={item.planInstallment} items={item.itemsList} key={item.id}/>)}
        </section>
        <Input />
      </div>
      )
  }
}

export default App