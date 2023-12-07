const {
  listAllBooks,
  postBook,
  bookDetail,
  modifyBook,
  removeBook,
} = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: listAllBooks,
  },
  {
    method: "POST",
    path: "/books",
    handler: postBook,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: bookDetail,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: modifyBook,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: removeBook,
  },
];

module.exports = routes;
