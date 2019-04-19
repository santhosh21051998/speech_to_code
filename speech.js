var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition()
let word = "";
// Keeps works while keep on speaking or Else wait for particular time
// recognition.interimResults = true    
// recognition.continuous = true

recognition.addEventListener('result', event => {
     word = event.results[0][0].transcript
    console.log(`Input `, word)
	if( !word.startsWith(`quit`))
        processing(word)
})

    // console.log(recognition.grammars)

// There's a small issue like thing that after one complete sentence is completed then it ends emitting a 'end' event
// To make it continuous


// say quit to stop the recognition
recognition.onend = () => {
     if( word != "quit" )
        recognition.start()              
}


recognition.start()
