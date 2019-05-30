const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
       /* {
            id: 1,
            name: 'Book1',
            count: 3,
            total: 150
        },
        {
            id: 2,
            name: 'Book2',
            count: 3,
            total: 150
        },
        {
            id: 3,
            name: 'Book3',
            count: 3,
            total: 150
        }*/
    ],
    orderTotal: 240
};
const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const newItem = {
                id: book.id,
                name: book.title,
                count: 1,
                total: book.price
            };
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newItem
                ]
            };
        default:
            return state;
    }
};

export default reducer;