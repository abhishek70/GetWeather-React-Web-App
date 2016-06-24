var React     = require('react');
var Main      = require('Main');
var Weather   = require('Weather');
var About     = require('About');
var Examples  = require('Examples');

// Object Destructering
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// The above can be written as well like below
/*var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;*/


var routes = (
 <Router history={hashHistory}>
 	<Route path='/' component={Main}>
    <IndexRoute component={Weather}/>
    <Route path='about' component={About}/>
    <Route path='examples' component={Examples}/>
  </Route>
 </Router>
);

module.exports = routes;
