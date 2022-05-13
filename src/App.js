import { useReducer, useState } from "react";
import AddUser from "./Components/AddUser";
import User from "./Components/User";
import UsersContext from "./Contexts/users";
import UsersReducer from "./Reducers/usersReducer";

export default function App() {

  const [users, dispatch] = useReducer(UsersReducer, []);
  const [showAddModal, setShowModal] = useState(false);

  return (
    <UsersContext.Provider value={{ dispatch }}>
      <div className="App">
        <header className="flex justify-center py-5 text-xl bg-slate-800 font-bold w-full h-full">
          <nav className="w-full max-w-screen-md flex justify-between items-center">
            <h1 className="text-white">Users list</h1>
            <span className="p-5 border-2 text-white border-slate-800 rounded-full bg-sky-700 cursor-pointer 
            transition-all hover:bg-slate-800 hover:border-sky-800" onClick={() => setShowModal(true)}>Add</span>
            { showAddModal ? <AddUser onClose={() => setShowModal(false)}/> : null }
          </nav>
        </header>
        <main className="h-screen bg-slate-200 w-full flex justify-center pt-10">
          <div className="w-full max-w-screen-md flex flex-col justify-start items-center divide-y-2">
              {
                users.length > 0 ? users.map(user => <User key={user.id} user={user} />) : null
              }
          </div>
        </main>
      </div>
    </UsersContext.Provider>
  );
}

