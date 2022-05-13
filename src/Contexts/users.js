import React from "react";

const usersContext = React.createContext({
  users: [],
  addToUsers: () => {},
  editUser: () => {},
  deleteUser: () => {},
})

export default usersContext;