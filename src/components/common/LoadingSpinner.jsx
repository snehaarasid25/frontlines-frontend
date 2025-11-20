import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

// Animation for the bouncing dots
const bounce = keyframes`
  0%, 80%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  40% {
    transform: translateY(-20px);
    opacity: 1;
  }
`;

const LoadingSpinner = ({ message = "Loading companies..." }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        gap: 3,
      }}
    >
      {/* Three Dots Animation */}
      <Box
        sx={{
          display: "flex",
          gap: 1.3,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "13px",
            height: "13px",
            borderRadius: "50%",
            backgroundColor: "#1A6873",
            animation: `${bounce} 1.4s infinite ease-in-out`,
            animationDelay: "0s",
          }}
        />
        <Box
          sx={{
            width: "13px",
            height: "13px",
            borderRadius: "50%",
            backgroundColor: "#1A6873",
            animation: `${bounce} 1.4s infinite ease-in-out`,
            animationDelay: "0.2s",
          }}
        />
        <Box
          sx={{
            width: "13px",
            height: "13px",
            borderRadius: "50%",
            backgroundColor: "#1A6873",
            animation: `${bounce} 1.4s infinite ease-in-out`,
            animationDelay: "0.4s",
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: "#626C71",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
