class CreditCards {
    constructor() {
        this.creditcards = []
        this.adapter = new CreditCardsAdapter()
        this.fetchAndLoadCreditCards()
    }

    fetchAndLoadCreditCards() {
        this.adapter.getCreditCards().then(data => {
            data.forEach(card => this.creditcards.push(card))
        })
            .then(() => {
                this.render()
            })
    }

    render() {
        const creditCardsContainer = document.getElementById("credit-cards-container")
        creditCardsContainer.innerHTML = 'my cards here'
        console.log("cards availabe", this.creditcards)
    }
}