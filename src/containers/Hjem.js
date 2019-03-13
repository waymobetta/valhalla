import React, { Component } from 'react'
import LoaderButton from '../components/LoaderButton'
import './Hjem.css'

export default class Hjem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: false
		}
	}

	handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  async handleSubmit (event) {
    event.preventDefault()

    this.setState({ isLoading: true })

    try {
    	this.props.history.push('/approved')
    } catch (e) {
      console.error(e.message)
      this.setState({
        isLoading: false
      })
    }
  }
	
	render () {
  	return (  
		  <div className='Hjem'>
		  	<div className="header">
		  		<div className="containerSynth">
			    	<a href="/">
            	v a l h a l l a
            </a>
			    </div>
		    </div>
		    <form onSubmit={event => this.handleSubmit(event)}>
			    <LoaderButton
			      block
			      className='button--cd btn btn-outline-primary'
			      outline
			      color='primary'
			      type='submit'
			      isLoading={this.state.isLoading}
			      text='Enter..'
			     />
				</form>
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
