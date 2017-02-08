import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { DefaultRoute, Link, Router, Route, RouteHandler, browserHistory } from 'react-router';
import View1 from './views/View1';

render(<View1 />, document.getElementById('app'));

// // An Example
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md
// render(
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={Home} />
//       <Route path='about' component={About} />
//       <Route path='features' component={Features} />
//     </Route>
//   </Router>,
//   document.getElementById('app')
// )