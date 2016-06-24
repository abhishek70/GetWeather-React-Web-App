var React     = require('react');
var Container = require('Container');
var {Link}    = require('react-router');

// Using Arrow Function Notation (Stateless Components)
var Examples = (props) => {
  return(
    <Container>
      <h1>Examples</h1>
      <p className="lead">
        Below are the demo location to view the weather:
      </p>
      <div className="col-md-4 col-md-offset-4">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to='/?location=Campbell'>
              Campbell, CA
            </Link>
          </li>
          <li className="list-group-item">
            <Link to='/?location=San Jose'>
              San Jose, CA
            </Link>
          </li>
          <li className="list-group-item">
            <Link to='/?location=Austin'>
              Austin, TX
            </Link>
          </li>
        </ul>
      </div>

    </Container>
  )
}

module.exports = Examples;
