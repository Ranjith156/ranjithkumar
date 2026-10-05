const button = document.getElementById("messageButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "JavaScript is working. Git practice can begin!";
});
