var React     = require('react');
var Container = require('Container');

// Using Arrow Function Notation (Stateless Components)
var About = (props) => {
  return(
    <Container>
      <h1>About Weather</h1>
      <p className="lead">
        The Web App provides the information of weather based on the city name provided.
      </p>
    </Container>
  )
}

module.exports = About;
