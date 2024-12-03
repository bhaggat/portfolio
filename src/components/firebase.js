import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMuhQeLDsZSVXXI9hIhV3PxtbiGzKf3Ds",
  authDomain: "tfolio-c214a.firebaseapp.com",
  projectId: "tfolio-c214a",
  storageBucket: "tfolio-c214a.firebasestorage.app",
  messagingSenderId: "248149323983",
  appId: "1:248149323983:web:089998384e69aff06187ba",
  measurementId: "G-8G1GVC9EQ2",
};
const app = initializeApp(firebaseConfig);

export const firestore =getFirestore(app);
