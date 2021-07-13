// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './textArea.scss';

// == Composant
const TextArea = ({
  value,
  manageChange,
}) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, value);
  };
  return (
    <div>
      <textarea
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id="msg"
        type="text"
        className="textarea-field"
        placeholder="message"

      />
    </div>
  );
};

TextArea.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */

  manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
TextArea.defaultProps = {
  value: '',
};

// == Export
export default TextArea;
