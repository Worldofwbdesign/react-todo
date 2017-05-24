let React = require('react');
let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');

let AppTodo = React.createClass({

  getInitialState() {
    return {
      textSearch: '',
      showCompleted: false,
      todos: [
        {
          id: 1,
          text: 'Walk with dog'
        }, {
          id: 2,
          text: 'Feed the cat'
        }, {
          id: 3,
          text: 'Read book'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ]
    }
  },

  handleAddTodo(text) {
    alert('Trying add ' + text)
  },

  handleSearch(textSearch, showCompleted) {
    alert(textSearch, showCompleted);
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
