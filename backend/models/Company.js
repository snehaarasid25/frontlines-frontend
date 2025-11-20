const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      unique: true,
    },
    industry: {
      type: String,
      required: [true, "Industry is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    size: {
      type: String,
      required: [true, "Company size is required"],
      enum: [
        "1-50",
        "50-100",
        "100-250",
        "250-500",
        "500-1000",
        "1000-5000",
        "5000+",
      ],
    },
    founded: {
      type: Number,
      required: [true, "Founded year is required"],
      min: 1800,
      max: new Date().getFullYear(),
    },
    website: {
      type: String,
      required: [true, "Website is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: 500,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create indexes for better query performance
companySchema.index({ name: 1 });
companySchema.index({ industry: 1 });
companySchema.index({ location: 1 });

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
