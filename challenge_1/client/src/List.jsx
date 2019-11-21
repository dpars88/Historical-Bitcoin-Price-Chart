import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    const list = this.props.page
    const listItems = list.map((item) =>
      <li key={item.date}>
        Year: {item.date}
        <br></br>
        Description: {item.description}
      </li>
    )
    return (
      <div>
        SEARCH RESULTS
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
};

export default List;