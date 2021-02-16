import { useSelector, useDispatch } from 'react-redux';
import * as phonebookOperations from '../../redux/phone-book/phonebook-operations';
import { getVisibleContacts } from '../../redux/phone-book/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact} key={id}>
          <p className={s.nameText}>
            {name} : {number}
          </p>

          <button
            className={s.deleteBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
