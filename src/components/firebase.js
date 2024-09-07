import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA4s6k4qbMIwP8MdH_CoU0VCX4OyDW9Ums",
    authDomain: "contact-zaio.firebaseapp.com",
    projectId: "contact-zaio",
    storageBucket: "contact-zaio.appspot.com",
    messagingSenderId: "883984199929",
    appId: "1:883984199929:web:4d369790b07b53678db228",
    measurementId: "G-LYVTMBH1GD"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
