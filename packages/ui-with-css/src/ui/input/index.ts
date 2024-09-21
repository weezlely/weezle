import PropTypes from "prop-types";
import Input from "./input";

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { default as Input } from "./input";
