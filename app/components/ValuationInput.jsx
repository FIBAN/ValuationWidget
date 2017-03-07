import React from 'react';
import Dropdown from 'react-dropdown';
import Slider from 'rc-slider';

class ValuationInput extends React.Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(key, value) {
    console.log(key, value);
    var input = {};
    input[key] = value;
    this.props.onInputChange(input);
  }

  inputRow(type, id, value, opts) {
    if(type === "slider") {
      return this.sliderInputRow(id, value, opts);
    } else {
      return this.textInputRow(id, value, opts);
    }
  }

  textInputRow(id, value, opts) {
    return (
      <div className="inputRow">
        <div className="inputLabel"><label htmlFor={id}>{opts.label + ":"}</label></div>
          <div className="inputCol textInputCol">
            <input 
              id={id} 
              step="any" 
              value={value} 
              onChange={e => this.onInputChange(id, e.target.value)} 
              disabled={opts.disabled ? "disabled": null}
            />
            <span className="inputUnit">{opts.unit}</span>
          </div>
      </div>
      );
  }

  sliderInputRow(id, value, opts) {
    var marks = {};
    marks[opts.min] = opts.min;
    marks[opts.max] = opts.max;

    return (
      <div className="inputRow">
        <div className="inputLabel"><label htmlFor={id}>{opts.label + ":"}</label></div>
        <div className="inputCol sliderInputCol">
          <Slider 
            min={opts.min} 
            max={opts.max} 
            defaultValue={value} 
            onChange={e => this.onInputChange(id, e)} 
            disabled={opts.disabled ? true: null}
            marks={marks}
          />
          <span className="inputUnit">{value + '\u00A0' + opts.unit}</span>
        </div>
      </div>
      );
  }

  render() {
    return (
      <div className="valuationInput">
          {this.inputRow("slider",   "reqReturn",     this.props.reqReturn,       { label: "Required return", unit: "%", disabled: true, min: 0, max: 100 })}
          {this.inputRow("text",   "entrySales",      this.props.entrySales,      { label: "Entry sales", unit: "€" })}
          {this.inputRow("slider", "yearsUntilSales", this.props.yearsUntilSales, { label: "Years until sales", unit: "years", min: 0, max: this.props.invPeriod - 1 })}
          {this.inputRow("slider",   "salesMargin",   this.props.salesMargin,     { label: "Sales margin of company", unit: "%", min: 0, max: 100 })}
          {this.inputRow("slider", "invPeriod",       this.props.invPeriod,       { label: "Investment period", unit: "years", min: 1, max: 15 })}
          {this.inputRow("text",   "initInvest",      this.props.initInvest,      { label: "Initial investment", unit: "€" })}
      </div>
    );
  }

}

export default ValuationInput;
