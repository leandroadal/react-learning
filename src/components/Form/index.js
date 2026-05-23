import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({
  handleChange,
  handleSubmit,
  novaTarefa,
  index,
}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa}></input>
      <button type="submit">{index !== null ? <FaEdit /> : <FaPlus />}</button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
