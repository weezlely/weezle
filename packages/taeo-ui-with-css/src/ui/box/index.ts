import Box from "./box";
import PropTypes from "prop-types";

Box.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { default as Box } from "./box";
