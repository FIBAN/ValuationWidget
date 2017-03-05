import React from 'react';
import BusinessCalc from '../modules/BusinessCalc'

class ValuationDisplay extends React.Component {

  constructor(props) {
    super(props);
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

    const firmValue = BusinessCalc.calculateFirmValue(this.props.initInvest, this.props.reqReturn);
    const salesAtEndOfInvPeriod = BusinessCalc.calculateSalesAtEndOfInvPeriod(firmValue, this.props.salesMargin);
    const requiredAnnualGrowth = BusinessCalc.calculateRequiredAnnualGrowth(salesAtEndOfInvPeriod, this.props.entrySales, this.props.invPeriod, this.props.yearsUntilSales);

    return (
      <div className="resultRow">
          {this.resultItem("Required annual sales growth", (requiredAnnualGrowth * 100).toFixed(2), "%")}
          {this.resultItem("Corresponding sales at the end of investment period", Math.round(salesAtEndOfInvPeriod), "€")}
          {this.resultItem("Firm value today", Math.round(firmValue), "€")}
      </div>
    );
  }

}

export default ValuationDisplay;
