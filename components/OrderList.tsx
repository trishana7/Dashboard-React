/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import Table, { TableData, TableHeader } from "@/components/Table";
import { getDashboardOrderList } from "../api/dashboardApi";
import { makeApiRequest } from "../api/apiHelper";

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ordersTableData, setOrdersTableData] = useState<TableData[]>([]);

  // Table headers
  const ordersTableHeaders: TableHeader[] = [
    { key: "id", label: "ID" },
    { key: "first_name", label: "Customer" },
    { key: "order_date", label: "Date", mode: "dateTime" },
    { key: "total_price", label: "Total" },
    { key: "payment_method", label: "Method" },
    { key: "status", label: "Status", mode: "status" },
  ];

  // Fetch order data
  const fetchOrderList = useCallback(() => {
    setIsLoading(true);
    makeApiRequest<TableData>(getDashboardOrderList())
      .then((response: any) => {
        setOrdersTableData(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchOrderList();
  }, [fetchOrderList]);

  return (
    <>
      <div className="bg-white mt-4 rounded-lg">
        <Table
          headers={ordersTableHeaders}
          records={ordersTableData}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default Dashboard;
