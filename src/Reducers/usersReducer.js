export default function UsersReducer(prevUsers, action) {
  switch (action.type) {
    case 'addToUsers':
      return [...prevUsers, action.payload.user]
  
    case 'editUser':
      return [
            ...prevUsers.filter(usr => usr.id !== action.payload.edittedUser.id),
            action.payload.edittedUser
          ]
    case 'deleteUser':
      return prevUsers.filter(usr => usr.id !== action.payload.id)
    default:
      return prevUsers;
  }
}