import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import getWeb3 from './util/getWeb3'
import Routes from './Routes'
import './App.css'

class App extends Component {
	constructor (props) {
  	super(props)

    this.state = {
      isAuthenticated: false,
      isLoading: false,
			isConnected: false,
			web3: null,
			account: '',
			balance: 0,
			contract: '0x600ec79f2B258d7cc625AE80267Eb23689be417b'
    }
  }

	componentDidMount = async () => {
		try {
    	// Get network provider and web3 instance.
    	const web3 = await getWeb3();

    	// Use web3 to get the user's accounts.
    	const accounts = await web3.eth.getAccounts();	

   		var abi = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"tokenURI","type":"string"}],"name":"mintWithTokenURI","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"}]

			// creation of contract object
			var contract = new web3.eth.Contract(abi)
			// initiate contract for an address
			contract.options.address = this.state.contract

			// call constant function
			contract.methods.balanceOf(accounts[0]).call({from: accounts[0]}, (err, res) => {
				if (!err) {
					const resNum = web3.utils.hexToNumberString(res)
					const bal = web3.utils.fromWei(resNum, 'wei');
					if (bal > 0) {
						this.setState({
							balance: bal,
							isAuthenticated: true,
							web3: web3,
     					account: accounts[0], 
     					isConnected: true
						})
					}
				}
			})	
   } catch (error) {
     // Catch any errors for any of the above operations.
     alert(
       `Failed to load web3, accounts, or contract. Check console for details.`
     );
     console.log(error);
   	}		
	}

  render() {
  	// console.log(this.state.isConnected, this.state.account, this.state.balance, this.state.isAuthenticated)

    const childProps = {
    	isAuthenticated: this.state.isAuthenticated,
    	account: this.state.account,
    	balance: this.state.balance
    }

    return (
      <div className="App">
     		<Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
