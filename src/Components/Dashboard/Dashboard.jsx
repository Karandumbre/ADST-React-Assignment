import React, { Component } from 'react'
import './Dashboard.css'
import { connect } from 'react-redux';


export class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showDiv: false,
            border: '#0080ff'
        }

        this.colorHandler = this.colorHandler.bind(this);
    }


    showCallDiv = () => {
        this.setState({
            showDiv: !this.state.showDiv
        })
    }

    colorHandler = (event) => {
        this.setState({
            border: event.target.value
        })
    }

    render() {
        const element = (this.state.showDiv) ? (<div>
            <div className='Ad-Triangle-Call-Widget-container' style={{ border: `10px solid ${this.state.border}` }}>
                <p>{this.props.CurrentState.data.labels}</p>
                <p> <i className="fa fa-phone" aria-hidden="true"></i><a href={this.props.CurrentState.data.phone_number}> {this.props.CurrentState.data.phone_number}</a>
                </p>
            </div>

            <div>
                <span className='Ad-Triangle-Call-Widget-call-outer-div' style={{ border: `5px solid ${this.state.border}` }} onClick={this.showCallDiv}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </span>
            </div>
        </div>) : (
                <div>
                    <span className='Ad-Triangle-Call-Widget-call-outer-div' style={{ border: `5px solid ${this.state.border}` }} onClick={this.showCallDiv}>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                </div>
            )

        return (
            <div>
                <div className='Ad-Triangle-Call-Widget-colorDiv'>
                    <input type="color" value={this.state.border} id='color' onChange={this.colorHandler} />
                </div>

                {element}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CurrentState: state
    }
}

export default connect(mapStateToProps)(Dashboard);
