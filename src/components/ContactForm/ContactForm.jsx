import React, { Component } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    nameUs: '',
    number: '',
  };
  handelInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  resetForm = () => {
    this.setState({
      nameUs: '',
      number: '',
    });
  };
  submitForm = evt => {
    evt.preventDefault();

    this.props.submitForm({
      id: nanoid(),
      name: this.state.nameUs,
      number: this.state.number,
    });
    this.resetForm();
  };

  render() {
    //console.log(this.props);
    const { submitForm } = this;
    const { nameUs, number } = this.state;
    return (
      <form action="submit" className={css.frmUser} onSubmit={submitForm}>
        <label htmlFor="" className={css.labelFrm}>
          Name
          <input
            className={css.inpUser}
            type="text"
            value={nameUs}
            name="nameUs"
            // onChange={this.props.handelInputChange.bind(this)}
            onChange={this.handelInputChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
        <label htmlFor="" className={css.labelFrm}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            className={css.inpUser}
            // onChange={this.props.handelInputChange.bind(this)}
            onChange={this.handelInputChange}
            required
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          />
        </label>
        <button className={css.btnSubmit}>Add contact</button>
      </form>
    );
  }
}
