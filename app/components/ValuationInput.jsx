import React from 'react';
import Select from 'react-select'

class ValuationInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.state = {
      yearsUntilSales: props.yearsUntilSales
    }
  }

  handleChange() {
    //console.log("change ", val);
    this.props.onChange(
      this.reqReturn.value,
      this.entrySales.value,
      this.state.yearsUntilSales,
      this.salesMargin.value,
      this.invPeriod.value,
      this.initInvest.value
    );
  }

  handleYearChange(val) {
    this.setState({
        yearsUntilSales: val.value
      }, 
      () => this.handleChange()
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
    const options = [
      { value: 0, label: 'Zero' },
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' },
      { value: 4, label: 'Four' },
      { value: 5, label: 'Five' },
      { value: 6, label: 'Six' }
    ];
    return (
      <tr className="inputRow yearInputRow">
        <td><label htmlFor={id}>{label + ":"}</label></td>
        <td>
          <div className="inputCol">
            <Select
                name={id}
                options={options}
                value={options.find(o => o.value == value)}
                onChange={this.handleYearChange}
                searchable={false}
                clearable={false}
                ref={ref}
            />
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
            {this.yearInputRow("yearsUntilSales", "Years until sales",       this.state.yearsUntilSales, "years", ((i) => this.yearsUntilSales = i))}
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
