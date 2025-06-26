import React, { useState } from 'react';
import {
  FiFilter,
  FiChevronDown,
  FiSliders,
  FiCheckSquare,
} from 'react-icons/fi';
import { useFilterContext } from '../hooks/FilterContext';
import { FEATURES } from '../data/features';

const SORT_OPTIONS = [
  { label: 'A – Z', value: 'title-asc' },
  { label: 'Z – A', value: 'title-desc' },
  { label: 'Rating High–Low', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

const FilterToolbar = ({ totalResults }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const { filters, toggleFilter, changeSort } = useFilterContext();

  // 🔍 Dynamically collect all category + tool tags
  const allCategories = [...new Set(FEATURES.flatMap(item => item.category))];
  const allTools = [...new Set(FEATURES.flatMap(item => item.tools || []))];

  // 🧠 Derive format tags dynamically
  const FORMAT_OPTIONS = allCategories
    .filter((cat) =>
      FEATURES.some((item) => item.category.includes(cat))
    )
    .sort((a, b) => a.localeCompare(b));

  const TOOL_OPTIONS = allTools.sort((a, b) => a.localeCompare(b));

  const isChecked = (value) => filters.includes(value);

  const handleToggleDropdown = (type) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
    setShowSortMenu(false);
  };

  const renderDropdown = (type, options) => {
    if (activeDropdown !== type) return null;

    return (
      <div className="absolute left-0 mt-2 w-52 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded shadow-lg p-3 z-50 space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-200"
          >
            <span>{option}</span>
            <input
              type="checkbox"
              className="form-checkbox"
              checked={isChecked(option)}
              onChange={() => toggleFilter(option)}
            />
          </label>
        ))}
      </div>
    );
  };

  const renderSortMenu = () => {
    if (!showSortMenu) return null;

    return (
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded shadow-lg p-3 z-50 space-y-2">
        {SORT_OPTIONS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => {
              changeSort(value);
              setShowSortMenu(false);
            }}
            className="text-left text-sm w-full hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-white"
          >
            {label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="relative flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm text-gray-600 dark:text-gray-300">Filter by</span>

        {/* FORMAT FILTER */}
        <div className="relative">
          <button
            onClick={() => handleToggleDropdown('Format')}
            className="flex items-center gap-2 border border-gray-300 dark:border-white/10 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition text-sm font-medium text-gray-800 dark:text-white"
          >
            <FiSliders />
            Format
            <FiChevronDown className="text-xs" />
          </button>
          {renderDropdown('Format', FORMAT_OPTIONS)}
        </div>

        {/* TOOLS FILTER */}
        <div className="relative">
          <button
            onClick={() => handleToggleDropdown('Tools')}
            className="flex items-center gap-2 border border-gray-300 dark:border-white/10 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition text-sm font-medium text-gray-800 dark:text-white"
          >
            <FiCheckSquare />
            Tools
            <FiChevronDown className="text-xs" />
          </button>
          {renderDropdown('Tools', TOOL_OPTIONS)}
        </div>

        {/* RESULT COUNT */}
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
          {totalResults} Result{totalResults !== 1 && 's'}
        </span>
      </div>

      {/* SORT MENU */}
      <div className="relative">
        <button
          onClick={() => {
            setShowSortMenu((prev) => !prev);
            setActiveDropdown(null);
          }}
          className="flex items-center gap-2 border border-gray-300 dark:border-white/10 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition text-sm font-medium text-gray-800 dark:text-white"
        >
          <FiFilter className="rotate-90" />
          Sort by
          <FiChevronDown className="text-xs" />
        </button>
        {renderSortMenu()}
      </div>
    </div>
  );
};

export default FilterToolbar;
