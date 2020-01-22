class CreditCards {
    constructor() {
        this.creditcards = []
        this.adapter = new CreditCardsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadCreditCards()
    }

    fetchAndLoadCreditCards() {
        this.adapter.getCreditCards().then(data => {
            console.log(data)
        })
    }
}