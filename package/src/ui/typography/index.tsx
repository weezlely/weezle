import PropTypes from "prop-types";
import Typography from "./typography";

Typography.defaultProps = {
  as: "span",
  color: "black",
  backgroundColor: "transparent",
  size: "md",
  textAlign: "center",
};

Typography.propTypes = {
  as: PropTypes.oneOf(["span", "p"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"]),
  textAlign: PropTypes.oneOf(["center", "end", "justify", "left", "match-parent", "right", "start"]),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export { default as Typography } from "./typography";
