import React from "react";

const usersContext = React.createContext({
  users: [],
  dispatch: () => {}
})

export default usersContext;