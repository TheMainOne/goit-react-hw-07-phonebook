import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Header, SecondHeader } from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './App.styled';

const LS_KEY = 'contacts';
const contactId = nanoid();
const numberId = nanoid();

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const filteredContacts = getFilteredContacts();

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem(LS_KEY));

    if (localStorageItems) {
      setContacts(prevState => [...prevState, ...localStorageItems]);
    }
  }, []);

  const onHandleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contactName = event.target.elements.name.value;
    const contactPhone = event.target.elements.number.value;
    const isNameInContacts = contacts.find(
      element => element.name === contactName
    );

    if (isNameInContacts) {
      const notify = () => toast.error(`${contactName} has been added already`);

      notify();
      form.reset();
      return;
    }

    const newContacts = [
      ...contacts,
      { id: nanoid(), name: contactName, number: contactPhone },
    ];

    setContacts(newContacts);
    localStorage.setItem(LS_KEY, JSON.stringify(newContacts));
    form.reset();
  };

  const onSearchInput = event => {
    const inputValue = event.target.value;

    setFilter(inputValue);
  };

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );

    return filteredContacts;
  }

  const deleteContact = id => {
    setContacts(prevState => {
      const newContacts = prevState.filter(contact => contact.id !== id);

      if (newContacts.length === 0) {
        localStorage.removeItem(LS_KEY);
        return [];
      }

      localStorage.setItem(LS_KEY, JSON.stringify(newContacts));
      return [...newContacts];
    });
  };

  return (
    <Wrapper>
      <Header />
      <ContactForm
        contactId={contactId}
        numberId={numberId}
        handleSubmit={onHandleSubmit}
      />
      <SecondHeader>Contacts</SecondHeader>
      <Filter onSearchInput={onSearchInput} value={filter} />
      <Contacts
        contacts={contacts}
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
      <GlobalStyle />
      <Toaster />
    </Wrapper>
  );
};

export default App;
