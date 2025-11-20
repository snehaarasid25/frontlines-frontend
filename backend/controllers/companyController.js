const Company = require("../models/Company");

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find({}).sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: companies.length,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllCompanies,
};
