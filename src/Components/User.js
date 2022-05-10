import { useState } from "react";
import UserInfo from "./UserInfo";

export default function User(props) {

  const user = props.user;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div onClick={() => setShowInfo(true)} className="flex justify-between items-center shadow-md bg-slate-300 border-b border-slate-800  px-5 py-3 w-1/2 min-w-[520px]">
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
        <button onClick={e => e.stopPropagation()} className="font-light tracking-wide bg-slate-800 text-sm px-4 py-2 rounded-xl text-white hover:bg-slate-900 transition-colors">edit</button>
      </div>
    </div>
  );
}