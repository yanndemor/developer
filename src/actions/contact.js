export const UPDATE_CONTACT_FIELD = 'UPDATE_CONTACT_FIELD';
export const SUBMIT_MAIL = 'SUBMIT_MAIL';
export const updateContactField = (newValue, name) => ({
  type: UPDATE_CONTACT_FIELD,
  // newValue: newValue
  // shorthand property (ES6)
  newValue,
  name,
});
export const submitMail = () =>({
  type: SUBMIT_MAIL,
});
