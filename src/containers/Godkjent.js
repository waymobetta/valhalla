import React, { Component } from 'react'

export default class Godkjent extends Component {
  render () {
    const { godkjent } = this.props

    return (
      <div className='Godkjent'>
          <strong></strong> {godkjent.navn}<br />
          <strong></strong> {godkjent.adresse}<br />
      </div>
    )
  }
}
