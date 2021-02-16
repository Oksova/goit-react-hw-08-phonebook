import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getErrorRegister);
  console.log('RegisterView :', error);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <p>Create your profile</p>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <p>Name</p>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
