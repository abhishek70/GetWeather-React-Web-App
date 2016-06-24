var React   = require('react');
var styles  = require('../styles/index.js');

// Using Arrow Function Notation (Stateless Components)
var Loader = (props) => {
  return(
    <div className="col-md-12" style={styles.loadingIcon}>
      <img src="images/loading.gif"/>
    </div>
  )
}

module.exports = Loader;
