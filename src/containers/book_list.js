import React, { Component } from 'React';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book) }
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps({ books }) {
  return { books };
}

// anything returned from this function will end up as props on the bookslist
// container
function mapDispatchToProps(dispatch) {
  // when ever select book is call the result should be passed to all our
  // reducers

  return bindActionCreators({ selectBook }, dispatch);
}

// promote booklist from a component to a container - it needs to know about theis new
// disapatch method selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
