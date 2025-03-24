import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Pagination,
} from "@mui/material";
import { Sort as SortIcon, FilterList as FilterIcon } from "@mui/icons-material";

const AppfilterTable = ({ data: initialData, columns, itemsPerPage = 5 }) => {
  const [filteredData, setFilteredData] = useState(initialData);
  const [searchTexts, setSearchTexts] = useState(columns.map(() => ""));
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [page, setPage] = useState(1);

  // **Handle Sorting**
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      if (direction === "asc") return a[key] > b[key] ? 1 : -1;
      return a[key] < b[key] ? 1 : -1;
    });

    setFilteredData(sortedData);
  };

  // **Handle Search**
  const handleSearch = (text, index) => {
    const newSearchTexts = [...searchTexts];
    newSearchTexts[index] = text;
    setSearchTexts(newSearchTexts);
    filterData(newSearchTexts);
  };

  // **Filter Data**
  const filterData = (searchTexts) => {
    const newData = initialData.filter((item) =>
      columns.every((column, index) => {
        if (!searchTexts[index]) return true;
        return item[column.key].toString().toLowerCase().includes(searchTexts[index].toLowerCase());
      })
    );
    setFilteredData(newData);
  };

  // **Pagination Logic**
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const getTableHeader = () => {
    return (
      <TableHead>
          <TableRow sx={{ backgroundColor: "#6495ED" }}>
            {columns.map((column, index) => (
              <TableCell
              key={column.key}
              align={column.align || "left"}
              sx={{
                color: "#fff",
                fontWeight: "bold",
                minWidth: column.minWidth || "auto",
                height: "70px", // ✅ Ensure equal height for all headers
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: column.align || "left",
                  height: "100%",
                }}
              >
                {/* Column Title & Sort Button */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{column.columnName}</span>
                  {column.isSortRequired && (
                    <IconButton onClick={() => handleSort(column.key)} sx={{ color: "#fff" }}>
                      <SortIcon fontSize="small" />
                    </IconButton>
                  )}
                </div>

                {/* Search Input (Only If Required) */}
                {column.isSearchRequired ? (
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder={`Search ${column.columnName}`}
                    value={searchTexts[index]}
                    onChange={(e) => handleSearch(e.target.value, index)}
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      width: "100%",
                      marginTop: "5px",
                    }}
                  />
                ) : (
                  <div style={{ height: "36px" }} /> // ✅ Empty space for alignment
                )}
              </div>
            </TableCell>
            ))}
          </TableRow>
        </TableHead>
    );
  };
  const getTableBody = () => {
    return (
      <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.key} align={column.align || "left"}>
                  {column.tableCellRenderer ? (<span>{column.tableCellRenderer(row[column.key])}</span>):(row[column.key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
    );
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
      <Table>
        {getTableHeader()}
        {getTableBody()}        
      </Table>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}>
        <Pagination count={totalPages} page={page} onChange={(e, value) => setPage(value)} color="primary" />
      </div>
    </TableContainer>
  );
};

export default AppfilterTable;
