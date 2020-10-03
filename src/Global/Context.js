import React, {useState, useEffect} from 'react'
import {auth, db} from "../config/config"
import firebase from 'firebase'
export const Context = React.createContext();
const ContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [allMsg, setAllMsg] = useState([])
    // register
    const register = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                firebase.auth().signInWithRedirect(provider)
            })
    }
    // logout
    const logout = () => {
        auth.signOut().then(setUser(null)).catch(err => console.log(err))
    }
    //send message
    const sendMsg = (msg) => {
        db.collection('messages').add({
            msg,
            username: user.displayName,
            photo: user.photoURL,
            email: user.email,
            currentTime: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    useEffect(() => {
        auth.onAuthStateChanged(user =>  {
            setUser(user)
            setLoader(false)
        })
        //fetch data
        db.collection('messages').orderBy('currentTime', 'desc').onSnapshot(snp => {
            setAllMsg(snp.docs.map(doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            )))
        })
    }, [])
    console.log(user);
    return (
        <Context.Provider value={{register, user, loader, logout, sendMsg, allMsg}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
