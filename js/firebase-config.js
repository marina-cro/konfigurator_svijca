// Firebase konfiguracija
const firebaseConfig = {
    apiKey: "AIzaSyC1L0-L8zVhoKDWB-4niqHJkoDYMhnpG-8",
    authDomain: "test-4f4cf.firebaseapp.com",
    projectId: "test-4f4cf",
    storageBucket: "test-4f4cf.firebasestorage.app",
    messagingSenderId: "557119435809",
    appId: "1:557119435809:web:d5fc51a92bbdf07cb79f60"
};

// Inicijalizacija Firebasea samo jednom
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firebase servisi koje koristi auth.js
const auth = firebase.auth();
const db = firebase.firestore();
