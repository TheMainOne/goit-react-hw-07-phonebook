import React from "react";
import PropTypes from "prop-types";
import { ContactListItem } from "./contactListItem";
import { List, Notification } from "./Contacts.styled";
import { SecondHead } from "Components/Header/Header.styled";

const Contacts = ({ contacts, filter }) => {


  const filteredContacts = () => {
    if (contacts) {
      const contactsWithFilterQuery = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.phone.includes(filter.toLowerCase())
      );
      return contactsWithFilterQuery;
    }
  };

  const contactsWithFilterQuery = filteredContacts();
  return (
    <div>
<SecondHead>Contacts</SecondHead>
    <List>
      {!contacts ||
        (contacts.length === 0 && (
          <Notification>No contacts added yet</Notification>
        ))}
      {contacts && contactsWithFilterQuery.length > 0 ? contactsWithFilterQuery.map(contact => <ContactListItem key={contact.id} {...contact}/>) : <Notification>No contact found</Notification>}
    </List>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
