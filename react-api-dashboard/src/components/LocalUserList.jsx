import React, { useEffect, useState } from "react";

function LocalUserList() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("/users.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load local users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

  }, []);

  if (loading) return <p>Loading local users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Local Users</h2>

      {users.map((user) => (
        <div key={user.id} className="card">

          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>

        </div>
      ))}

    </div>
  );
}

export default LocalUserList;