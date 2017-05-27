let React = require('react');
let moment = require('moment');

let Todo = React.createClass({

  render() {
    let { id, text, completed, dateCreated, dateCompleted } = this.props;
    let completedClass = completed ? 'todo todo_completed' : 'todo';

    let renderDate = () => {
      let message = 'Created ';
      var timeStamp = dateCreated;

      if (completed) {
        message = 'Completed ';
        timeStamp = dateCompleted;
      }

      return message + moment.unix(timeStamp).format('MMMM Do YYYY, h:mm:ss a');
    };

    return (
      <div className={completedClass} onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        <div>
          <span>
            {text}
          </span>
          <span className='todo__date'>
            { renderDate() }
          </span>
        </div>

      </div>
    )
  }

});

module.exports = Todo;
