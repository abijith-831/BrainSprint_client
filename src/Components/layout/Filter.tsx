'use client';
import React from 'react'
import TagMultiSelectPage from '../ui/multiselector2';

const Filter: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-2">
      {/* Search + Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto px-2">
        <input
          type="text"
          placeholder="Search Question..."
          className="flex-1 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Filter
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Sort
        </button>
      </div>

      {/* Tag Multi Select */}
      <div className="w-full md:w-auto px-2">
        <TagMultiSelectPage />
      </div>
    </div>
  );
};

export default Filter;
