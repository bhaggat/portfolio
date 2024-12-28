import React, { useState } from "react";
import "./TooltipWrapper.css"; // Include your CSS for styling

const TooltipWrapper = ({ children, tooltipText, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className={`tooltip-box tooltip-${position}`}>{tooltipText}</div>
      )}
    </div>
  );
};

export default TooltipWrapper;
