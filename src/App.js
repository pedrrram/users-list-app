import { useState } from "react";
import AddUser from "./Components/AddUser";

export default function App() {

  const [users, setUsers] = useState([]);
  const [showAddModal, setShowModal] = useState(false);


  return (
    <div className="App">
      <header className="flex justify-center py-5 text-xl bg-slate-800 font-bold w-full h-full">
        <nav className="w-full max-w-screen-md flex justify-between items-center">
          <h1 className="text-white">Users list</h1>
          <span className="p-5 border-2 text-white border-slate-800 rounded-full bg-emerald-600 cursor-pointer 
          transition-all hover:bg-slate-800 hover:border-emerald-600" onClick={() => setShowModal(true)}>Add</span>
          { showAddModal ? <AddUser onClose={() => setShowModal(false)}/> : null }
        </nav>
      </header>
    </div>
  );
}

