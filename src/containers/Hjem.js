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
		  		<div className="containerSynthHeader">
          	<a href="/" style={{ color: '#746945' }}>
            	V A L H A L L A
            </a>
			    </div>
		    </div>
		    <div className="description">
		    	<p
		    		style={{ 'padding-top': '100px', color: '#746945' }}>
		    		AN EVERLASTING LIST<br/><br/>SELF-OWNED, SELF-MANAGED<br/><br/>WITHIN WHICH ONE CAN DISPLAY<br/><br/>THROUGH THE MINTING AND BURNING OF DIGITAL ASSETS<br/><br/>THEIR PUBLIC ADVOCATION FOR OTHERS
		    	</p>
		    </div>
		    <div className="button">
			    <form onSubmit={event => this.handleSubmit(event)}>
				    <LoaderButton
				      block
				      className='button--cd btn btn-outline-primary'
				      outline
				      color='primary'
				      type='submit'
				      isLoading={this.state.isLoading}
				      text='enter'
				     />
					</form>
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
