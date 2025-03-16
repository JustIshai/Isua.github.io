// Import Firebase (Required)
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const auth = getAuth();

// Signup Function
function signupUser() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup Successful! Redirecting to Login...");
            window.location.href = "login.html";
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

// Check Login State
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("userEmail").innerText = "Logged in as: " + user.email;
    } else {
        if (window.location.pathname !== "/login.html" && window.location.pathname !== "/signup.html") {
            window.location.href = "login.html"; // Redirect to login page if not logged in
        }
    }
});

// Logout Function
function logoutUser() {
    signOut(auth).then(() => {
        window.location.href = "login.html";
    });
}
