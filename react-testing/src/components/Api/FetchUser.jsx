import { useEffect, useState } from "react";

export default function FetchUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) throw new Error("Some error occurred");
        const user = await response.json();
        setUser(user);
      } catch (err) {
        setError(err);
      }
    };

    getUser();
  }, []);

  if (error) return <p>Error recovering user...</p>;

  if (!user) return <p>Loading...</p>;

  return <h1>{user.name}</h1>;
}
