import PropTypes from "prop-types";
import Flex from "./flex";

Flex.propTypes = {
  id: PropTypes.string,
  dir: PropTypes.oneOf(["row", "column"]),
  align: PropTypes.oneOf(["flex-start", "flex-end", "center", "baseline", "stretch"]),
  justify: PropTypes.oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]),
  gap: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node,
};

export { default as Flex } from "./flex";
