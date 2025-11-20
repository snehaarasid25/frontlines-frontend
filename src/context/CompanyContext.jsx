import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { fetchCompanies } from "../services/companyService";
import {
  ITEMS_PER_PAGE_CARD,
  ITEMS_PER_PAGE_TABLE,
  VIEW_MODES,
} from "../utils/constants";

// Create Context
const CompanyContext = createContext();

// Custom hook to use the context
export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompanyContext must be used within CompanyProvider");
  }
  return context;
};

// Helper functions to get unique values
const getUniqueLocations = (companies) => {
  return [...new Set(companies.map((c) => c.location))].sort();
};

const getUniqueIndustries = (companies) => {
  return [...new Set(companies.map((c) => c.industry))].sort();
};

const getUniqueSizes = (companies) => {
  return [...new Set(companies.map((c) => c.size))].sort();
};

// Provider Component
export const CompanyProvider = ({ children }) => {
  // State Management
  const [allCompanies, setAllCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // View state
  const [currentView, setCurrentView] = useState(VIEW_MODES.CARD);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_CARD);

  // Filter state
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    industry: "",
    size: "",
  });

  // Filter options
  const [filterOptions, setFilterOptions] = useState({
    locations: [],
    industries: [],
    sizes: [],
  });

  // Load companies on mount
  useEffect(() => {
    loadCompanies();
  }, []);

  // Update items per page when view changes
  useEffect(() => {
    if (currentView === VIEW_MODES.CARD) {
      setItemsPerPage(ITEMS_PER_PAGE_CARD);
    } else {
      setItemsPerPage(ITEMS_PER_PAGE_TABLE);
    }
    setCurrentPage(1); // Reset to first page when view changes
  }, [currentView]);

  // Apply filters whenever filters or allCompanies change
  useEffect(() => {
    applyFilters();
  }, [filters, allCompanies]);

  /**
   * Load companies from API
   */
  const loadCompanies = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchCompanies();

      const companiesArray = Array.isArray(data) ? data : [];

      setAllCompanies(companiesArray);
      setFilteredCompanies(companiesArray);

      // Set filter options
      setFilterOptions({
        locations: getUniqueLocations(companiesArray),
        industries: getUniqueIndustries(companiesArray),
        sizes: getUniqueSizes(companiesArray),
      });
    } catch (err) {
      setError(err.message || "Failed to load companies");
      console.error("Error loading companies:", err);

      // ✅ FIX: Set empty arrays on error
      setAllCompanies([]);
      setFilteredCompanies([]);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Apply filters to companies
   */
  const applyFilters = useCallback(() => {
    // ✅ FIX: Ensure allCompanies is an array before filtering
    if (!Array.isArray(allCompanies)) {
      setFilteredCompanies([]);
      return;
    }

    let filtered = [...allCompanies];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (company) =>
          company.name.toLowerCase().includes(searchLower) ||
          company.description?.toLowerCase().includes(searchLower)
      );
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(
        (company) => company.location === filters.location
      );
    }

    // Industry filter
    if (filters.industry) {
      filtered = filtered.filter(
        (company) => company.industry === filters.industry
      );
    }

    // Size filter
    if (filters.size) {
      filtered = filtered.filter((company) => company.size === filters.size);
    }

    setFilteredCompanies(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, allCompanies]);

  /**
   * Update a specific filter
   */
  const updateFilter = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  /**
   * Reset all filters
   */
  const resetFilters = () => {
    setFilters({
      search: "",
      location: "",
      industry: "",
      size: "",
    });
    setFilteredCompanies(allCompanies);
    setCurrentPage(1);
  };

  /**
   * Change view mode
   */
  const changeView = (view) => {
    setCurrentView(view);
  };

  /**
   * Change page
   */
  const changePage = (page) => {
    const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /**
   * Get paginated companies
   */
  const getPaginatedCompanies = () => {
    // ✅ FIX: Ensure filteredCompanies is an array before slicing
    if (!Array.isArray(filteredCompanies)) {
      return [];
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredCompanies.slice(start, end);
  };

  /**
   * Get total pages
   */
  const getTotalPages = () => {
    // ✅ FIX: Ensure filteredCompanies is an array
    if (!Array.isArray(filteredCompanies)) {
      return 0;
    }
    return Math.ceil(filteredCompanies.length / itemsPerPage);
  };

  // Context value
  const value = {
    // State
    allCompanies,
    filteredCompanies,
    loading,
    error,
    currentView,
    currentPage,
    itemsPerPage,
    filters,
    filterOptions,

    // Computed values
    paginatedCompanies: getPaginatedCompanies(),
    totalPages: getTotalPages(),
    totalCompanies: Array.isArray(filteredCompanies)
      ? filteredCompanies.length
      : 0,

    // Actions
    loadCompanies,
    updateFilter,
    resetFilters,
    changeView,
    changePage,
  };

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};

export default CompanyContext;
