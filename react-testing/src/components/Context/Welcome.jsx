import { useAuth } from './AuthContext';

export default function Welcome() {
  const { user } = useAuth();
  return <h1>Welcome, {user.name}</h1>;
}
