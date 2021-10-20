import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();
const UseFirebase=()=>{
    const [user,setuser]=useState({});
    const auth=getAuth();
    const singInUsinGoogle=()=>{
        const googleAuth=new GoogleAuthProvider();
        signInWithPopup(auth,googleAuth)
        .then(result=>{
            setuser(result.user);
        })
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{});
    }
    useEffect(()=>{
      const unsubscribed=onAuthStateChanged(auth,user=>{
            if(user){
                setuser(user)
            }
            else{
                setuser({})
            }
        })
    },[])
    return{
        user,
        logOut,
        singInUsinGoogle
    }
}
export default UseFirebase;