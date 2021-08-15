const express = require("express");
const router = express.Router();

//Get index page
router.get('/', (req, res) => {
    res.render("login")
});

module.exports = router;