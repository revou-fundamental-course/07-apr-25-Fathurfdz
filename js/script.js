// Greeting ke user
let name = prompt("Hi! What's your name?");
document.getElementById("greeting").innerText = `Hi ${name}, Welcome To Website`;

//Form Handling
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let userName = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("userMessage").value;

    const chatList =
    document.getElementById('chatList');
    const newMessage = 
    document.createElement('li');
    newMessage.textContent = `${gender} ${name} said: "${message}"`;
    chatList.appendChild(newMessage);

    //reset form

    document.getElementById('messageForm').reset();

    let output = `
        Name: ${genderr} ${userName}<br>
        Message: ${message}
    `;

document.getElementById("output").innerHTML = output;
});