import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const CompanyCard = ({ company }) => {
  const getInitials = (name) => name.charAt(0).toUpperCase();

  return (
    <Card
      sx={{
        height: "320px",
        width: "100%",
        minWidth: "320px",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFD",
        border: "1px solid rgba(94, 82, 64, 0.12)",
        borderRadius: "12px",
        padding: "24px",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 6px -1px #21808D, 0 2px 4px -1px #7ad1dcff",
        },
      }}
    >
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 }, flexGrow: 1 }}>
        {/* header */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #21808D, #1A6873)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 700,
              color: "white",
              flexShrink: 0,
            }}
          >
            {getInitials(company.name)}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                mb: 0.5,
                color: "#13343B",
              }}
            >
              {company.name}
            </Typography>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                padding: "4px 12px",
                background: "rgba(94, 82, 64, 0.12)",
                borderRadius: "12px",
                fontSize: "12px",
                color: "#21808D",
                fontWeight: 500,
              }}
            >
              {company.industry}
            </Box>
          </Box>
        </Box>

        {/* company details */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
            pt: 2,
            borderTop: "1px solid rgba(94, 82, 64, 0.2)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <span style={{ fontSize: "16px", opacity: 0.7 }}>📍</span>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#626C71" }}
            >
              {company.location}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <span style={{ fontSize: "16px", opacity: 0.7 }}>👥</span>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#626C71" }}
            >
              {company.size} employees
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <span style={{ fontSize: "16px", opacity: 0.7 }}>📅</span>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#626C71" }}
            >
              Founded {company.founded}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <span style={{ fontSize: "16px", opacity: 0.7 }}>🌐</span>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#626C71" }}
            >
              {company.website}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
