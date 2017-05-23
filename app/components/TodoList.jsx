let React = require('react');
let Todo = require('Todo');

let TodoList = React.createClass({

  render() {
    let { todos } = this.props;

    let renderTodoList = () => {
      return todos.map( (todo) => {
        return <Todo key={todo.id} {...todo}/>
      });
    };

    return (
      <div>
        {renderTodoList()}
      </div>
    )
  }

});

module.exports = TodoList;
