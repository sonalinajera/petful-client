import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import WhyAdopt from '../components/WhyAdopt/WhyAdopt'
import HowItWorks from '../components/HowItWorks/HowItWorks'


export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <h2>About Petful </h2>
          
          <Link to={'/about'}><p>Learn more about Petful</p></Link>
        </div>
        <div className="landing-content">
          <HowItWorks/>
        </div>
        <div className='landing-content'>
          <WhyAdopt/>
        </div>
        <div className='landing-content'>
          <h2> Success Stories</h2>
          <Link to={'/success'}><p>Checkout the awesome pets here</p></Link>
        </div>
      </div>
    )
  }
}

export default LandingPage
