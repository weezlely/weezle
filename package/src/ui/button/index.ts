import PropTypes from "prop-types";
import Button from "./button";

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "error"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  fontColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { default as Button } from "./button";
