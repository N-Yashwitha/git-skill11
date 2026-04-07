import React, { useState } from "react";

import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";

function Dashboard() {

  const [page, setPage] = useState("home");

  return (

    <div>

      <h1>News Dashboard</h1>

      <button onClick={() => setPage("local")}>
        Local Users
      </button>

      <button onClick={() => setPage("users")}>
        Users API
      </button>

      <button onClick={() => setPage("posts")}>
        Fake API Posts
      </button>

      <hr />

      {page === "local" && <LocalUserList />}

      {page === "users" && <UserList />}

      {page === "posts" && <FakePostList />}

    </div>

  );
}

export default Dashboard;