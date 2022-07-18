import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  // user:{
  //   _id : "62d40ddc442428e74df6d1d8" ,
  // fullname : "muhammed" ,
  // email : "mohamedkelbrolosy@gmail.com" ,
  //  phone : "01010164796",
  //   address : "Sidi-Besher Alexandria",
  //    totalride : 0 ,
  //    asdriver : 0,
  //     aspassnager : 0,
  //     rate : "No-rating",
  //     brand : " Nissan" ,
  //    model : "GTR" ,
  //    color : " White",
  //     facebook : "https://www.facebook.com/csemn.profile" ,
  //    profileimg : "8b756d302d627bf69ada2034592d0d931658073931786.jpg"
  //   },
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
