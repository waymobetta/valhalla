import React, { Component } from 'react'
// import GodkjentModule from '../util/Godkjent'
import Godkjent from './Godkjent'
import { DB } from '../util/db'
import './GodkjentListe.css'

export default class GodkjentListe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      godkjentListe: [],
      godkjentNum: 0
    }
  }

  async componentWillMount() {
    // const godkjentRespons = await GodkjentModule.Get();
  
    this.setState({
      // godkjentListe: godkjentRespons.godkjentListe
      godkjentListe: DB,
      godkjentNum: DB.length
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
          <div className="containerSynthHeader">
           <a href="/" style={{ color: '#746945' }}>
            V A L H A L L A
            </a>
          </div>
        </div>
        <div className="list">
          <div className="godkjentCount">
            Endorsements Given: <span style={{ color: '#444' }}>{this.state.godkjentNum}</span>
          </div>
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
