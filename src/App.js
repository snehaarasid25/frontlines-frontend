import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from "@mui/material";
import { CompanyProvider, useCompanyContext } from "./context/CompanyContext";
import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";
import FilterSection from "./components/companies/FilterSection";
import ViewToggle from "./components/companies/ViewToggle";
import CompanyCard from "./components/companies/CompanyCard";
import CompanyTable from "./components/companies/CompanyTable";
import LoadingSpinner from "./components/common/LoadingSpinner";
import EmptyState from "./components/common/EmptyState";
import Pagination from "./components/common/Pagination";
import { Grid } from "@mui/material";
import { VIEW_MODES } from "./utils/constants";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A6873",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "sans-serif",
    ].join(","),
  },
});

const CompanyList = () => {
  const {
    loading,
    currentView,
    paginatedCompanies,
    totalCompanies,
    resetFilters,
  } = useCompanyContext();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (totalCompanies === 0) {
    return <EmptyState onReset={resetFilters} />;
  }

  if (currentView === VIEW_MODES.CARD) {
    return (
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4 }, // Equal padding left and right
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "start",
            mx: "auto",
          }}
        >
          {paginatedCompanies.map((company) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={company._id || company.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CompanyCard company={company} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return <CompanyTable />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CompanyProvider>
        <PageContainer>
          <Header />
          <FilterSection />
          <ViewToggle />
          <CompanyList />
          <Pagination />
        </PageContainer>
      </CompanyProvider>
    </ThemeProvider>
  );
}

export default App;
