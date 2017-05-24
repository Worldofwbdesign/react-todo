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
          text: 'Walk with dog'
        }, {
          id: uuid(),
          text: 'Feed the cat'
        }, {
          id: uuid(),
          text: 'Read book'
        }, {
          id: uuid(),
          text: 'Play video games'
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
      <TodoList todos={todos}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = AppTodo;
