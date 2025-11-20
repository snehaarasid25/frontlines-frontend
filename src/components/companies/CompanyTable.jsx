import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { useCompanyContext } from "../../context/CompanyContext";

const CompanyTable = () => {
  const { paginatedCompanies } = useCompanyContext();

  const getInitials = (name) => name.charAt(0).toUpperCase();

  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "#FFFFFD",
        borderRadius: "12px",
        border: "1px solid rgba(94, 82, 64, 0.12)",
        overflow: "hidden",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ background: "rgba(94, 82, 64, 0.12)" }}>
            {["Company", "Industry", "Location", "Size", "Founded"].map(
              (label) => (
                <TableCell
                  key={label}
                  sx={{
                    fontWeight: 600,
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "#13343B",
                    borderBottom: "2px solid rgba(94, 82, 64, 0.2)",
                    padding: "16px",
                  }}
                >
                  {label}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedCompanies.map((company) => (
            <TableRow
              key={company.id}
              sx={{
                transition: "background 0.2s",
                cursor: "pointer",
                "&:hover": { background: "rgba(94, 82, 64, 0.12)" },
              }}
            >
              <TableCell
                sx={{
                  borderBottom: "1px solid rgba(94, 82, 64, 0.2)",
                  padding: "16px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "6px",
                      background: "linear-gradient(135deg, #21808D, #1A6873)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "white",
                      fontSize: "16px",
                    }}
                  >
                    {getInitials(company.name)}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#13343B",
                    }}
                  >
                    {company.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid rgba(94, 82, 64, 0.2)",
                  padding: "16px",
                }}
              >
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
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid rgba(94, 82, 64, 0.2)",
                  padding: "16px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "#13343B" }}
                >
                  {company.location}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid rgba(94, 82, 64, 0.2)",
                  padding: "16px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "#13343B" }}
                >
                  {company.size}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid rgba(94, 82, 64, 0.2)",
                  padding: "16px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "#13343B" }}
                >
                  {company.founded}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompanyTable;
