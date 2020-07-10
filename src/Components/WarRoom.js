import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class WarRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {

            cardInd: 0,

            compPoints: 0,

            playerPoints: 0,

            redirect: false,

        }
    }

    nextCard = () => {

        console.log('next card');

        let tempCardInd = this.state.cardInd

        tempCardInd++

        let compCard = this.props.CompCardDB1[this.state.cardInd]
        let playerCard = this.props.playerCardDB1[this.state.cardInd]

        var tempCompPoints = this.state.compPoints
        var tempPlayerPoints = this.state.playerPoints

        if (compCard > playerCard) {

            tempCompPoints++
            this.setState({ compPoints: tempCompPoints })

        } else if (compCard < playerCard) {

            tempPlayerPoints++
            this.setState({ playerPoints: tempPlayerPoints })
        }

        this.setState({ cardInd: tempCardInd })

        if (this.state.cardInd === 3) {

            console.log(tempCompPoints);
            console.log(tempPlayerPoints);

            if (tempPlayerPoints > tempCompPoints) {

                var winLose = 'win'

            } else if (tempPlayerPoints < tempCompPoints) {

               winLose = 'lose'

            } else {

               winLose = 'draw'

            }


            var status = 'endpage'
            this.props.nextCard1(status, winLose)

        }

    }


    render() {

        if (this.props.redirect1 === 'endpage') {

            return <Redirect push to="/endpage" />;

        }

        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div>
                    <div>computer points {this.state.compPoints}</div>

                    <div>card {this.props.CompCardDB1[this.state.cardInd]}</div>

                    <div>card {this.props.playerCardDB1[this.state.cardInd]}</div>

                    <div style={{ display: 'flex', msFlexDirection: 'row' }}>
                        <button onClick={this.nextCard}>next</button>

                        <div>your points {this.state.playerPoints}</div>
                    </div>

                </div>


            </div>
        )
    }
}
