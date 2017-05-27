let React = require('react');
let TodoAPI = require('TodoAPI');

let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let uuid = require('node-uuid');
let moment = require('moment');

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
          text,
          dateCreated: moment().unix(),
          dateCompleted: undefined
        }
      ]
    })
  },

  handleToggle(id) {

    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
          todo.completed = !todo.completed;
          todo.dateCompleted = todo.completed ? moment().unix() : undefined;
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
      <div className='row'>
        <h1 className="page-title">Todo app</h1>
        <div className="column small-centered small-11 medium-6 large-4">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = AppTodo;
