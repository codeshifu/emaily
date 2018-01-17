import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Payment extends Component {
  render () {
    return (
      <div>
        <StripeCheckout
          name={process.env.REACT_APP_NAME}
          description='$5 for 5 email credits.'
          amount={500}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          token={(token) => this.props.handleToken(token)}>
          <button className='btn'>Add credits</button>
        </StripeCheckout>
      </div>
    )
  }
}

export default connect(null, actions)(Payment)
