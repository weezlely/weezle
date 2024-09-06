import PropTypes from "prop-types";
import Spacing from "./spacing";

Spacing.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  style: PropTypes.object,
  children: PropTypes.node,
};

export { default as Spacing } from "./spacing";
