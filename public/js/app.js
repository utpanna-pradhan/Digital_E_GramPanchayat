// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7-i1Xz1zaSeF5Wc05cab8IkaOcTeTFeo",
  authDomain: "digital-e-gram-panchyat.firebaseapp.com",
  databaseURL: "https://digital-e-gram-panchyat-default-rtdb.firebaseio.com",
  projectId: "digital-e-gram-panchyat",
  storageBucket: "digital-e-gram-panchyat.appspot.com",
  messagingSenderId: "229108103757",
  appId: "1:229108103757:web:d5e9787579dd4d0455ba04",
  measurementId: "G-RL5JZLY4GG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle service application
function applyForService(serviceType) {
  const application = {
    serviceType,
    date: new Date().toISOString(),
  };

  push(ref(database, "applications/"), application)
    .then(() => alert(`${serviceType} application submitted successfully!`))
    .catch((error) => console.error("Error submitting application: ", error));
}

// Event Listeners for "Apply Now" Buttons
document.getElementById("birthCertificateBtn").addEventListener("click", () => {
  applyForService("Birth Certificate");
});

document.getElementById("marriageCertificateBtn").addEventListener("click", () => {
  applyForService("Marriage Certificate");
});

// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const contactMessage = {
    name,
    message,
    date: new Date().toISOString(),
  };

  push(ref(database, "contacts/"), contactMessage)
    .then(() => {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => console.error("Error sending message: ", error));
});
