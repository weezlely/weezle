import PropTypes from "prop-types";
import CheckBox from "./checkbox";

CheckBox.Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

CheckBox.Check.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  checkColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

CheckBox.Text.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { default as Checkbox } from "./checkbox";
