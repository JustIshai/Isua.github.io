// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Initialize ACE Editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/lua");
editor.setOptions({ fontSize: "14px" });

// Copy Script Function
function copyCode() {
    let scriptText = editor.getValue();
    navigator.clipboard.writeText(scriptText).then(() => {
        alert("Script copied to clipboard!");
    });
}

// Download Script Function
function downloadScript() {
    let scriptText = editor.getValue();
    let blob = new Blob([scriptText], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "roblox_script.lua";
    link.click();
}

// Run Lua Script Function (Using Fengari)
function runLua() {
    let scriptText = editor.getValue();
    let outputBox = document.getElementById("output");
    try {
        let result = fengari.load(scriptText)(); // Execute Lua
        outputBox.innerText = "Lua Output:\n" + result;
    } catch (error) {
        outputBox.innerText = "Error: " + error;
    }
}
