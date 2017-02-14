import React from 'react';
import ValuationInput from './ValuationInput';
import ValuationDisplay from './ValuationDisplay';

class ValuationWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      reqReturn: 20,
      entrySales: 0,
      salesMargin: 0,
      invPeriod: 0,
      initInvest: 15
	};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(param, value) {
  	var state = {};
	state[param] = value;
	this.setState(state);
  }

  render () {
    return (
      <div>
        <ValuationInput 
        	reqReturn={this.state.reqReturn}
        	entrySales={this.state.entrySales}
        	salesMargin={this.state.salesMargin}
        	invPeriod={this.state.invPeriod}
        	initInvest={this.state.initInvest}
        	onChange={this.handleChange}
        	/>
        <ValuationDisplay 
        	reqReturn={this.state.reqReturn}
        	entrySales={this.state.entrySales}
        	salesMargin={this.state.salesMargin}
        	invPeriod={this.state.invPeriod}
        	initInvest={this.state.initInvest}
        	/>
      </div>
    );
  }
}

export default ValuationWidget;