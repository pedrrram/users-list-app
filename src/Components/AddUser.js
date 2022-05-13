import { useEffect, useState, useContext } from "react";
import UsersContext from "../Contexts/users";

export default function AddUser(props) {

  const closeOnEscapeKeyDown =  (e) => {
    if((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  }

  const usersContext = useContext(UsersContext);

  const [user, setUser] = useState({
    id: Date.now(),
    displayName: '',
    email: '',
    username: '',
    isAdmin: false,
    date: new Date().toLocaleString()
  });

  function handleSetUser(e, type) {
    setUser(user => (
      {
        ...user,
        [type]: e.target.value
      }
    ))
  }

  function handleSubmit(e) {
    e.preventDefault();
    usersContext.addToUsers(user);
    props.onClose();
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-slate-400/30 flex justify-center items-center" onClick={props.onClose}>
      <div className="p-5 bg-white w-[480px] rounded-xl border border-slate-400" onClick={e => e.stopPropagation()}>
        <header className="flex justify-between items-center border-b pb-2">
          <h3 className="font-light">Add new User</h3>
          <span className="text-sm font-normal hover:font-bold 
          transition-all cursor-pointer text-rose-600 underline" onClick={props.onClose}>Close</span>
        </header>
        <main>
          <form className="font-light text-base mt-5 flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-2">Display Name:</label>
            <input type="text" value={user.displayName} onChange={(e) => handleSetUser(e, 'displayName')} className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <label className="mb-2">Username:</label>
            <input type="text" value={user.username} onChange={(e) => handleSetUser(e, 'username')} className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <label className="mb-2">Email:</label>
            <input type="email" value={user.email} onChange={(e) => handleSetUser(e, 'email')} className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <div>
              <label>want to be admin?</label>
              <input type="checkbox" value={user.isAdmin} onChange={(e) => setUser(user => ({ ...user, isAdmin: !user.isAdmin }))} className="ml-4 align-middle" />
            </div>
            <button className="bg-emerald-500 mt-5 p-3 text-white rounded-2xl shadow-xl">Add</button>
          </form>
        </main>
      </div>
    </div>
  );
}