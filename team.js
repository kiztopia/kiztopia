var btn = document.getElementById("team"),
    root = document.querySelector(":root");

btn.addEventListener("click", (event) => {
    root.style.setProperty("--backgound","white");
    root.style.setProperty("--color","#000000");
})