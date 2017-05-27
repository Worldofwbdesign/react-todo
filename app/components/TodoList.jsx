let React = require('react');
let Todo = require('Todo');

let TodoList = React.createClass({

  render() {
    let { todos } = this.props;

    let renderTodoList = () => {
      if (todos.length === 0) {
        return <span className='no-result'>Nothing to show</span>
      } else {
        return todos.map( (todo) => {
          return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        });
      }

    };

    return (
      <div className='container__list'>
        {renderTodoList()}
      </div>
    )
  }

});

module.exports = TodoList;
