import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZB3jGrcqbAtrxcTmMeUhETJrz9L2UDtw",
    authDomain: "reactjs1-d5a37.firebaseapp.com",
    databaseURL: "https://reactjs1-d5a37.firebaseio.com",
    projectId: "reactjs1-d5a37",
    storageBucket: "reactjs1-d5a37.appspot.com",
    messagingSenderId: "422946762115"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base