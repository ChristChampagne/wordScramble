const words = [
    'baccon',
    'tree',
    'bridge',
    'jump',
    'guitar',
];

let word;
let wordContainer = document.getElementById('word');
let tries = document.getElementById('total-tries');
let mistakes = document.getElementById('mistakes-chars');
let charsContainer = document.getElementById('word-chars-container');

function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
function randomizeWord(arrayWord) {
    for (i = arrayWord.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayWord[i], arrayWord[j]] = [arrayWord[j], arrayWord[i]];
    }
    return arrayWord.toString();
}


function loadInterface(word) {
    arrayWord = word.split("");
    arrayChars = word.split("").length;
    for (i = 1; i <= arrayChars; i++) {
        charsContainer.innerHTML += '<input type="text" class="word-char" onInput="checkInput(' + i + ')" id="word-char-' + i + '" maxlength="2">';
    }
    wordContainer.innerHTML = randomizeWord(arrayWord).replace(/,/g, " ");
}
function startGame() {
    word = randomWord();
    loadInterface(word);
}
function checkInput(actualInput) {
    wArray = word.split("")

    if(actualInput == 1){
        document.getElementById('word-char-'+actualInput).value == wArray[0] ? console.log(true):console.log(false);
    }

    


    focusInput = actualInput + 1;
    document.getElementById('word-char-' + focusInput).focus();
}

startGame();


