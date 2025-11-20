import React from "react";
import {
  Box,
  Pagination as MuiPagination,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useCompanyContext } from "../../context/CompanyContext";

const Pagination = () => {
  const { currentPage, totalPages, changePage, totalCompanies, itemsPerPage } =
    useCompanyContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (totalPages <= 1) return null;

  // Fix: Calculate start and end items correctly
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalCompanies);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        mt: 4,
        py: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Showing {startItem}-{endItem} of {totalCompanies} companies
      </Typography>

      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => changePage(value)}
        color="primary"
        size={isMobile ? "small" : "medium"}
        showFirstButton
        showLastButton
        siblingCount={isMobile ? 0 : 1}
      />
    </Box>
  );
};

export default Pagination;
