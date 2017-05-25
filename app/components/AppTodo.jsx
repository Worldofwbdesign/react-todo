let React = require('react');
let TodoAPI = require('TodoAPI');

let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let uuid = require('node-uuid');

let AppTodo = React.createClass({

  getInitialState() {
    return {
      textSearch: '',
      showCompleted: false,
      todos: TodoAPI.getTodos()
    }
  },

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text
        }
      ]
    })
  },

  handleToggle(id) {

    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
          todo.completed = !todo.completed;
      }
      return todo
    });

    this.setState({ todos: updatedTodos });
  },

  handleSearch(textSearch, showCompleted) {
    this.setState({
      textSearch: textSearch.toLowerCase(),
      showCompleted
    })
  },

  render() {

    let { todos, showCompleted, textSearch  } = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, textSearch);

    return (
      <div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = AppTodo;
