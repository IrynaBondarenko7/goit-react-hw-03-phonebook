import { StyledContactList, StyledContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => {
        return (
          <StyledContactsItem key={contact.id}>
            <p>
              {contact.name}
              <span>{contact.number}</span>
            </p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </StyledContactsItem>
        );
      })}
    </StyledContactList>
  );
};
