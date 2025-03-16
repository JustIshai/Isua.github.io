// Import Firebase Authentication
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

// Signup Function
function signupUser() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup Successful! Redirecting to Home...");
            window.location.href = "index.html"; // Redirect to homepage
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Login Function
function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "index.html"; // Redirect to homepage
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Check Login State & Redirect If Not Logged In
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in
        document.getElementById("userEmail").innerText = "Logged in as: " + user.email;
    } else {
        // Redirect to login if not on login or signup pages
        if (!window.location.pathname.includes("login.html") && !window.location.pathname.includes("signup.html")) {
            window.location.href = "login.html";
        }
    }
});

// Logout Function
function logoutUser() {
    signOut(auth).then(() => {
        window.location.href = "login.html";
    });
}

// Expose functions to be used in HTML
window.signupUser = signupUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
