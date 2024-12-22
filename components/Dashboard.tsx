import React, { useState } from "react";
import Icon from "./Icon";
import OrderList from "./OrderList";

interface CountryStatistic {
  value: string;
  country: string;
  percentage: string;
  status: "profit" | "loss";
}

const Profile: React.FC = () => {
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
      {/* Main Flex Wrapper */}
      <div className="flex flex-wrap lg:flex-nowrap w-full gap-4">
        {/* Total Sales & Costs */}
        <div className="w-full lg:w-[35%] bg-white rounded-lg h-[199px] py-5 flex justify-around items-center px-5 2xl:pl-20">
          <div className="flex items-center justify-center ">
            <Icon iconName="BusinessFinance" />
          </div>
          <div className="h-[139px] bg-gray-300 w-0.5"></div>
          <div>
            <p className="text-lg font-semibold text-gray-800">
              Total Sales & Costs
            </p>
            <p className="text-gray-400 text-sm font-medium">Last 7 days</p>
            <p className="text-gray-800 font-bold text-3xl mt-6">$350K</p>
            <div>
              <Icon iconName="ProgressArrow" />
              <span className="text-green-600 text-sm font-medium mx-2">
                8.56k
              </span>
              <span className="text-gray-400 text-sm font-medium mr-2">
                vs Last 7 days
              </span>
            </div>
          </div>
        </div>

        {/* Total Profit */}
        <div className="w-full lg:w-[25%] bg-white rounded-lg h-[199px] p-5">
          <div className="flex">
            <Icon iconName="Profit" />
            <div className="ml-4">
              <p className="text-lg font-semibold text-gray-800">
                Total Profit
              </p>
              <p className="text-gray-400 text-sm font-medium">Last 7 days</p>
            </div>
          </div>
          <p className="text-gray-800 font-bold text-4xl mt-6">50K</p>
          <div>
            <Icon iconName="ProgressArrow" />
            <span className="text-green-600 text-sm font-medium mx-2">12%</span>
            <span className="text-gray-400 text-sm font-medium mr-2">
              vs Last 7 days
            </span>
          </div>
        </div>

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
      <div>
        <OrderList />
      </div>
    </div>
  );
};

export default Profile;
