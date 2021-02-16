import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getContacts } from '../../redux/phone-book/phonebook-selectors';
import * as phonebookOperations from '../../redux/phone-book/phonebook-operations';
import s from './ContactsForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) =>
    dispatch(phonebookOperations.addContact(name, number));
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactMatching = () => {
    const namesInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );

    const numbersInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (
      namesInPhonebook.includes(name) ||
      numbersInPhonebook.includes(number)
    ) {
      alert(`${name}${number} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter something');
      return true;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    setName('');
    setNumber('');

    if (contactMatching()) {
      return;
    }
    onSubmit(name, number);
  };

  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <label className={s.formLabel}>
        Name
        <input
          className={s.formInput}
          type="text"
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        ></input>
      </label>
      <label className={s.formLabel}>
        Number
        <PhoneInput
          country={'us'}
          name="number"
          value={number}
          onChange={setNumber}
        />
      </label>
      <button className={s.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleNameChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   onSubmitForm = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     return (
//       <form className={s.form} onSubmit={this.onSubmitForm}>
//         <label className={s.formLabel} htmlFor={this.nameInputId}>
//           Name
//           <input
//             className={s.formInput}
//             type="text"
//             name="name"
//             placeholder = "John Doe"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//             id={this.nameInputId}
//           ></input>
//         </label>
//         <label className={s.formLabel} htmlFor={this.numberInputId}>
//           Number
//           <input
//             className={s.formInput}
//             type="phone"
//             name="number"
//             placeholder="111-11-11"
//             value={this.state.number}
//             onChange={this.handleNameChange}
//             id={this.numberInputId}
//           ></input>
//         </label>
//         <button className={s.addBtn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default ContactForm;
