document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-recording');
    const stopButton = document.getElementById('stop-recording');
    const output = document.getElementById('voice-assistant-output');
    const historyList = document.getElementById('history-list');

    let recognition;

    if (!('webkitSpeechRecognition' in window)) {
        output.innerHTML = 'Your browser does not support speech recognition. Please use Chrome or Firefox.';
        startButton.disabled = true;
        stopButton.disabled = true;
        return;
    }

    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        output.innerHTML = '<p>Listening...</p>';
    };

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        output.innerHTML = `<p>You said: ${transcript}</p>`;
        addToHistory(transcript);
        processVoiceCommand(transcript);
    };

    recognition.onend = () => {
        output.innerHTML += '<p>Stopped listening.</p>';
    };

    startButton.addEventListener('click', () => {
        recognition.start();
    });

    stopButton.addEventListener('click', () => {
        recognition.stop();
    });

    function addToHistory(message) {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        historyList.appendChild(listItem);
    }

    function processVoiceCommand(command) {
        // Example command processing
        if (command.toLowerCase().includes('help')) {
            output.innerHTML += '<p>Here are some resources you might find helpful: [Link to Resources]</p>';
        } else if (command.toLowerCase().includes('mental health')) {
            output.innerHTML += '<p>For mental health resources, visit [Mental Health Resources Link]</p>';
        } else {
            output.innerHTML += '<p>I didn\'t understand that. Please try again.</p>';
        }
    }
});
