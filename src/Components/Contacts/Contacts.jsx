import React from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { List, Button, ListItem, Notification } from "./Contacts.styled";

const Contacts = ({ contacts, filter, deleteContact }) => {


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
      {!contacts ||
        (contacts.length === 0 && (
          <Notification>No contacts added yet</Notification>
        ))}
      {contacts && contactsWithFilterQuery.length > 0 ? contactsWithFilterQuery.map((contact) => (
          <ListItem key={contact.id}>
            <p>
              {contact.name}: {contact.phone}
            </p>
          <Button onClick={() => {
            deleteContact(contact.id)
                const notify = () => toast.success(`${contact.name} succesfully deleted from phonebook`);
      notify();
          }}>delete</Button>
          </ListItem>
        )) : <Notification>No contact found</Notification>}
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
};

export default Contacts;
