import React from "react";

interface HomeFooterProps {}

export const HomeFooter = (props: HomeFooterProps) => {
  return (
    <footer className="footer__main">
      <h4>© {new Date().getFullYear()} TAEOPIA. All rights reserved</h4>
    </footer>
  );
};
