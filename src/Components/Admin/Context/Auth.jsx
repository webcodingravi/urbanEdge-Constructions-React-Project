import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const userInfo = localStorage.getItem('userInfo');
  const [user, setUser] = useState(useInfo);

  
}