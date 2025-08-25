"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calender = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today));

  // Get first day of the month
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // Calculate blank days before start
  const blanks = Array(firstDay.getDay()).fill(null);

  // All days in current month
  const days = Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);

  // Go to prev/next month
  const prevMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  return (
    <div className="mx-auto mt-6 max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-lg dark:bg-gray-900">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={nextMonth}
          className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="mt-2 grid grid-cols-7 gap-2 text-center">
        {blanks.map((_, i) => (
          <div key={`blank-${i}`} />
        ))}
        {days.map((day) => {
          const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

          return (
            <div
              key={day}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all
                ${
                  isToday
                    ? "bg-blue-500 text-white shadow-lg hover:bg-blue-600"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calender;
