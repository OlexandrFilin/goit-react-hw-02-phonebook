import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
//import { nanoid } from 'nanoid';
// import css from 'components/ContactForm/ContactForm.module.css';
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

  render() {
    // const { nameUs, number, filter, contacts } = this.state;
    return (
      <>
        <h1 style={{ marginLeft: '20px' }}>Phonebook</h1>
        <ContactForm />
        <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}
