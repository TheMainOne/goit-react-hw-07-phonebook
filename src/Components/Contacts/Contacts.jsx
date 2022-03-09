import React from "react";
import PropTypes from "prop-types";
import { List, Button, ListItem, Notification } from "./Contacts.styled";

const Contacts = ({ contacts, filter, deleteContact, deleting }) => {

  console.log(deleting);
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
    <List>
      {deleting && <p>Deleting...</p>}
      {!contacts ||
        (contacts.length === 0 && (
          <Notification>No contacts added yet</Notification>
        ))}
      {contacts &&
        contactsWithFilterQuery.map((contact) => (
          <ListItem key={contact.id}>
            <p>
              {contact.name}: {contact.phone}
            </p>
            <Button onClick={() => deleteContact(contact.id)}>delete</Button>
          </ListItem>
        ))}
    </List>
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
  deleting: PropTypes.bool,
};

export default Contacts;
