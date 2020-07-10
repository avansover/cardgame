import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {


            enteredName: ''

        }
    }

    nameEnter = (ev) => {

        let name = ev.target.value

        this.setState({ enteredName: name })



    }

    login = () => {

        if (this.state.enteredName.length === 0) {

            console.log('no name was entered');

            var status = ""

        } else {

            status = 'warroom'
            this.props.login1(status, this.state.enteredName)

        }


    }

    render() {

        if (this.props.redirect1 === 'warroom') {

            return <Redirect push to="/warroom" />;

        }

        return (
            <div>

                <div>Ready for War</div>

                <div>
                    <input
                        onChange={this.nameEnter} type='text'>
                    </input>


                </div>

                <div>


                    <button
                        onClick={this.login}
                    >
                        log in
                    </button>


                </div>

            </div>
        )
    }
}
