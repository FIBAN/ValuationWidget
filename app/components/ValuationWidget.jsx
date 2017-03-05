import React from 'react';
import ValuationInput from './ValuationInput';
import ValuationDisplay from './ValuationDisplay';

class ValuationWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      reqReturn: 20,
      entrySales: 20000,
      yearsUntilSales: 0,
      salesMargin: 40,
      invPeriod: 6,
      initInvest: 15000
	};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(
    reqReturn,
    entrySales,
    yearsUntilSales,
    salesMargin,
    invPeriod,
    initInvest
  ) {
    this.setState({ 
      reqReturn: reqReturn,
      entrySales: entrySales,
      yearsUntilSales: yearsUntilSales,
      salesMargin: salesMargin,
      invPeriod: invPeriod,
      initInvest: initInvest
    });
  }

  parseValue(value) {
    if (isNaN(value)) {
      return Number(String(value).replace(",", "."));
    } else {
      return value;
    }
  }

  render () {
    return (
      <div className="valuationWidget">
        <ValuationInput 
        	reqReturn={this.state.reqReturn}
        	entrySales={this.state.entrySales}
          yearsUntilSales={this.state.yearsUntilSales}
        	salesMargin={this.state.salesMargin}
        	invPeriod={this.state.invPeriod}
        	initInvest={this.state.initInvest}
        	onChange={this.handleChange}
        	/>
        <ValuationDisplay 
        	reqReturn={this.parseValue(this.state.reqReturn)}
        	entrySales={this.parseValue(this.state.entrySales)}
          yearsUntilSales={this.parseValue(this.state.yearsUntilSales)}
        	salesMargin={this.parseValue(this.state.salesMargin)}
        	invPeriod={this.parseValue(this.state.invPeriod)}
        	initInvest={this.parseValue(this.state.initInvest)}
        	/>
      </div>
    );
  }
}

export default ValuationWidget;
