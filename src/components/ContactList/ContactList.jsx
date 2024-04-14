import { Component } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import { nanoid } from 'nanoid';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <>
        <ul>
          {contacts.map(contact => (
            <ContactListItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
              key={nanoid()}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;
