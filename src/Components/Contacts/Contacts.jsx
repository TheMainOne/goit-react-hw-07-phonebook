import React from "react";
import PropTypes from "prop-types";
import { List, Button, ListItem, Notification } from "./Contacts.styled";

const Contacts = ({ contacts, filteredContacts, deleteContact, deleting }) => {

  return (
    <ul>
      {!contacts || contacts.length === 0 && <Notification>No contacts added yet</Notification>}
      {contacts &&
        contacts.map((contact) => (
          <ListItem key={contact.id}>
            <p>
              {contact.name}: {contact.phone}
            </p>
            <Button onClick={() => deleteContact(contact.id)}>delete</Button>
          </ListItem>
        ))}
      {/* {contacts.length === 0 ? (
        <Notification>No contacts added yet</Notification>
      ) : (
        <List>
          {filteredContacts.length === 0 ? (
            <p>Contact not found</p>
          ) : (
            filteredContacts.map((contact) => (
              <ListItem key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <Button onClick={() => deleteContact(contact.id)}>
                  delete
                </Button>
              </ListItem>
            ))
          )}
        </List>
      )} */}
    </ul>
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
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
