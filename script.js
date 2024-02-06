// Fetch credit score from a Python endpoint (details in step 2)
function fetchCreditScore() {
    const name = document.getElementById("name").value;
    const socialSecurityNumber = document.getElementById("social-security-number").value;

    fetch('/api/credit_score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, socialSecurityNumber })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("score-result").innerHTML = `Your credit score is: ${data.score}`;
    })
    .catch(error => console.error(error));
}

document.getElementById("check-score").addEventListener("click", fetchCreditScore);
