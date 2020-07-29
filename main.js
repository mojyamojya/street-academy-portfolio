const button = document.getElementById("button");
button.addEventListener("click", function() {
    const comment = document.getElementById("comment");
    if (comment.value != "") {
        const list = document.getElementById("list");
        const elem = document.createElement("li");
        elem.innerText = comment.value;
        list.appendChild(elem);
        comment.value = "";
    }
});