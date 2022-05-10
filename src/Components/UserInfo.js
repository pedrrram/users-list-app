export default function UserInfo(props) {
  if(!props.show) {
    return null;
  }

  function handleClick(e) {
    e.stopPropagation();
    props.onClose();
  }

  return(
    <div className="z-10 fixed left-0 top-0 right-0 bottom-0 bg-slate-400/30 flex justify-center items-center" onClick={handleClick}>
      <div className="p-5 bg-white w-[480px] rounded-xl border border-slate-400" onClick={e => e.stopPropagation()}>
        <header className="flex justify-between items-center border-b pb-2">
          <h3 className="font-light">User Information</h3>
          <span className="text-sm font-normal hover:font-bold 
          transition-all cursor-pointer text-rose-600 underline" onClick={props.onClose}>Close</span>
        </header>
        <main>
          <div className="font-light text-base mt-5 flex flex-col">
            <p className="py-2">Display Name: <span className="font-normal">{props.user.displayName}</span></p>
            <p className="py-2">Username: <span className="font-normal">{props.user.username}</span></p>
            <p className="py-2">Email: <span className="font-normal">{props.user.email}</span></p>
            <p className="py-2 text-rose-600 text-lg">
              { props.user.isAdmin ? 'Admin' : 'Normal User'}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}