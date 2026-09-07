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

  const firebaseConfig = {
    apiKey: "AIzaSyAzLhDIUvHpS3JLRJCPCZTgSuZ6Ttd1VjQ",
    authDomain: "konfigurator-svijeca.firebaseapp.com",
    projectId: "konfigurator-svijeca",
    storageBucket: "konfigurator-svijeca.firebasestorage.app",
    messagingSenderId: "1019960023159",
    appId: "1:1019960023159:web:c7a8dc2b4300a5b731ce72",
    measurementId: "G-V0BC467MDN"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
