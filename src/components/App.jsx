import React from 'react';
import { nanoid } from 'nanoid';

import FormPhonebook from './FormPhonebook/FormPhonebook';
import Filter from './Contacts/Filter';
import Contacts from './Contacts/Contacts';

export class App extends React.Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  onFormSubmit = contact => {
    if (!this.state.contacts.find(copy => copy.name === contact.name)) {
      contact.id = nanoid();
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };
  filterContacts = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filterArr = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <FormPhonebook onFormSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter query={filter} func={this.filterContacts} />
        {filter !== '' ? (
          <Contacts contacts={filterArr} onDeleteContact={this.deleteContact} />
        ) : (
          <Contacts contacts={contacts} onDeleteContact={this.deleteContact} />
        )}
      </div>
    );
  }
}
