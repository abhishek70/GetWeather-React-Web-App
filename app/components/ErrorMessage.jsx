var React = require('react');
var Expire = require('Expire');

var ErrorMessage = React.createClass({
  render:function(){
    return(
      <Expire delay={2000}>
        <div className="col-md-12">
          <h2 className="lead text-danger">
            {this.props.errorMessage}
          </h2>
        </div>
      </Expire>
    )
  }
});

module.exports = ErrorMessage;
