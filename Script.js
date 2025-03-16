function postStatus() {
    let postContent = document.getElementById("newPost").value;
    if (postContent.trim() !== "") {
        let post = document.createElement("div");
        post.className = "post";
        post.innerHTML = `<p>${postContent}</p>`;
        document.getElementById("feed").prepend(post);
        document.getElementById("newPost").value = "";
    }
}
