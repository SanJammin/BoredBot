const getIdeaBtn = document.getElementById("get-idea-btn");

getIdeaBtn.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("random-idea").textContent = data.activity;
        });
});