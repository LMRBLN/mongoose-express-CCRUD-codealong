const Book = require("../models/Book.model");

const router = require("express").Router();

router.get("/books", (req, res, next) => {

  Book.find()
  .then( (booksFromDB) => {
    console.log("query to DB worked...", booksFromDB.length);

    const data = {
      booksArr: booksFromDB
    }

    /*  const data = {
      booksFromDB: booksFromDB;
    }
    const data = {
      booksFromDB
    } 
    */

    res.render("books/books-list", data)
  }
  )
  .catch( (error) => {
    console.log("error getting data from DB", error);
    next(error);
  })


/*   res.send("display list of books") */

});

module.exports = router;
