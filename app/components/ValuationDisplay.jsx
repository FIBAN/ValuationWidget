import React from 'react';

class ValuationDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.calculateFirmValue = this.calculateFirmValue.bind(this);
    this.calculateSalesAtEndOfInvPeriod = this.calculateSalesAtEndOfInvPeriod.bind(this);
    this.calculateRequiredAnnualGrowth = this.calculateRequiredAnnualGrowth.bind(this);
  }

  calculateFirmValue() {
    return this.props.initInvest / (this.props.reqReturn / 100);
  }

  calculateSalesAtEndOfInvPeriod() {
    return this.calculateFirmValue() / (this.props.salesMargin / 100);
  }

  calculateRequiredAnnualGrowth() {
    return Math.pow((this.calculateSalesAtEndOfInvPeriod() / this.props.entrySales), (1 / this.props.invPeriod)) - 1
  }

  render() {
    return (
      <ul>
        <li>Required annual sales growth: {this.calculateRequiredAnnualGrowth().toFixed(2)}%</li>
        <li>Corresponding sales at the end of investment period: {Math.round(this.calculateSalesAtEndOfInvPeriod())} €</li>
        <li>Firm value: {Math.round(this.calculateFirmValue())} €</li>
      </ul>
    );
  }

}

export default ValuationDisplay;
