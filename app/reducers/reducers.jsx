let uuid = require('uuid');
let moment = require('moment');

export let searchTextReducer = (state= '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export let toggleShowCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export let todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          dateCreated: moment().unix(),
          dateCompleted: undefined
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          let nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            dateCompleted: todo.Completed ? moment().unix() : undefined
          }
        }
      });
    default:
      return state;
  }
}
