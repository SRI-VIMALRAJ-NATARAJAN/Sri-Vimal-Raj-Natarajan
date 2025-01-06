document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dictionary-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const word = document.getElementById('word').value.trim();
        const resultDiv = document.getElementById('result');

        if (!word) {
            resultDiv.innerHTML = '<p class="error">Please enter a word.</p>';
            return;
        }

        resultDiv.innerHTML = 'Searching...';

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

            if (!response.ok) {
                if (response.status === error) {
                    throw new Error('Word not found');
                } else {
                    throw new Error('API Error');
                }
            }

            const data = await response.json();
            const meanings = data[0].meanings;

            let definitionsHtml = `<p><strong>${word}:</strong></p>`;
            meanings.forEach((meaning, index) => {
                definitionsHtml += `<p>${index + 1}. (${meaning.partOfSpeech}) ${meaning.definitions[0].definition}</p>`;
            });

            resultDiv.innerHTML = definitionsHtml;
        } catch (error) {
            if (error.message === 'Word not found') {
                resultDiv.innerHTML = '<p class="error">Error: Word not found. Please try another word.</p>';
            } else {
                resultDiv.innerHTML = '<p class="error">Error: Unable to fetch definition. Please try again later.</p>';
            }
        }
    });
});