import { useState } from "react";

export default function EditUser(props) {
  
  const [displayName, setDisplayName] = useState(props.user.displayName);
  const [email, setEmail] = useState(props.user.email);
  const [username, setUsername] = useState(props.user.username);
  const [isAdmin, setIsAdmin] = useState(props.user.isAdmin);

  if(!props.show) {
    return null;
  }



  function handleEdit(e) {
    e.preventDefault();
    props.edit(edittedUser);
    props.onClose();
  }
  function handleCloseEdit(e) {
    e.stopPropagation();
    props.onClose();
  }

  const edittedUser = {
    id: props.user.id,
    displayName,
    email,
    username,
    isAdmin,
    date: new Date().toLocaleString()
  };

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-slate-400/30 flex justify-center items-center" onClick={handleCloseEdit}>
      <div className="p-5 bg-white w-[480px] rounded-xl border border-slate-400" onClick={e => e.stopPropagation()}>
        <header className="flex justify-between items-center border-b pb-2">
          <h3 className="font-light">Edit User</h3>
          <span className="text-sm font-normal hover:font-bold 
          transition-all cursor-pointer text-rose-600 underline" onClick={props.onClose}>Close</span>
        </header>
        <main>
          <form className="font-light text-base mt-5 flex flex-col" onSubmit={handleEdit}>
            <label className="mb-2">Display Name:</label>
            <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)}  className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <label className="mb-2">Username:</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <label className="mb-2">Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <div>
              <label>want to be admin?</label>
              <input type="checkbox" checked={isAdmin ? true : false} onChange={() => setIsAdmin(!isAdmin)} className="ml-4 align-middle" />
            </div>
            <button type="submit" className="bg-emerald-500 mt-5 p-3 text-white rounded-2xl shadow-xl">Add</button>
          </form>
        </main>
      </div>
    </div>
  );
}