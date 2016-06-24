var React           = require('react');
var Container       = require('Container');
var WeatherForm     = require('WeatherForm');
var WeatherInfo     = require('WeatherInfo');
var openWeatherMap  = require('openWeatherMap');
var Loader          = require('Loader');
var ErrorMessage    = require('ErrorMessage');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      isLoading:false,
      errorMessage:''
    }
  },
  handleSearch:function(formData){
    this.setState({
      isLoading:true,
      errorMessage:''
    });
    openWeatherMap.getTemp(formData).then(function(res){
      if(res != '404') {
        this.setState({
          location:formData.location,
          temperature:res,
          isLoading:false
        });
      } else {
        this.setState({
          isLoading:false,
          errorMessage:'City not found ! Try again'
        });
      }

    }.bind(this), function(err){
      this.setState({
        isLoading:false,
        errorMessage:err
      });
    }.bind(this));
  },
  render:function(){
    var {isLoading, temperature, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading) {
        return <Loader/>
      } else if(errorMessage.length > 0) {
        return <ErrorMessage errorMessage={errorMessage}/>
      } else if (temperature && location) {
        return <WeatherInfo cityName={location} temperature={temperature}/>
      }
    }

    return(
      <Container>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </Container>
    )
  }
});


module.exports = Weather;
