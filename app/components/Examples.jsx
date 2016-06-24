var React     = require('react');
var Container = require('Container');

// Using Arrow Function Notation (Stateless Components)
var Examples = (props) => {
  return(
    <Container>
      <h1>Examples</h1>
      <p className="lead">
        This will list the previously entered city name and it's weather information.
      </p>
    </Container>
  )
}

module.exports = Examples;
