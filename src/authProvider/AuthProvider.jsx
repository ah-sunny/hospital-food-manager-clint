
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const LogInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
 
  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // const userEmail = currentUser?.email || user?.email;
      // const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log('current user', currentUser);
      // if(currentUser){
      //     // const userInfo = { email: currentUser.email };      //its(email)  must be in under if func
      //     axios.post("https://mini-mart-server.vercel.app/jwt",{ email: currentUser?.email } )
      //     .then(res=>{
      //         if(res?.data?.token){

      //             localStorage.setItem("access-token", res?.data?.token)
      //             setLoading(false);
      //         }
      //     })
      // }else{
      //     localStorage.removeItem('access-token')
      //     setLoading(false)
      // }
      setLoading(false);

    });
    return () => {
      return unsubscribe();
    }
  }, [user])

  const authInfo = {
    user,
    loading,
    createUser,
    LogInUser,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;