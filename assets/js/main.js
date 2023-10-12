// const words = [
//     'baccon',
//     'tree',
//     'bridge',
//     'jump',
//     'guitar',
//     'treasure',
//     'tank',
//     'pinacle',
//     'boxer'
// ];

// let word;
// let ArrMistakes = [];
// let ArrCorrect = [];
// let wordContainer = document.getElementById('word');
// let tries = document.getElementById('total-tries');
// let mistakes = document.getElementById('mistakes-chars');
// let charsContainer = document.getElementById('word-chars-container');
// let btnRandom = document.getElementById('btn-random');
// let btnReset = document.getElementById('btn-reset');
// let mistakesBalls = document.getElementsByName('mistake-ball')

// function RandomWord() {
//     return words[Math.floor(Math.random() * words.length)];
// }
// function RandomizeWord(arrayWord) {
//     for (i = arrayWord.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arrayWord[i], arrayWord[j]] = [arrayWord[j], arrayWord[i]];
//     }
//     return arrayWord.toString();
// }
// function LoadInterface(word) {
//     arrayWord = word.split("");
//     arrayChars = word.split("").length;
//     for (i = 1; i <= arrayChars; i++) {
//         charsContainer.innerHTML += '<input type="text" class="word-char" onkeyup="CheckInput(' + i + ')" id="word-char-' + i + '" maxlength="1">';
//     }
//     wordContainer.innerHTML = RandomizeWord(arrayWord).replace(/,/g, " ");
// }
// function CheckInput(actualInput) {



//     if (ArrMistakes.length >= 5) {
//         StartGame()
//     } else {

//         wArray = word.split("")
//         actualValue = document.getElementById('word-char-' + actualInput).value;

//         if (actualValue == "") {

//         } else {
//             if (actualValue == wArray[actualInput - 1]) {
//                 ArrCorrect.push(actualValue);
//             } else {
//                 ArrMistakes.push(actualValue)
//                 mistakes.innerHTML = ArrMistakes;
//                 tries.innerHTML = ArrMistakes.length;
//             }


//             focusInput = actualInput + 1;
//             if (actualInput == wArray.length) {
//                 focusInput = 1;
//                 document.getElementById('word-char-' + focusInput).focus();
//             } else {
//                 focusInput = actualInput + 1;
//                 document.getElementById('word-char-' + focusInput).focus();
//             }
//             if (ArrCorrect.toString() == wArray.toString()) {
//                 alert('🎉 Success');
//                 StartGame()
//             } else {
//                 console.log('No :(')
//             }


//             setErrors()

//         }
//     }
// }

// function setErrors() {
//     for (i = 1; i < ArrMistakes.length+1; i++) {
//         document.getElementById('ball-'+i).style.backgroundColor = "#7429C5";
//     }
// }
// function Clear() {
//     word = ""
//     charsContainer.innerHTML = "";
//     mistakes.innerHTML = "";
//     tries.innerHTML = "0";
//     ArrCorrect = []
//     ArrMistakes = [];

//     for (i = 1; i <= 5; i++) {
//         document.getElementById('ball-'+i).style.backgroundColor = "white";
//     }
    
// }
// function StartGame() {
//     Clear();
//     word = RandomWord();
//     LoadInterface(word);
// }
// btnRandom.addEventListener('click', () => {
//     StartGame();
// })
// btnReset.addEventListener('click', () => {
//     ArrMistakes = [];
//     mistakes.innerHTML = ArrMistakes;
//     tries.innerHTML = ArrMistakes.length;

//     for (i = 1; i <= 5; i++) {
//         document.getElementById('ball-'+i).style.backgroundColor = "white";
//     }
// })

// StartGame();


