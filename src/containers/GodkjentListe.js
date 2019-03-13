import React, { Component } from 'react'
// import GodkjentModule from '../util/Godkjent'
import Godkjent from './Godkjent'
import { DB } from '../util/db'
import './GodkjentListe.css'

export default class GodkjentListe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      godkjentListe: []
    }
  }

  async componentWillMount() {
    // const godkjentRespons = await GodkjentModule.Get();
  
    this.setState({
      // godkjentListe: godkjentRespons.godkjentListe
      godkjentListe: DB
    })
  }

  renderGodkjent() {
    return (
        <ul>
          {
            this.state.godkjentListe.map((godkjent, index) => {
              return <li key={'Godkjent_' + index}>
                <Godkjent key={'Godkjent_' + index} godkjent={godkjent} />
                <br />
              </li>
            })
          }
        </ul>
    ) 
  }

  render () {
    return (
      <div className='GodkjentListe'>
        <div className="header">
          <div className="containerSynth">
           <a href="/">
              v a l h a l l a
            </a>
          </div>
        </div>
        <div className="list">
          {
            this.renderGodkjent()
          }
        </div>
        <div className="footSynth">
          <div className="containerSynth">
            <a href="https://waymobetta.com">
              waymobetta
            </a>
          </div>
        </div>
      </div>
    )
  }
}
