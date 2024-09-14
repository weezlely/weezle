import PropTypes from "prop-types";
import Typography from "./typography";

Typography.propTypes = {
  as: PropTypes.oneOf(["span", "p"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"]),
  textAlign: PropTypes.oneOf(["center", "end", "justify", "left", "match-parent", "right", "start"]),
  color: PropTypes.string,
  bgColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

Typography.defaultProps = {
  as: "span",
  color: "black",
  bgColor: "transparent",
  size: "md",
  textAlign: "center",
};

export { default as Typography } from "./typography";
