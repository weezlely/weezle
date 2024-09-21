import PropTypes from "prop-types";
import Heading from "./heading";

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  style: PropTypes.object,
  children: PropTypes.node,
};

export { default as Heading } from "./heading";
