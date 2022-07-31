import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //register
  const registerUser = (email, password, name, navigate) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 


        setAuthError("")
        // send name to firebase 
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          
        }).catch((error) => {
         
        });
    
    
      navigate('/')

      })

  
      .catch((error) => {
        setAuthError(error?.message)
       })
      .finally(() => setIsloading(false));
  };


  //google signin
  const googleSignin = (location, navigate) => {
    setIsloading(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
   
      const destination = location?.state?.from || '/';
            navigate(destination);
          

          setAuthError('');

    }).catch((error) => {
        setAuthError(error?.message)
    })
    .finally(()=> setIsloading(false))
  }

  //login

  const loginUser = (email, password, location, navigate) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const destination = location?.state?.from || '/';
        navigate(destination);
        setAuthError('');

      })
      .catch((error) => { 
        setAuthError(error?.message)
      })
      .finally(() => setIsloading(false));
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //logout
  const logout = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        setAuthError(error?.message)
      })
      .finally(() => setIsloading(false));
  };

  return {
    user,
    registerUser,
    logout,
    loginUser,
    isLoading, 
    setIsloading,
    authError,
    googleSignin
  };
};

export default useFirebase;
