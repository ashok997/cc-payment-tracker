class CreditCards {
    constructor() {
        this.creditcards = []
        this.adapter = new CreditCardsAdapter()
        this.fetchAndLoadCreditCards()
    }

    fetchAndLoadCreditCards() {
        this.adapter.getCreditCards()
            .then(creditcards => {
                creditcards.forEach(card => this.creditcards.push(new CreditCard(card)))
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        const creditCardsContainer = document.getElementById("credit-cards-container")
        creditCardsContainer.innerHTML = this.creditcards.map(card => `<ul><li>${card.card_name}</li><li>${card.last_four}</li><li>${card.balance}</li></ul>`).join('')
    }
}