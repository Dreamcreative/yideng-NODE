const router = require("koa-simple-router");
const IndexController = require("./IndexController")
const indexController = new IndexController();
const BooksController = require("./BooksController")
const booksController = new BooksController();
const controllersInit = app => {
  app.use(
    router(_ => {
      _.get("/", indexController.actionIndex);
      _.get("/books/list",booksController.actionIndex);
      _.get("/books/create", booksController.actionCreate);
      _.get("/layout", indexController.layout);
    })
  );
};
module.exports = controllersInit;
