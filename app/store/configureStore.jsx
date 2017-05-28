let redux = require('redux');
let { searchTextReducer, toggleShowCompletedReducer, todosReducer } = require('reducers');

export var configure = () => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: toggleShowCompletedReducer,
    todos: todosReducer
  });

  let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
