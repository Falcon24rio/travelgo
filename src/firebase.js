import { initializeApp } from "firebase/app";

import {
  getAuth,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {

  apiKey:
    "AIzaSyBnu79kMysLWa3695dYdzLVa_DgF6b_nEk",

  authDomain:
    "travelgo.firebaseapp.com",

  projectId:
    "travelgo-1e79f",

  storageBucket:
    "travelgo-1e79f.firebasestorage.app",

  messagingSenderId:
    "1032444858504",

  appId:
    "1:1032444858504:web:2b0d1ed037439bdb4a8f3d",

};

const app =
  initializeApp(
    firebaseConfig
  );

export const auth =
  getAuth(app);

export const db =
  getFirestore(app);