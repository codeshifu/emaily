import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Payment from './Payment'

class Header extends Component {
    renderContent() {
        const {auth} = this.props;

        switch (auth) {
            case null:
                return 'cant decide yet';
            case false:
                return (
                    <li>
                        <a href="/auth/google">Log in with google</a>
                    </li>
                )
            default:
                return [
                        <li key="A"><Payment/></li>,
                        <li key="B" style={{margin: "0 15px"}}>Credits: {this.props.auth.credits}</li>,
                        <li key="C">
                            <a href="/api/logout">Logout</a>
                        </li>
                    ]
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link className="left brand-logo" to={this.props.auth ? '/surveys' : '/'}>
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps)(Header);