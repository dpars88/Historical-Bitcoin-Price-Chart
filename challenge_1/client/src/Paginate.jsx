import React from 'react';
import ReactPaginate from 'react-paginate';

class Paginate extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        Hello From Paginate
        <div>
        <ReactPaginate
          previousLabel="previous"
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.props.last}
          marginPagesDisplayed={1}
          pageRangeDisplayed={0}
          onPageChange={this.props.pageClick}
          initialPage={1}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        </div>
      </div>
    )
  }
};

export default Paginate;