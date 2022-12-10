import { useContext } from "react";
import LoginContext from './components/Contexts/LoginContext'


const useAuth = () => {
  return useContext(LoginContext)
    
}

export default useAuth