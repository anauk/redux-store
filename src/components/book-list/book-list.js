import React, {Component} from 'react';
import BookListItem from '../book-list-tem';
import {connect} from 'react-redux';

import {withBookstoreService} from '../hoc';
import {bookAddedToCart, fetchBooks} from "../../actions";
import {compose} from '../../utils';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                onAddedToCart={()=>onAddedToCart(book.id)}
                                book={book}/></li>
                    )
                })
            }
        </ul>
    );
};

class BookListContainer extends Component {

    componentDidMount() {
        //1.receive data
        // const {
        //     bookstoreService,
        //     booksLoaded,
        //     booksRequested,
        //     booksError
        // } = this.props;
        // booksRequested();
        //const data = bookstoreService.getBooks();
        //console.log(data);
        //2.dispacth action to store
        //this.props.booksLoaded(data);
        // bookstoreService.getBooks()
        //     .then((data) => booksLoaded(data))
        //     .catch(error=> booksError(error));
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return "loading";
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return <BookList
            onAddedToCart={onAddedToCart}
            books={books} />

    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    //const {bookstoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => {
            dispatch(bookAddedToCart(id));
        }
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))
(BookListContainer);