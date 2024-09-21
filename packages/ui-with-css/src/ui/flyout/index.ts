import PropTypes from "prop-types";

import Flyout from "./flyout";
import * as styles from "./styles.css"; // Styles

Flyout.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Flyout.Overlay.propTypes = {
  zIndex: PropTypes.number.isRequired,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Flyout.Toggle.prototype = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Flyout.List.prototype = {
  position: PropTypes.oneOf(Object.keys(styles.positionVariants)),
  direction: PropTypes.oneOf(Object.keys(styles.directionVariants)),
  backgroundColor: PropTypes.string,
  w: PropTypes.number,
  h: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Flyout.Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string]),
  color: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { default as Flyout } from "./flyout";
