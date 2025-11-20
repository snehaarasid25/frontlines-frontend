import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const EmptyState = ({ onReset }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        textAlign: "center",
        gap: 2,
        py: 8,
      }}
    >
      <SearchOffIcon
        sx={{ fontSize: 80, color: "text.disabled", opacity: 0.3 }}
      />
      <Typography variant="h5" fontWeight={600} gutterBottom>
        No Companies Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Try adjusting your filters or search terms
      </Typography>
      <Button variant="contained" onClick={onReset}>
        Reset Filters
      </Button>
    </Box>
  );
};

export default EmptyState;
