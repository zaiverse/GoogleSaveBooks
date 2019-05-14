const router = require("express").Router();
const bookRoutes = require("./books");
const savedBooks = require("./savedBooks");

// Book routes
router.use("/books", bookRoutes);
router.use("/savedBooks", savedBooks);

module.exports = router;
