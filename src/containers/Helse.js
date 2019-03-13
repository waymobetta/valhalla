import React, { Component } from 'react'
// import HelseModule from '../util/Helse'
import './Helse.css'

export default class Helse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      helse: ''
    }
  }

  async componentWillMount() {
    // const helseResponse = await HelseModule.Get()
    
    this.setState({
      // helse: helseResponse.status
      helse: 'OK'
    })
  }

  render () {
    return (
      <div className='Helse'>
        <div className="header">
          <div className="containerSynth">
            <a href="/">
              v a l h a l l a
            </a>
          </div>
        </div>
        <div className="indicator">
          {
            this.state.helse === "OK"
            ? <span style={{ color: 'green' }}>{this.state.helse}</span>
            : <span style={{ color: 'darkred' }}>{this.state.helse}</span>
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
