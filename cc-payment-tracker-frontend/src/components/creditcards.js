class CreditCards {
    constructor() {
        this.creditcards = []
        this.adapter = new CreditCardsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCreditCards()
    }

    initBindingsAndEventListeners() {
        this.creditCardsContainer = document.getElementById("credit-cards-container")
        this.newCreditCardName = document.getElementById("card_name")
        this.newCreditCardLastFour = document.getElementById("last_four")
        this.newCreditCardExpDate = document.getElementById("exp_date")
        this.newCreditCardBalance = document.getElementById("balance")
        this.creditCardForm = document.getElementById("new-credit-card-form")
        this.creditCardForm.addEventListener('submit', this.createCreditCard.bind(this))
    }

    createCreditCard(e) {
        e.preventDefault()
        const credit_card = {
            card_name: this.newCreditCardName.value,
            last_four: this.newCreditCardLastFour.value,
            exp_date: this.newCreditCardExpDate.value,
            balance: this.newCreditCardBalance.value
        }

        this.adapter.createCreditCard(credit_card).then(credit_card => {
            console.log(credit_card)
            // this.creditcards.push(new CreditCard(cc))
            // this.render
        })
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