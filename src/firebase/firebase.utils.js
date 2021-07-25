import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyCwaLNunoXUblTM2r5tAV-GJDuk2CjJZzA",
    authDomain: "crwn-db-71dcd.firebaseapp.com",
    projectId: "crwn-db-71dcd",
    storageBucket: "crwn-db-71dcd.appspot.com",
    messagingSenderId: "233468025646",
    appId: "1:233468025646:web:4d5e923817d2e7752cf8bf"
}

firebase.initializeApp(config)

export  const auth = firebase.auth()
export  const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export  const signInWithGoogle = ()=> auth.signInWithPopup(provider)
export default firebase

