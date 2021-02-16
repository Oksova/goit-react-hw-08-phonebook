import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <p>Hi,{name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </button>
    </div>
  );
}
