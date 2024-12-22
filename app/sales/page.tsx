"use client";
import React, { useState } from "react";
import Icon from "@/components/Icon";
import Header from "@/components/Header";

interface CountryStatistic {
  value: string;
  country: string;
  percentage: string;
  status: "profit" | "loss";
}

const Sales: React.FC = () => {
  const [countryStatistics] = useState<CountryStatistic[]>([
    {
      value: "30k",
      country: "United States",
      percentage: "25.8%",
      status: "profit",
    },
    {
      value: "26k",
      country: "Brazil",
      percentage: "16.2%",
      status: "loss",
    },
    {
      value: "17k",
      country: "Australia",
      percentage: "11.9%",
      status: "loss",
    },
  ]);

  return (
    <div>
      <Header headingLevel="h1" text="Sales" />
      {/* Main Flex Wrapper */}
      <div className="my-4">
        {/* Country Statistics */}
        <div className="w-full lg:w-[40%] bg-white rounded-lg h-[199px] p-5">
          {countryStatistics.map((countryStatistic, index) => (
            <div
              key={index}
              className="flex items-center justify-center mb-2 gap-5"
            >
              <div className="flex">
                <div className="ml-2 mr-4">
                  <p className="text-lg font-semibold text-gray-800">
                    {countryStatistic.value}
                  </p>
                  <p className="text-gray-400 text-sm font-medium whitespace-nowrap w-20">
                    {countryStatistic.country}
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 max-w-sm mx-auto rounded-lg overflow-hidden border border-gray-80000">
                <div
                  className="bg-blue-600 text-xs leading-none py-1 rounded-full"
                  style={{ width: countryStatistic.percentage }}
                ></div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <div
                  className={
                    countryStatistic.status === "loss" ? "rotate-180" : ""
                  }
                >
                  <Icon
                    iconName="Arrow"
                    svgFill={
                      countryStatistic.status === "profit"
                        ? "stroke-green-600"
                        : "stroke-red-500"
                    }
                  />
                </div>
                <span
                  className={`text-sm font-medium ${
                    countryStatistic.status === "loss"
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {countryStatistic.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
