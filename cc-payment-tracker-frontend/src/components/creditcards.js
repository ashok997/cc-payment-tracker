class CreditCards {
    constructor() {
        this.creditcards = []
        this.adapter = new CreditCardsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCreditCards()
    }

    initBindingsAndEventListeners() {
        this.creditCardsContainer = document.getElementById("credit-cards-container")
        this.creditCardForm = document.getElementById("new-credit-card-form")
        this.creditCardForm.addEventListener('submit', this.createCreditCard)
    }

    createCreditCard(e) {
        e.preventDefault()
        console.log('creating new card')
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
        this.creditCardsContainer.innerHTML = this.creditcards.map(card => card.renderLi()).join('')
    }
}