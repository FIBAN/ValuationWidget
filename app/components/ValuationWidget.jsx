import React from 'react';
import ValuationInput from './ValuationInput';
import ValuationDisplay from './ValuationDisplay';

class ValuationWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      reqReturn: 20,
      entrySales: 20000,
      salesMargin: 40,
      invPeriod: 6,
      initInvest: 15000
	};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(
    reqReturn,
    entrySales,
    salesMargin,
    invPeriod,
    initInvest
  ) {
    this.setState({ 
      reqReturn: reqReturn,
      entrySales: entrySales,
      salesMargin: salesMargin,
      invPeriod: invPeriod,
      initInvest: initInvest
    });
  }

  render () {
    return (
      <div className="valuationWidget">
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
