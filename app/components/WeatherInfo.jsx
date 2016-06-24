var React = require('react');

var WeatherInfo = React.createClass({
  propTypes : {
    temperature:React.PropTypes.number.isRequired,
    cityName:React.PropTypes.string.isRequired
  },
  render:function(){
    return(
      <div className="col-md-12">
        <h2 className="lead text-info">
          It's {this.props.temperature} in {this.props.cityName}.
        </h2>
      </div>
    )
  }
});

module.exports = WeatherInfo;
