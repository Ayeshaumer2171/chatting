    // Conversation topics and responses
    const conversationTopics = {
      greeting: ['Hi there!', 'Hello!', 'Hey! How can I assist you?'],
      weather: ['The weather is sunny today.', 'It\'s raining outside.'],
      inquiry: [
        'How can I help you?',
        'What can I assist you with?',
        'Do you have any specific questions?'
      ],
      question1: ['I am fine'],
      question2: ['nothing special'],
      question3: ['awesome'],

  bye1:['ok, will talk later'],
  bye2:['good bye'],
    };

    function generateResponse(userMessage) {
      const lowercaseMessage = userMessage.toLowerCase();

      if (lowercaseMessage.includes('hi') || lowercaseMessage.includes('hello')) {
        displayMessage(getRandomResponse('greeting'), 'bot');
      } else if (lowercaseMessage.includes('weather')) {
        displayMessage(getRandomResponse('weather'), 'bot');
      } else if (lowercaseMessage.includes('help')) {
        displayMessage(getRandomResponse('inquiry'), 'bot');
      } else if (lowercaseMessage.includes('How do you do?')) {
        displayMessage(getRandomResponse('question1'), 'bot');
      } else if (lowercaseMessage.includes('what are you doing?')) {
        displayMessage(getRandomResponse('question2'), 'bot');
      } else if (lowercaseMessage.includes('how is your day?')) {
        displayMessage(getRandomResponse('question3'), 'bot');
      }else if (lowercaseMessage.includes('see you')) {
        displayMessage(getRandomResponse('bye1'), 'bot');
      } else if (lowercaseMessage.includes('bye')) {
        displayMessage(getRandomResponse('bye2'), 'bot');
      }else {
        displayMessage('I\'m sorry, I don\'t have the answer to that question.', 'bot');
      }
    }

    function getRandomResponse(topic) {
      const responses = conversationTopics[topic];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }

    // Get DOM elements
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    // Event listener for send button click
    sendBtn.addEventListener('click', handleUserInput);

    // Event listener for user pressing enter key
    userInput.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        handleUserInput();
      }
    });

    function handleUserInput() {
      const userMessage = userInput.value.trim();

      if (userMessage !== '') {
        displayMessage(userMessage, 'user');
        userInput.value = '';
        setTimeout(() => generateResponse(userMessage), 500); // Simulate delay before generating response
      }
    }

    function displayMessage(message, sender) {
  const messageWrapper = document.createElement('div');
  messageWrapper.classList.add('message', sender);
  
  // Create a timestamp element
  const timestamp = document.createElement('span');
  timestamp.classList.add('timestamp');
  const date = new Date();
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  timestamp.textContent = time;
  
  // Create a message content element
  const content = document.createElement('div');
  content.classList.add('message-content');
  content.textContent = message;
  
  // Append timestamp and content to the message wrapper
  messageWrapper.appendChild(timestamp);
  messageWrapper.appendChild(content);
  
  chatMessages.appendChild(messageWrapper);

  // Scroll to the bottom of the chat window
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
