import React from "react";

const ChevronRightIcon = ({
  size = 24,
  className = "",
  onClick = () => {},
  ariaLabel = "Next",
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick();
    }
  };

  return (
    <svg
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={ariaLabel}
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

export default ChevronRightIcon;
