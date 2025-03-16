const auth = firebase.auth();

// Signup User
function signupUser() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Signup Successful! Redirecting to Login...");
            window.location.href = "login.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Login User
function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Check if User is Logged In
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("userEmail").innerText = "Logged in as: " + user.email;
    } else {
        if (window.location.pathname !== "/login.html" && window.location.pathname !== "/signup.html") {
            window.location.href = "login.html";
        }
    }
});

// Logout User
function logoutUser() {
    firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
    });
}
