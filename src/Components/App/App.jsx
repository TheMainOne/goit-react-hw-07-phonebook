import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import toast, { Toaster } from "react-hot-toast";
import { Header } from "../Header/Header";
import Contacts from "../Contacts/Contacts";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import { Wrapper, WrapperForContactsForm } from "./App.styled";
import { GlobalStyle, SiteHeader } from "./App.styled";
import { changeFilter } from "redux/filter/filterSlice";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateNewContactMutation,
} from "redux/contacts/contactsSlice";

const contactId = nanoid();
const numberId = nanoid();

const App = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { data } = useFetchContactsQuery();
  const [onDeleteContact] = useDeleteContactMutation();
  const [createContact] = useCreateNewContactMutation();

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const contactName = event.target.elements.name.value;
    const contactPhone = event.target.elements.number.value;
    const isNameInContacts = data.find(
      (element) => element.name === contactName
    );

    if (isNameInContacts) {
      const notify = () => toast.error(`${contactName} has been added already`);

      notify();
      form.reset();
      return;
    }

    const newContact = { name: contactName, phone: contactPhone };

    createContact(newContact);
    const notify = () => toast.success(`${contactName} has succesfully added to the phonebook`);
      notify();
    form.reset();
  };

  const onSearchInput = (event) => {
    const inputValue = event.target.value;

    dispatch(changeFilter(inputValue));
  };

  return (
    <Wrapper>
      <SiteHeader>
        <Header />
        <Filter onSearchInput={onSearchInput} value={filter} />
      </SiteHeader>
      <hr />
      <WrapperForContactsForm>
      <ContactForm
        contactId={contactId}
        numberId={numberId}
        handleSubmit={onHandleSubmit}
      />
      <Contacts
        contacts={data}
        filter={filter}
        deleteContact={onDeleteContact}
      />
      </WrapperForContactsForm>
      <GlobalStyle />
      <Toaster />
    </Wrapper>
  );
};

export default App;
