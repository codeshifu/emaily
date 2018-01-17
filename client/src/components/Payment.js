import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class Payment extends Component {
    render() {
        return (
            <div>
                <StripeCheckout
                    name={process.env.REACT_APP_NAME}
                    description="$5 for 5 email credits."
                    amount={500}
                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                    token={(token) => {
                    console.log(token);
                }}>
                    <button className="btn">Add credits</button>
                </StripeCheckout>
            </div>
        )
    }
}