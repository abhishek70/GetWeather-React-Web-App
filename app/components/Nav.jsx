var React             = require('react');
var styles            = require('../styles/index');
var {Link, IndexLink} = require('react-router');

// Using Arrow Function Notation (Stateless Components)
var Nav = (props) => {
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Weather</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active" activeStyle={styles.active}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={styles.active}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={styles.active}>Examples</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

module.exports = Nav;
