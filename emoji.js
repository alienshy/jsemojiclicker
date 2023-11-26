let selectedEmojiIndex = 1;
const selectEmoji = (index) => {
    selectedEmojiIndex = index;
    const emojiElements = document.querySelectorAll('.wt');
    const vciElement = document.getElementById('vci');
    const selectedEmojiDisplay = document.getElementById('selectedEmoji');
    const feedbackContainer = document.getElementById('feedbackContainer');
    const sendButton = document.getElementById('send');

    emojiElements.forEach((element, i) => {
        element.style.display = i + 1 === selectedEmojiIndex ? 'block' : 'none';
    });
    const colors = ['red', 'blue', 'green'];
    vciElement.style.backgroundColor = colors[selectedEmojiIndex - 1];
    selectedEmojiDisplay.innerHTML = ` ${emojiElements[selectedEmojiIndex - 1].innerHTML}`;
    const feedbackTexts = ['Unhappy', 'Neutral', 'Satisfied'];
    feedbackContainer.innerHTML = `<h2>${feedbackTexts[selectedEmojiIndex - 1]}</h2>`;
    sendButton.innerText = 'Thanks for feedback';
};
