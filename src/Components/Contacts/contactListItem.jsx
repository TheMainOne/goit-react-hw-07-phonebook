import { useDeleteContactMutation } from "redux/contacts/contactsSlice";
import toast from "react-hot-toast";
import { ListItem, Button } from "./Contacts.styled";

export const ContactListItem = ({ id, name, phone }) => {
    const [deleteContact, {isLoading}] = useDeleteContactMutation();
    
    return (
        <ListItem>
                <p>
                    {name} : {phone}
                </p>
            <Button onClick={() => {
                deleteContact(id);
                const notify = () => toast.success(`${name} has succesfully deleted from the phonebook`);
                notify();
            }}>{isLoading ? 'Deleting...' : 'delete'}</Button>

        </ListItem>
)
}
