import PropTypes from "prop-types";
import Accordion from "./accordion";

Accordion.Button.propTypes = {
  index: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Accordion.Item.propTypes = {
  index: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Accordion.Panel.propTypes = {
  index: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};
export { default as Accordion } from "./accordion";
