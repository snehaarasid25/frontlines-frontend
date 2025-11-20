const express = require("express");
const router = express.Router();
const { getAllCompanies } = require("../controllers/companyController");

// Routes for /api/companies
router.route("/").get(getAllCompanies);

router.route("/:id");

module.exports = router;
