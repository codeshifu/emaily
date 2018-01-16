import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class Payment extends Component {
    render() {
        return (
            <div>
                <StripeCheckout
                    amount={500}
                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                    token={(token) => {
                    console.log(token);
                }}/>
            </div>
        )
    }
}