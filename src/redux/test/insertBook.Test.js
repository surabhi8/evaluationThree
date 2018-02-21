const insertBook = require('../../redux/reducers/insertBook');

const savedBookArray = [
];
describe('Testing the reducer function', () => {
  test('AllbooksArray function should return promise', () => {
    const payload = {
    };
    expect(insertBook(payload)).toEqual(savedBookArray);
  });
  test('AllbooksArray function should return promise', () => {
    const payload = {
      author: 'Hello',
      name: 'dwarf',
      rating: '4.4',
      bookId: '10',
    };
    expect(insertBook(payload).length === 1).toBe(true);
  });
});
