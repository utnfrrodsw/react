import { useState } from 'react';

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(email); }}>
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
