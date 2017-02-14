import React from 'react';

class ValuationInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      reqReturn: props.reqReturn,
      entrySales: props.entrySales,
      salesMargin: props.salesMargin,
      invPeriod: props.invPeriod,
      initInvest: props.initInvest
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(param) {
    return function(value) {
      var state = {};
      state[param] = value;
      this.setState(state);
      this.props.onChange(param, value);
    }.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput label="Required return (%)" value={this.state.reqReturn} onChange={this.onChange("reqReturn")} isDisabled="true" /> <br/>
        <FormInput label="Entry sales (k€)" value={this.state.entrySales} onChange={this.onChange("entrySales")} /> <br/>
        <FormInput label="Sales margin of company (%)" value={this.state.salesMargin} onChange={this.onChange("salesMargin")} /> <br/>
        <FormInput label="Investment period (years)" value={this.state.invPeriod} onChange={this.onChange("invPeriod")} /> <br/>
        <FormInput label="Initial investment (k€)" value={this.state.initInvest} onChange={this.onChange("initInvest")} isDisabled="true" />
      </form>
    );
  }

}

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <label>
        {this.props.label}:
        <input type="number" value={this.props.value} onChange={this.handleChange} disabled={this.props.isDisabled ? 'true' : null}/>
      </label>
    );
  }
}

export default ValuationInput;
