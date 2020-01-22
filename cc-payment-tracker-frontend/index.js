document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/v1/credit_cards")
        .then(res => res.json())
        .then(data => console.log(data));
})