document.addEventListener("DOMContentLoaded", function() {
    // Initialize chatbot
});

function sendMessage() {
    const input = document.getElementById("userInput").value;
    const output = document.getElementById("chatOutput");
    output.innerHTML += `<p>You: ${input}</p>`;
    // Simulate chatbot response
    output.innerHTML += `<p>Bot: This is a sample response.</p>`;
    document.getElementById("userInput").value = "";
}

function startVoiceRecognition() {
    // Implement voice recognition functionality
}
