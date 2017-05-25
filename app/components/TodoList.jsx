let React = require('react');
let Todo = require('Todo');

let TodoList = React.createClass({

  render() {
    let { todos } = this.props;

    let renderTodoList = () => {
      return todos.map( (todo) => {
        return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
