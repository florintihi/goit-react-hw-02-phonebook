import { Component } from 'react';
import styles from './ContactListItem.module.css';

class ContactListItem extends Component {
  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <>
        <li key={id} className={styles.wrapperItem}>
          {name}: {number}
          <button
            className={styles.deleteButton}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default ContactListItem;
