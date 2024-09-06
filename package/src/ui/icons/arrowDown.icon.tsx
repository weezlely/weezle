import * as React from "react";

export interface ArrowDownIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ width = 20, height = 20, color = "#242629", className, style, onClick }) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.46875 7.52941L4.52941 6.46875L9.99908 11.9384L15.4688 6.46875L16.5294 7.52941L9.99908 14.0597L3.46875 7.52941Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default ArrowDownIcon;
