let React = require('react');
let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let uuid = require('node-uuid');

let AppTodo = React.createClass({

  getInitialState() {
    return {
      textSearch: '',
      showCompleted: false,
      todos: [
        {
          id: uuid(),
          text: 'Walk with dog',
          completed: true
        }, {
          id: uuid(),
          text: 'Feed the cat',
          completed: false
        }, {
          id: uuid(),
          text: 'Read book',
          completed: true
        }, {
          id: uuid(),
          text: 'Play video games',
          completed: false
        }
      ]
    }
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

    let { todos } = this.state;

    return (
      <div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={todos} onToggle={this.handleToggle}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = AppTodo;
