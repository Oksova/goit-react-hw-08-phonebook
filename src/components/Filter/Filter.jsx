import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phone-book/phonebook-selectors';
import * as phonebookActions from '../../redux/phone-book/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <label className={s.filterLabel}>
      Search contact
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
