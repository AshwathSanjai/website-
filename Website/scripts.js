
    document.getElementById('inputField').addEventListener('input', function() {
        var inputText = document.getElementById('inputField').value;
        var questionDisplay = document.getElementById('questionDisplay');
        questionDisplay.innerHTML = '<h1 class="question">Question: ' + inputText + '</h1>';
    });
