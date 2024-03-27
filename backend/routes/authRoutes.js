const express = require("express");
const router = express.Router();

const { authenticateToken } = require("../middleware/authmiddleware");

const authentication = require("../controllers/authentication");

router.post("/signup", authentication.signup);
router.post("/signin", authentication.signin);

module.exports = router;
