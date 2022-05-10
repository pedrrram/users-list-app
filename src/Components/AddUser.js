import { useEffect } from "react";

export default function AddUser(props) {

  const closeOnEscapeKeyDown =  (e) => {
    if((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
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
          <form className="font-light text-base mt-5 flex flex-col ">
            <label className="mb-2">Display Name:</label>
            <input type="text" className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <label className="mb-2">Username:</label>
            <input type="text" className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <label className="mb-2">Email:</label>
            <input type="email" className="outline-none border border-slate-200 rounded-md px-3 py-2 mb-4"/>
            <div className="">
              <label>want to be admin?</label>
              <input type="checkbox" className="ml-4 align-middle" />
            </div>
            <button className="bg-emerald-500 mt-5 p-3 text-white rounded-2xl shadow-xl">Add</button>
          </form>
        </main>
      </div>
    </div>
  );
}