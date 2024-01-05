document.addEventListener('DOMContentLoaded', function() {
    if ('speechSynthesis' in window) {
        var synth = window.speechSynthesis;

        var convertButton = document.getElementById('convertButton');

        convertButton.addEventListener('click', function() {
            convertToSpeech();
        });

        function convertToSpeech() {
            var textInput = document.getElementById('textInput').value;

            var utterance = new SpeechSynthesisUtterance(textInput);
            synth.speak(utterance);
        }
    } else {
        alert('Sorry, your browser doesn\'t support this feature. Please try another browser.');
    }
});
