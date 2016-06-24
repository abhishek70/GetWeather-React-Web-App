var React = require('react');
var styles = require('../styles/index.js');

var Container = React.createClass({
  render:function(){
    return(
      <div className="container">
        <div style={styles.starterTemplate}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Container;
