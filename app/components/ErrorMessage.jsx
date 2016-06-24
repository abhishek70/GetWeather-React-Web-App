var React = require('react');

var ErrorMessage = (props) => {
  return(
    <div className="col-md-12">
      <h2 className="lead text-danger">
        {props.errorMessage}
      </h2>
    </div>
  )
}

module.exports = ErrorMessage;
