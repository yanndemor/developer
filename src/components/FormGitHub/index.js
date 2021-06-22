import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import './form.scss';

const FormGitHub = ({ manageSubmit, value, changeField }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // on pourrait récupérer le nom de la tâche dans le DOM, mais c'est fragile
    // => par exemple si on ajoute une div intermédiaire autour de l'input, ça
    // ne marche plus
    // console.log(event.target.childNodes[0].value);
    manageSubmit();
  };

  // https://fr.reactjs.org/docs/refs-and-the-dom.html
  // une ref permet de repérer un élément du DOM (balise ou composant) pour pouvoir
  // y accéder proprement

  // https://reactjs.org/docs/hooks-reference.html#useref
  // on crée une case pour stocker une référence vers un élément (case vide au départ)

  // et on utilise la prop spéciale "ref" qu'on place sur l'élément à référencer
  // en indiquant le nom de la variable

  return (
    <div className="container-input">
      <form className="input" onSubmit={handleSubmit}>
        <Field
          type="text"
          id="input-search"
          placeholder="Search..."
          manageChange={changeField}
          value={value}
        />
      </form>
    </div>
  );
};

FormGitHub.propTypes = {

  manageSubmit: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default FormGitHub;
