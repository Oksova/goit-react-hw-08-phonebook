import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/phone-book/phonebook-operations';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
