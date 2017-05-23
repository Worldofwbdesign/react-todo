let React = require('react');
let TodoList = require('TodoList');

let AppTodo = React.createClass({

  getInitialState() {
    return {
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

  render() {

    let { todos } = this.state;

    return (
      <div>
      <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = AppTodo;
