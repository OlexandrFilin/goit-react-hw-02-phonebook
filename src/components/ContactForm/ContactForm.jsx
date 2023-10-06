import React, { Component } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';

export default class ContactForm extends Component {
  // state = {
  //   nameUs: '',
  //   number: '',
  //   email: '',
  // };

  render() {
    const { nameUs, number, handelInputChange, submitForm } = this.props;
    return (
      <form action="submit" className={css.frmUser} onSubmit={submitForm}>
        <label htmlFor="" className={css.labelFrm}>
          Name
          <input
            className={css.inpUser}
            type="text"
            value={nameUs}
            name="nameUs"
            onChange={handelInputChange}
            required
          />
        </label>
        <label htmlFor="" className={css.labelFrm}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            className={css.inpUser}
            onChange={handelInputChange}
            required
          />
        </label>
        <button className={css.btnSubmit}>Add contact</button>
      </form>
    );
  }
}
