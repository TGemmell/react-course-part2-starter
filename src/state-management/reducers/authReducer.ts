interface LoginTask{
    type: "LOGIN",
    username: string
}

interface LogoutTask{
    type: "LOGOUT";
}

export type AuthAction = LoginTask | LogoutTask

const authReducer = (state: string, action: AuthAction): string => {
    switch(action.type){
        case "LOGIN":
            return action.username;
        case "LOGOUT":
            return "";
        default:
            return state;
        }
}

export default authReducer;