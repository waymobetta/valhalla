import React, { Component } from 'react'
import LoaderButton from '../components/LoaderButton'
import './Hjem.css'

export default class Hjem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: false,
			isAuthenticated: false,
			account: '',
			balance: 0
		}
	}

	componentDidMount () {
		this.setState({
			isAuthenticated: this.props.isAuthenticated,
			account: this.props.account,
			balance: this.props.balance
		})
	}

	handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  async handleSubmit (event) {
    event.preventDefault()

    this.setState({ isLoading: true })

    if (this.props.balance <= 0) {
    	alert('You have not been deemed worthy to pass through the gates of Valhalla')
    	return
		}
		alert(`You are among the few allowed passage into Valhalla. Welcome home brother!`)

    try {
    	this.props.history.push('/approved')
    } catch (e) {
      console.error(e.message)
      this.setState({
        isLoading: false
      })
    }
  }

  validateAccess () {
  	if (
  		this.props.isAuthenticated
  		) {
  		return true
  	}
  	return false
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
		    		style={{ 'paddingTop': '100px', color: '#746945' }}>
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
