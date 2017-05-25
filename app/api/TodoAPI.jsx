let $ = require('jquery');

module.exports = {

  setTodos(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos() {
    let todosString = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(todosString);
    } catch (e) {
      console.log('error parsing todos from localStorage' + e);
    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })
    .filter((todo) => {
      if (searchText.length === 0) {
        return true;
      } else {
        return todo.text.toLowerCase().indexOf(searchText) !== -1;
      }
    })
    .sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }

}
