import React, { useMemo } from "react";
import Icon from "./Icon";
import { getDateTime } from "@/utils/dateTimeUtils";

export interface TableHeader {
  key: string;
  label: string;
  mode?: "status" | "dateTime";
}

export interface TableData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface TableProps {
  headers: TableHeader[];
  records: TableData[];
  tableName?: string;
  isLoading?: boolean;
  tableId?: string;
}

const Table: React.FC<TableProps> = ({
  headers,
  records,
  tableName = "",
  isLoading = true,
  tableId = "",
}) => {
  const loadingRows = useMemo(() => {
    const numberOfLoadingRows = 10;
    return Array.from({ length: numberOfLoadingRows }, (_, i) => ({
      id: `loading_${i}`,
    }));
  }, []);

  return (
    <div>
      <table
        id={tableId}
        className={`h-12 w-full whitespace-nowrap relative overflow-auto`}
      >
        {tableName && (
          <caption className={`text-left font-bold text-xl`}>
            {tableName}
          </caption>
        )}
        <thead>
          <tr className="bg-gray-400 rounded-tl-lg rounded-tr-lg">
            {headers.map((header) => (
              <th key={header.key} className={`px-5 h-10`}>
                <div className="text-13px uppercase text-white text-left font-medium">
                  {header.label}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`divide-y divide-gray-5 bg-white`}>
          {isLoading ? (
            <>
              {loadingRows.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b border-gray-200 animate-pulse"
                >
                  {headers.map((header) => (
                    <td key={header.key} className="p-3.5">
                      <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ) : records.length ? (
            records.map((item, index) => (
              <tr key={index} className={`hover:bg-gray-50 h-12`}>
                {headers.map((header) => (
                  <td key={header.key} className={`px-5 overflow-hidden`}>
                    <div className="text-[15px] text-gray-600">
                      {header.mode == "status" ? (
                        <div>
                          <p
                            className={`${
                              item[header.key] === "Completed"
                                ? "text-green-500"
                                : item[header.key] === "Shipped"
                                ? "text-blue-500"
                                : item[header.key] === "Cancelled"
                                ? "text-red-500"
                                : item[header.key] === "Delivered"
                                ? "text-orange-500"
                                : "text-yellow-600"
                            } font-semibold`}
                          >
                            {item[header.key]}
                          </p>
                        </div>
                      ) : header.mode == "dateTime" ? (
                        <p>
                          {item[header.key]
                            ? getDateTime(item[header.key])
                            : "-"}
                        </p>
                      ) : (
                        <span>{item[header.key] || "-"}</span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>
                <div className="flex flex-col items-center justify-center h-80">
                  <Icon iconName="NoData" />
                  <div className="text-sm text-gray-4 mt-4">No data found.</div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
