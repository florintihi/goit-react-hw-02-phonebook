import { Component } from 'react';

class ContactListItem extends Component {
  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <>
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default ContactListItem;
