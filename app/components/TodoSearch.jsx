const React = require('react');

let TodoSearch = React.createClass({

  handleChange() {
    let textSearch    = this.refs.textSearch.value,
        showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(textSearch, showCompleted);
  },

  render() {
    return (
      <div className='container__search'>
        <div>
          <input type="search" ref="textSearch" placeholder="Search todos" onChange={this.handleChange}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleChange}/>
            <span>Show completed todos</span>
          </label>

        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
