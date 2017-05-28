let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let AppTodo = require('AppTodo');

let actions = require('actions');
let store = require('configureStore').configure();

let unsubscribe = store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('Feed Dog'));
store.dispatch(actions.setSearchText('Dog'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<AppTodo/>,
  document.getElementById('app')
);
