// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Copy Script Function
function copyScript(scriptId) {
    let text = document.getElementById(scriptId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Script copied to clipboard!");
    });
}
