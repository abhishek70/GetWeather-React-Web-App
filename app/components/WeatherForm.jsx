var React = require('react');
var {FormGroup, FormControl} = require('react-bootstrap');

var WeatherForm = React.createClass({

  getInitialState: function() {
    return {
      unit: 'imperial',
      location:'',
      errorState:null,
    }
  },
  onFormSubmit:function(e){
    e.preventDefault();
    var location = this.state.location;
    var units    = this.state.unit;
    var formData = {}

    if(this.state.location.length <= 0) {

      this.setState({errorState: 'error'});
      return false;

    } else {

      formData.location = location;
      formData.unit = units;

      this.setState({
        errorState: null,
        location:''
      });

      this.props.onSearch(formData);
    }
  },
  onUnitChange: function (changeEvent) {
    this.setState({
      unit: changeEvent.target.value
    });
  },
  handleChange(e) {
    const length = e.target.value.length;
    if(length > 0) {

      this.setState({ errorState: 'success' });

    } else if(length <= 0) {

      this.setState({ errorState: 'error' });
    }

    this.setState({ location: e.target.value });
  },
  render:function(){
    return(
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.onFormSubmit}>
            <FormGroup
            controlId="formBasicText"
            validationState={this.state.errorState}>
              <FormControl
                type="text"
                value={this.state.location}
                autoComplete="off"
                placeholder="Enter city name"
                onChange={this.handleChange}/>
              <FormControl.Feedback />
            </FormGroup>

            <div className="form-group">
              <label className="radio-inline">
                <input type="radio"
                  name="units"
                  ref="units"
                  id="imperial"
                  checked={this.state.unit === 'imperial'}
                  value="imperial" onChange={this.onUnitChange}/> Fahrenheit
              </label>
              <label className="radio-inline">
                <input type="radio"
                  name="units"
                  ref="units"
                  id="metric"
                  checked={this.state.unit === 'metric'}
                  value="metric" onChange={this.onUnitChange}/> Celsius
              </label>
            </div>
            <button type="submit" className="btn btn-success btn-block">Get Weather</button>
          </form>
        </div>
        )
      }
    });

    module.exports = WeatherForm;
