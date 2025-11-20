const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Company = require("../models/Company");

// Load environment variables
dotenv.config();

// Sample company data - 20 companies
const companies = [
  {
    name: "TechCorp Solutions",
    industry: "Technology",
    location: "San Francisco, CA",
    size: "500-1000",
    founded: 2015,
    website: "techcorp.com",
    description: "Leading provider of enterprise software solutions",
  },
  {
    name: "FinanceHub Inc",
    industry: "Finance",
    location: "New York, NY",
    size: "1000-5000",
    founded: 2010,
    website: "financehub.com",
    description: "Digital banking and financial services platform",
  },
  {
    name: "HealthFirst Medical",
    industry: "Healthcare",
    location: "Boston, MA",
    size: "250-500",
    founded: 2018,
    website: "healthfirst.com",
    description: "Telemedicine and healthcare technology",
  },
  {
    name: "EduLearn Platform",
    industry: "Education",
    location: "Austin, TX",
    size: "100-250",
    founded: 2020,
    website: "edulearn.com",
    description: "Online learning and education technology",
  },
  {
    name: "GreenEnergy Co",
    industry: "Energy",
    location: "Seattle, WA",
    size: "250-500",
    founded: 2016,
    website: "greenenergy.com",
    description: "Renewable energy solutions",
  },
  {
    name: "RetailMax",
    industry: "Retail",
    location: "Chicago, IL",
    size: "5000+",
    founded: 2005,
    website: "retailmax.com",
    description: "E-commerce and retail technology",
  },
  {
    name: "CloudSystems Pro",
    industry: "Technology",
    location: "San Francisco, CA",
    size: "250-500",
    founded: 2019,
    website: "cloudsystems.com",
    description: "Cloud infrastructure and DevOps",
  },
  {
    name: "MediaStream Inc",
    industry: "Media",
    location: "Los Angeles, CA",
    size: "500-1000",
    founded: 2014,
    website: "mediastream.com",
    description: "Digital media and streaming services",
  },
  {
    name: "AutoDrive Tech",
    industry: "Automotive",
    location: "Detroit, MI",
    size: "1000-5000",
    founded: 2012,
    website: "autodrive.com",
    description: "Autonomous vehicle technology",
  },
  {
    name: "FoodDelivery Plus",
    industry: "Food & Beverage",
    location: "Miami, FL",
    size: "250-500",
    founded: 2017,
    website: "fooddelivery.com",
    description: "Food delivery and restaurant technology",
  },
  {
    name: "DataAnalytics Pro",
    industry: "Technology",
    location: "Seattle, WA",
    size: "100-250",
    founded: 2021,
    website: "dataanalytics.com",
    description: "Business intelligence and analytics",
  },
  {
    name: "InsureTech Solutions",
    industry: "Finance",
    location: "Boston, MA",
    size: "500-1000",
    founded: 2013,
    website: "insuretech.com",
    description: "Insurance technology platform",
  },
  {
    name: "SportsFit Gear",
    industry: "Retail",
    location: "Portland, OR",
    size: "100-250",
    founded: 2019,
    website: "sportsfit.com",
    description: "Athletic wear and sports equipment",
  },
  {
    name: "SmartHome Innovations",
    industry: "Technology",
    location: "Austin, TX",
    size: "250-500",
    founded: 2018,
    website: "smarthome.com",
    description: "IoT and smart home devices",
  },
  {
    name: "BioPharm Research",
    industry: "Healthcare",
    location: "San Diego, CA",
    size: "500-1000",
    founded: 2011,
    website: "biopharm.com",
    description: "Pharmaceutical research and development",
  },
  {
    name: "TravelBooking Express",
    industry: "Travel",
    location: "Denver, CO",
    size: "250-500",
    founded: 2016,
    website: "travelbooking.com",
    description: "Travel booking and tourism platform",
  },
  {
    name: "CyberSecurity Shield",
    industry: "Technology",
    location: "Washington, DC",
    size: "500-1000",
    founded: 2015,
    website: "cybersecurity.com",
    description: "Cybersecurity and threat protection",
  },
  {
    name: "Fashion Forward",
    industry: "Retail",
    location: "New York, NY",
    size: "1000-5000",
    founded: 2008,
    website: "fashionforward.com",
    description: "Fashion e-commerce and design",
  },
  {
    name: "AgriTech Farms",
    industry: "Agriculture",
    location: "Des Moines, IA",
    size: "100-250",
    founded: 2020,
    website: "agritech.com",
    description: "Agricultural technology and farming solutions",
  },
  {
    name: "PropTech Realty",
    industry: "Real Estate",
    location: "Phoenix, AZ",
    size: "250-500",
    founded: 2017,
    website: "proptech.com",
    description: "Real estate technology platform",
  },
];

// Seed database function
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected");

    // Clear existing data
    await Company.deleteMany({});
    console.log("🗑️  Cleared existing companies");

    // Insert sample data
    const createdCompanies = await Company.insertMany(companies);
    console.log(`✅ Seeded ${createdCompanies.length} companies to database`);

    // Display success message
    console.log("\n🎉 Database seeded successfully!");
    console.log(`📊 Total companies: ${createdCompanies.length}`);

    // List all company names
    console.log("\n📋 Companies added:");
    createdCompanies.forEach((company, index) => {
      console.log(`   ${index + 1}. ${company.name} (${company.industry})`);
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error.message);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
