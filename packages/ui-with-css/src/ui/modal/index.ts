import PropTypes from "prop-types";
import Modal from "./modal";

Modal.propTypes = {
  children: PropTypes.node,
};

Modal.Portal.propTypes = {
  modalId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Modal.Layout.propTypes = {
  dimmedStyle: PropTypes.object,
  layoutStyle: PropTypes.object,
  children: PropTypes.node,
};

Modal.Trigger.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

Modal.Header.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

Modal.Body.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

Modal.Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export { default as Modal } from "./modal";
