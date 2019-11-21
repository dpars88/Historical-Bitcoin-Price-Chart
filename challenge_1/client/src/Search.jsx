import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        Hello From Search
        <div>
          <form onSubmit={this.props.search}>
          <label>
            Search:
            <input type="text" value={this.props.value} onChange={this.props.change}/>
          </label>
          <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
};

export default Search;