const router = require("express").Router();
const savedBooksController = require("../../controllers/savedBooksController");

// Matches with "/api/books"
router.route("/")
  .get(savedBooksController.findAll)
  .post(savedBooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(savedBooksController.findById)
  .put(savedBooksController.update)
  .delete(savedBooksController.remove);

module.exports = router;
