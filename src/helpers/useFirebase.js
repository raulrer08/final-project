import firebase from 'firebase/app'
import { useAuth } from '@vueuse/firebase'
import 'firebase/auth'

import { firebaseConfig } from '../config/firebase'
import { useRouter } from 'vue-router'

firebase.initializeApp(firebaseConfig)

const { auth } = firebase
const { GoogleAuthProvider } = auth


const { isAuthenticated, user } = useAuth()

export const authentication = () => {
    
    const googlePopup = () => auth().signInWithPopup(new GoogleAuthProvider())
    const signOut = () => auth().signOut()
    return { googlePopup, signOut, isAuthenticated, user }
  }



