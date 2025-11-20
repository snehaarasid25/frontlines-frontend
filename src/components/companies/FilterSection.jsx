import React from "react";
import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Button,
  Box,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import { useCompanyContext } from "../../context/CompanyContext";

const FilterSection = () => {
  const { filters, filterOptions, updateFilter, resetFilters } =
    useCompanyContext();

  const handleFilterChange = (filterName) => (event) => {
    updateFilter(filterName, event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <Paper
      sx={{
        p: 3,
        mb: 4,
        background: "#FFFFFD",
        borderRadius: "12px",
        border: "1px solid rgba(94, 82, 64, 0.12)",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
      }}
    >
      <Grid container spacing={2.5}>
        {/* Search Field */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Search by Name"
            value={filters.search}
            onChange={handleFilterChange("search")}
            onKeyPress={handleKeyPress}
            placeholder="Search companies..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#626C71", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                background: "#FCFCF9",
                "& fieldset": {
                  borderColor: "rgba(94, 82, 64, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#21808D",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#21808D",
                  borderWidth: "2px",
                },
              },
              "& .MuiInputLabel-root": {
                fontSize: "13px",
                fontWeight: 500,
                color: "#13343B",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#21808D",
              },
            }}
          />
        </Grid>

        {/* Location Filter */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            select
            label="Location"
            value={filters.location}
            onChange={handleFilterChange("location")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: "#626C71", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                background: "#FCFCF9",
                "& fieldset": {
                  borderColor: "rgba(94, 82, 64, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#21808D",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#21808D",
                  borderWidth: "2px",
                },
              },
              "& .MuiInputLabel-root": {
                fontSize: "13px",
                fontWeight: 500,
                color: "#13343B",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#21808D",
              },
              "& .MuiSelect-select": {
                paddingLeft: "14px",
              },
            }}
          >
            <MenuItem value="">All Locations</MenuItem>
            {filterOptions.locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Industry Filter */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            select
            label="Industry"
            value={filters.industry}
            onChange={handleFilterChange("industry")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon sx={{ color: "#626C71", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                background: "#FCFCF9",
                "& fieldset": {
                  borderColor: "rgba(94, 82, 64, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#21808D",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#21808D",
                  borderWidth: "2px",
                },
              },
              "& .MuiInputLabel-root": {
                fontSize: "13px",
                fontWeight: 500,
                color: "#13343B",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#21808D",
              },
              "& .MuiSelect-select": {
                paddingLeft: "14px",
              },
            }}
          >
            <MenuItem value="">All Industries</MenuItem>
            {filterOptions.industries.map((industry) => (
              <MenuItem key={industry} value={industry}>
                {industry}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Company Size Filter */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            select
            label="Company Size"
            value={filters.size}
            onChange={handleFilterChange("size")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon sx={{ color: "#626C71", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                background: "#FCFCF9",
                "& fieldset": {
                  borderColor: "rgba(94, 82, 64, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#21808D",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#21808D",
                  borderWidth: "2px",
                },
              },
              "& .MuiInputLabel-root": {
                fontSize: "13px",
                fontWeight: 500,
                color: "#13343B",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#21808D",
              },
              "& .MuiSelect-select": {
                paddingLeft: "14px",
              },
            }}
          >
            <MenuItem value="">All Sizes</MenuItem>
            {filterOptions.sizes.map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap: 1.5, mt: 2.5 }}>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={resetFilters}
          sx={{
            padding: "6px 20px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500,
            background: "linear-gradient(135deg, #21808D, #1A6873)",
            transition: "all 0.2s",
            textTransform: "none",
            color: "white",
            "&:hover": {
              background: "#4494a0",
              border: "none",
              boxShadow: "0 4px 8px rgba(33, 128, 141, 0.3)",
            },
          }}
        >
          Reset Filters
        </Button>
      </Box>
    </Paper>
  );
};

export default FilterSection;
