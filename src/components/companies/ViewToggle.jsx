import React from "react";
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { useCompanyContext } from "../../context/CompanyContext";
import { VIEW_MODES } from "../../utils/constants";

const ViewToggle = () => {
  const { currentView, changeView, totalCompanies } = useCompanyContext();

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      changeView(newView);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Typography variant="body1" color="text.secondary">
        Showing {totalCompanies}{" "}
        {totalCompanies === 1 ? "company" : "companies"}
      </Typography>

      <ToggleButtonGroup
        value={currentView}
        exclusive
        onChange={handleViewChange}
        aria-label="view mode"
        size="small"
      >
        <ToggleButton value={VIEW_MODES.CARD} aria-label="card view">
          <GridViewIcon sx={{ mr: 1 }} />
          Cards
        </ToggleButton>
        <ToggleButton value={VIEW_MODES.TABLE} aria-label="table view">
          <TableRowsIcon sx={{ mr: 1 }} />
          Table
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ViewToggle;
