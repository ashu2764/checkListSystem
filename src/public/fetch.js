const loader = document.getElementById('spinner');
const resultsDiv = document.getElementById('results');
const loadButton = document.getElementById('loadResults');

loadButton.addEventListener('click', () => {
    loader.style.display = 'flex';
    resultsDiv.innerHTML = '';

    fetch('http://localhost:3001/api/evaluate')
        .then((response) => {
            loader.style.display = 'none';
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            data.results.forEach((result) => {
                const div = document.createElement('div');
                div.className = `rule ${result.passed ? 'passed' : 'failed'}`;
                div.textContent = `${result.name}: ${result.passed ? 'Passed' : 'Failed'}`;
                resultsDiv.appendChild(div);
            });
        })
        .catch((error) => {
            loader.style.display = 'none';
            const errorDiv = document.createElement('div');
            errorDiv.textContent = `Error fetching results: ${error.message}`;
            resultsDiv.appendChild(errorDiv);
        });
});
