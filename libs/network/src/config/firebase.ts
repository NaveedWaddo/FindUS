import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAdZaC-Zrz088Az36_tjeKEGYRDhEioyZk',
  authDomain: 'findus-786be.firebaseapp.com',
  projectId: 'findus-786be',
  storageBucket: 'findus-786be.appspot.com',
  messagingSenderId: '112586470595',
  appId: '1:112586470595:web:d35bcbe33560d74be71e76',
  measurementId: 'G-WGH8EY2ES5',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export const auth = getAuth(firebaseApp)
