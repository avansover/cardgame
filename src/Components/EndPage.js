import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class EndPage extends Component {

    playagain = () => {

        this.props.playagain1()

    }


    render() {


        if (this.props.redirect1 === 'warroom') {

            return <Redirect push to="/warroom" />;

        }

        return (
            <div>

                win {this.props.playerDB1.victoryNum}
                lose {this.props.playerDB1.lossesNum}

                <button onClick={this.playagain}>again</button>

            </div>
        )
    }
}
