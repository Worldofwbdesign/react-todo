let React = require('react');

let Todo = React.createClass({

  render() {
    let { id, text, completed } = this.props;

    return (
      <div onClick={() => {
        this.props.onToggle(id);  
      }}>
        <input type="checkbox" checked={completed}/>
        <span>
          {text}
        </span>
      </div>
    )
  }

});

module.exports = Todo;
