import PropTypes from "prop-types";
import Radio from "./radio";

Radio.Group.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Radio.Option.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  circleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { default as Radio } from "./radio";
