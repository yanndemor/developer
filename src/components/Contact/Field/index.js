// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';

// == Composant
const Field = ({
  value,
  name,
  type,
  manageChange,
  placeholder,
}) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;
  return (
    <div>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
      />
    </div>
  );
};

Field.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  manageChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  
  value: '',
  type: 'text',
};

// == Export
export default Field;
