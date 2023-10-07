import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

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
  };

  // inputChamngeContr = (val, func) => {
  //   if (val > 0) {
  //     console.log('object');
  //   }
  // };
  // resetForm = () => {
  //   this.setState({
  //     nameUs: '',
  //     number: '',
  //   });
  // };

  contactByNameSearch = (nameContact, contacts) => {
    const find = contacts.find(item => {
      return item.name === nameContact;
      // return item.nameUst.trim() === nameContact.trim();
    });
    if (find) {
      return true;
    }
    return false;
  };

  onSubmit = newCont => {
    if (this.contactByNameSearch(newCont.name, this.state.contacts)) {
      alert(`${newCont.name} is alredy in conacts`);
      return;
    }

    this.setState(prevState => {
      prevState.contacts.push(newCont);

      return {
        contacts: [...prevState.contacts],
      };
    });
  };
  handelInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
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
  // handleFilter = contact => {
  //   console.log(contact);
  // };
  onDelCont = id => {
    this.setState(prState => {
      const withOutDel = prState.contacts.filter(el => {
        return el.id !== id;
      });

      return {
        contacts: [...withOutDel],
      };
    });
  };
  render() {
    // const { nameUs, number, filter } = this.state;
    const { filter } = this.state;
    return (
      <>
        <h1 style={{ marginLeft: '20px' }}>Phonebook</h1>
        <ContactForm
          // nameUs={nameUs}
          // number={number}
          handelInputChange={this.handelInputChange}
          submitForm={this.onSubmit}
        />
        <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
        <Filter
          style={{ marginLeft: '20px' }}
          handleFilter={this.handelInputChange}
          filter={filter}
        />
        <ContactList
          contacts={this.forInput(filter)}
          onDelCont={this.onDelCont}
        />
      </>
    );
  }
}
