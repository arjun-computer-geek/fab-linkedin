import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQQ-sBncC7kLvVWO20wuRumu5P1QtCn2A",

  authDomain: "fab-linkedin.firebaseapp.com",

  projectId: "fab-linkedin",

  storageBucket: "fab-linkedin.appspot.com",

  messagingSenderId: "1010870253763",

  appId: "1:1010870253763:web:391674f8249fe830adca76",

  measurementId: "G-DPPGCGJTZD",
};

// TODO: Replace the following with your app's Firebase project configuration

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);