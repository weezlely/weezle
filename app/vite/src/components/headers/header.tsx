import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC<{ isDarkMode: boolean; toggleTheme: () => void }> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <Link to="/" style={linkStyles}>
          @taeopia
        </Link>
      </div>
      <nav style={navStyles}>
        <Link to="/" style={linkStyles}>
          Home
        </Link>
        <Link to="Canvas" style={linkStyles}>
          Canvas
        </Link>
        <Link to="UI Library" style={linkStyles}>
          UI Library
        </Link>
      </nav>
      <div style={userActionsStyles}>
        <button style={buttonStyles} onClick={toggleTheme}>
          {isDarkMode ? "light" : "dark"}
        </button>
      </div>
    </header>
  );
};

// 스타일 정의
const headerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#282c34",
  height: "60px",
  position: "sticky",
  width: "100%",
  top: 0,
  padding: "0 8px",
  backdropFilter: "blur(1.875rem)",
};

const logoStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};

const navStyles: React.CSSProperties = {
  display: "flex",
  gap: "15px",
};

const linkStyles: React.CSSProperties = {
  color: "#282c34",
  textDecoration: "none",
  fontSize: "1rem",
};

const userActionsStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const buttonStyles: React.CSSProperties = {
  backgroundColor: "#61dafb",
  border: "none",
  padding: "8px 16px",
  fontSize: "1rem",
  cursor: "pointer",
  borderRadius: "4px",
  color: "#282c34",
};
