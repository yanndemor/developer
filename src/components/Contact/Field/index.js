// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';

// == Composant
const Field = ({
  value,
  manageChange,
}) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, value);
  };
  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id="input-search"
        type="text"
        className="field-input"
        placeholder="Search"

      />
    </div>
  );
};

Field.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */

  manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
};

// == Export
export default Field;
