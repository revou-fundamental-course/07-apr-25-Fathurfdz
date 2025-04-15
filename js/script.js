// Greeting ke user
let name = prompt("Hi! What's your name?");
document.getElementById("greeting").innerText = `Hi ${name}, Welcome To Website`;

//Form Handling
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let userName = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("userMessage").value;

    let output = `
        Name: ${genderr} ${userName}<br>
        Message: ${message}
    `;

document.getElementById("output").innerHTML = output;
});