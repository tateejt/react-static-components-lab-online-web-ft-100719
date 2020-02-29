import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import FordQuoteComponent from './FordQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
				<MouseComponent />
			</div>
		);
	}
}

export default App;
