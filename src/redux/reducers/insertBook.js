const initialState = {
  savedBooks: [],
};
const insertBook = (state = initialState, action) => {
  switch (action.type) {
    case 'INSERTBOOK': {
      return {
        savedBooks: [...state.savedBooks,
          {
            author: action.payload.author,
            name: action.payload.name,
            bookId: action.payload.bookId,
            Likes: action.payload.Likes,
            rating: action.payload.rating,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default insertBook;

