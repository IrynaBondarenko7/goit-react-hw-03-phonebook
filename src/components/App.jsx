import { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactList } from './Contacts/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { StyledLayout } from './Layout/Layout.styled';
import { StyledContactsTitle, StyledTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  addContact = value => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, value] };
    });
  };
  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <StyledLayout>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <StyledContactsTitle>Contacts</StyledContactsTitle>
        <Filter filter={this.state.filter} searchContact={this.changeFilter} />
        <ContactList
          contacts={filtredContacts}
          deleteContact={this.deleteContact}
        />
      </StyledLayout>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};
Filter.propTypes = {
  filter: PropTypes.string,
  searchContact: PropTypes.func,
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};
