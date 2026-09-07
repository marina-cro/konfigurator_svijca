// ===== FIREBASE KONFIGURACIJA =====
// VAŽNO: Ovo su PRIMJER vrijednosti. Zamijeni ih pravim podacima iz
// svog Firebase projekta:
// Firebase Console -> Project settings (zupčanik) -> Your apps -> SDK setup and configuration -> Config
//
// Ako još nemaš Firebase projekt:
// 1. Idi na https://console.firebase.google.com
// 2. Add project -> upiši ime (npr. "glass-of-happiness")
// 3. U izborniku slijeva: Build -> Authentication -> Get started -> omogući "Email/Password"
// 4. U izborniku slijeva: Build -> Firestore Database -> Create database (počni u test modu)
// 5. Project settings -> dolje "Your apps" -> klikni ikonu </> (Web) -> registriraj app -> kopiraj firebaseConfig

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Sprečava višestruku inicijalizaciju pri Next.js Hot Reloadu
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);