const React = require('react');

let AddTodo = React.createClass({

  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },

  handleSubmit(e) {
    e.preventDefault();
    let text = this.refs.todo.value;

    if (text.length > 0) {
      this.refs.todo.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.todo.focus();
    }
  },

  render() {
    return (
      <div className='container__footer'>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What do you need to do?" ref="todo"/>
          <button className="button primary expanded">Add todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
