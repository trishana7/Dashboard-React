/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import Table, { TableData, TableHeader } from "@/components/Table";
import { getDashboardOrderList } from "../api/dashboardApi";
import { makeApiRequest } from "../api/apiHelper";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [baseData, setBaseData] = useState<TableData[]>([]);
  const [filteredData, setFilteredData] = useState<TableData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  // Table headers
  const ordersTableHeaders: TableHeader[] = [
    { key: "first_name", label: "Customer" },
    { key: "order_date", label: "Date", mode: "dateTime" },
    { key: "total_price", label: "Total" },
    { key: "payment_method", label: "Method" },
    { key: "status", label: "Status", mode: "status" },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const applyFilters = useCallback(() => {
    let data = baseData;

    if (searchQuery) {
      data = data.filter((item) =>
        item.first_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedStatus) {
      data = data.filter((item) => item.status === selectedStatus);
    }

    setTotalPages(Math.ceil(data.length / 10));
    setFilteredData(data.slice((currentPage - 1) * 10, currentPage * 10));
  }, [baseData, searchQuery, selectedStatus, currentPage]);

  const fetchOrderList = useCallback(() => {
    setIsLoading(true);

    makeApiRequest<TableData[]>(getDashboardOrderList())
      .then((response: any) => {
        if (response && Array.isArray(response)) {
          setBaseData(response);
          setTotalPages(Math.ceil(response.length / 10));
          setFilteredData(response.slice(0, 10));
        }
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSelect = (option: string) => {
    setSelectedStatus(option === "All Status" ? null : option);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    console.log(query, "query");
    setSearchQuery(query);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchOrderList();
  }, [fetchOrderList]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <div className="bg-white mt-4 rounded-lg">
      <div className="flex gap-4 p-3">
        <Dropdown
          options={[
            "All Status",
            "Completed",
            "Delivered",
            "Shipped",
            "Pending",
            "Cancelled",
          ]}
          placeholder="Status"
          onSelect={handleSelect}
        />
        <SearchBar onSearch={handleSearch} placeholder="Customer search..." />
      </div>
      <div className=" border border-b-gray-3=200">
        <Table
          headers={ordersTableHeaders}
          records={filteredData}
          isLoading={isLoading}
        />
      </div>
      <div className="py-2">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Dashboard;
