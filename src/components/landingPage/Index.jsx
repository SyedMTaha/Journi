import React from 'react'
import Welcome from './Welcome'
import Expertise from './Expertise'
import Testimonials from './Testimonials'
import Team from './Team'
import Card from './Card'
import FAQS from './FAQS'
import InterestedServices from './InterestedServices'

const LandingPage = () => {
  return (
    <>
        <Welcome/>
        <Expertise/>
        <Testimonials/>
        <Team/>
        <Card/>
        <FAQS/>
        <InterestedServices/>
    </>
  )
}

export default LandingPage