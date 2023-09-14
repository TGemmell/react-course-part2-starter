import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface LoginTask {
  type: "LOGIN";
  username: string;
}

interface LogoutTask {
  type: "LOGOUT";
}

export type AuthAction = LoginTask | LogoutTask;

const authReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
