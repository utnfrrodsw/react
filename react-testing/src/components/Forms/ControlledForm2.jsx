import { useState } from 'react';
import { getUser } from './api';

export default function LoginForm2() {
  const [email, setEmail] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    await getUser(event.target[0].value)
  }

  return (
    <form onSubmit={submit}>
      <input
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
