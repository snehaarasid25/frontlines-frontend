// src/components/layout/PageContainer.jsx
import React from "react";
import { Container } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {children}
    </Container>
  );
};

export default PageContainer;
