import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login.js'
import WarRoom from './Components/WarRoom.js'
import EndPage from './Components/EndPage.js'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {

      playerDB: [],

      totalCardDB: [],
      playerCardDB: [],
      CompCardDB: [],

      redirect: "",

    }
  }

  login2 = (status1, enteredName1) => {

    this.setState({ redirect: status1 })

    let tempPDB = [...this.state.playerDB]

    tempPDB = {
      playerName: enteredName1,
      victoryNum: 0,
      lossesNum: 0,
      playNum: 0
    }

    this.setState({ playerDB: tempPDB })

    this.shuffle()

  }

  shuffle = () => {

    console.log('shuffle');

    let tempTCDB = [...this.state.totalCardDB]

    for (let j = 0; j < 4; j++) {

      for (let i = 0; i < 13; i++) {

        tempTCDB.push(i + 1)

      }

    }

    

    for (let i = 0; i < 50; i++) {

      let randomPlaceA = Math.ceil(Math.random() * 52 - 1)
      let randomPlaceB = Math.ceil(Math.random() * 52 - 1)

      let tempCard = tempTCDB[randomPlaceA]
      tempTCDB[randomPlaceA] = tempTCDB[randomPlaceB]
      tempTCDB[randomPlaceB] = tempCard

    }

    let tempPCDB = [...this.state.playerCardDB]
    let tempCCDB = [...this.state.CompCardDB]

    for (let i = 0; i < 26; i++) {

      tempPCDB.push(tempTCDB[i])
      tempCCDB.push(tempTCDB[51 - i])

    }

    this.setState({ totalCardDB: tempTCDB })
    this.setState({ playerCardDB: tempPCDB })
    this.setState({ CompCardDB: tempCCDB })

  }

  nextCard2 = (status1, winLose1) => {

    let tempPDB = this.state.playerDB
    tempPDB.playNum++

    if (winLose1 === 'win') {

      console.log('win');
      tempPDB.victoryNum++

    } else if (winLose1 === 'lose') {

      console.log('lose');
      tempPDB.lossesNum++

    } else if (winLose1 === 'draw') {

      console.log('draw');

    }

    this.setState({ redirect: status1 })
    this.setState({ playerDB: tempPDB })
    this.setState({ totalCardDB: [] })
    this.setState({ playerCardDB: [] })
    this.setState({ CompCardDB: [] })

  }

  playagain2 = () => {

    this.setState({ redirect: 'warroom' })

    this.shuffle()

  }



  render() {
    return (
      <div>

        <Router>

          <Switch>

            <Route exact path='/' component={() => {
              return <Login
                login1={this.login2}

                redirect1={this.state.redirect}
              />
            }} />
            <Route exact path='/warroom' component={() => {
              return <WarRoom
                nextCard1={this.nextCard2}

                playerCardDB1={this.state.playerCardDB}
                CompCardDB1={this.state.CompCardDB}
                redirect1={this.state.redirect}

              />
            }} />
            <Route exact path='/endpage' component={() => {
              return <EndPage
                playagain1={this.playagain2}


                playerDB1={this.state.playerDB}
                redirect1={this.state.redirect}


              />
            }} />



          </Switch>

        </Router>

      </div>
    )
  }
}
