import { useState } from "react";
import EditUser from "./EditUser";
import UserInfo from "./UserInfo";

export default function User(props) {

  const user = props.user;
  const [showInfo, setShowInfo] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);

  function handleShowInfo(e) {
    e.stopPropagation();
    setShowInfo(true);
  }

  function handleEditShow(e) {
    e.stopPropagation();
    setShowEditUser(true);
  }

  return (
    <div onClick={handleShowInfo} className="flex justify-between items-center shadow-md bg-slate-300 border-b border-slate-800  px-5 py-3 w-1/2 min-w-[520px]">
      <UserInfo user={user} show={showInfo} onClose={() => setShowInfo(false)}/>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="h-12 w-12 rounded-full mr-4">
          <img src={"./../user_image.jpg"} alt="usre-img"
            className="object-fit rounded-full"
          />
        </div>
        <span className="text-xl mr-2 font-light">{user.displayName}</span>
      </div>
      <div className="flex justify-between gap-3">
        <button onClick={() => props.delete(user.id)} className="font-light tracking-wide bg-rose-600 text-sm px-4 py-2 rounded-xl text-white hover:bg-rose-700 transition-colors">delete</button>
        <button onClick={handleEditShow} className="font-light tracking-wide bg-slate-800 text-sm px-4 py-2 rounded-xl text-white hover:bg-slate-900 transition-colors">edit</button>
        <EditUser user={user} show={showEditUser} onClose={() => setShowEditUser(false)} edit={props.edit}/>
      </div>
    </div>
  );
}