import React from 'react';
import Dropdown from 'react-dropdown'

class ValuationInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onChange(
      this.reqReturn.value,
      this.entrySales.value,
      this.yearsUntilSales.value,
      this.salesMargin.value,
      this.invPeriod.value,
      this.initInvest.value
    );
  }

  inputRow(id, label, value, unit, ref, isDisabled) {
    return (
      <tr className="inputRow">
        <td><label htmlFor={id}>{label + ":"}</label></td>
        <td>
          <div className="inputCol">
            <input id={id} step="any" value={value} onChange={this.handleChange} ref={ref} disabled={isDisabled ? "disabled": null}/><span>{unit}</span>
          </div>
        </td>
      </tr>
      );
  }

  yearInputRow(id, label, value, unit, ref, isDisabled) {
    const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    return (
      <tr className="inputRow">
        <td><label htmlFor={id}>{label + ":"}</label></td>
        <td>
          <div className="inputCol">
            <Dropdown options={options} onChange={this.handleChange} value={value} ref={ref} />
          </div>
        </td>
      </tr>
      );
  }

  render() {
    return (
      <div className="valuationInput">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
            {this.inputRow("reqReturn",       "Required return",         this.props.reqReturn,       "%",     ((i) => this.reqReturn = i), true)}
            {this.inputRow("entrySales",      "Entry sales",             this.props.entrySales,      "€",     ((i) => this.entrySales = i))}
            {this.inputRow("yearsUntilSales", "Years until sales",       this.props.yearsUntilSales, "years", ((i) => this.yearsUntilSales = i))}
            {this.inputRow("salesMargin",     "Sales margin of company", this.props.salesMargin,     "%",     ((i) => this.salesMargin = i))}
            {this.inputRow("invPeriod",       "Investment period",       this.props.invPeriod,       "years", ((i) => this.invPeriod = i))}
            {this.inputRow("initInvest",      "Initial investment",      this.props.initInvest,      "€",     ((i) => this.initInvest = i))}
            </tbody>
          </table>
         </form>
       </div>
    );
  }

}

export default ValuationInput;
