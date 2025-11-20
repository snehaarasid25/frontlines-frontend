import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        borderBottom: "1px solid",
        borderColor: "rgba(94, 82, 64, 0.2)",
        mb: 5,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          mb: 1,
          fontSize: { xs: "24px", md: "32px" },
          color: "var(--color-text, #13343B)",
        }}
      >
        🏢 Companies Directory
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "var(--color-text-secondary, #626C71)",
          fontSize: "16px",
        }}
      >
        Discover and explore leading companies across industries
      </Typography>
    </Box>
  );
};

export default Header;
