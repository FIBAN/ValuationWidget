import React from 'react';

class ValuationInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onChange(
      this.reqReturn.value,
      this.entrySales.value,
      this.salesMargin.value,
      this.invPeriod.value,
      this.initInvest.value
    );
  }

  inputRow(id, label, value, ref) {
    return (
      <tr className="inputRow">
        <td><label htmlFor={id}>{label}</label></td>
        <td><input id={id} type="number" step="any" value={value} onChange={this.handleChange} ref={ref} /></td>
      </tr>
      );

  }

  render() {
    return (
      <div className="valuationInput">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
            {this.inputRow("reqReturn",     "Required return (%)",         this.props.reqReturn,   ((i) => this.reqReturn = i))}
            {this.inputRow("entrySales",    "Entry sales (€)",             this.props.entrySales,  ((i) => this.entrySales = i))}
            {this.inputRow("salesMargin",   "Sales margin of company (%)", this.props.salesMargin, ((i) => this.salesMargin = i))}
            {this.inputRow("invPeriod",     "Investment period (years)",   this.props.invPeriod,   ((i) => this.invPeriod = i))}
            {this.inputRow("initInvest",    "Initial investment (€)",      this.props.initInvest,  ((i) => this.initInvest = i))}
            </tbody>
          </table>
         </form>
       </div>
    );
  }

}

export default ValuationInput;
