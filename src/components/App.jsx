import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    nameUs: '',
    number: '',
    email: '',
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
      email: '',
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState(prevState => {
      prevState.contacts.push({
        id: nanoid(),
        name: this.state.nameUs,
        number: this.state.number,
      });

      return {
        contacts: [...prevState.contacts],
      };
    });

    this.resetForm();
  };
  forInput = filtr => {
    if (filtr === '') {
      return this.state.contacts;
    } else {
      return this.state.contacts.filter(el => {
        return el.name.toLowerCase().includes(filtr.toLowerCase());
      });
    }
  };
  handleFilter = contact => {
    console.log(contact);
  };

  render() {
    const { nameUs, number, filter } = this.state;
    return (
      <>
        <h1 style={{ marginLeft: '20px' }}>Phonebook</h1>
        <ContactForm
          nameUs={nameUs}
          number={number}
          handelInputChange={this.handelInputChange}
          submitForm={this.handleSubmit}
        />
        <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
        <Filter
          style={{ marginLeft: '20px' }}
          handleFilter={this.handelInputChange}
          filter={filter}
        />
        <ContactList contacts={this.forInput(filter)} />
      </>
    );
  }
}
