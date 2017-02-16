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

  printableValue(value) {
    if (value == Number.POSITIVE_INFINITY || value == Number.NEGATIVE_INFINITY) {
      return "∞";
    } else if (isFinite(value)) {
      return value.toLocaleString();
    } else {
      return "ERROR"
    }

  }

  resultItem(label, value, symbol) {
    return(
          <div className="resultItem">
            <span>{this.printableValue(value)} {symbol}</span>
            <div>{label}</div>
          </div>
      );
  }

  render() {
    return (
      <div className="resultRow">
          {this.resultItem("Required annual sales growth", (this.calculateRequiredAnnualGrowth() * 100).toFixed(2), "%")}
          {this.resultItem("Corresponding sales at the end of investment period", Math.round(this.calculateSalesAtEndOfInvPeriod()), "€")}
          {this.resultItem("Firm value", Math.round(this.calculateFirmValue()), "€")}
      </div>
    );
  }

}

export default ValuationDisplay;
