class CreditCardsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/credit_cards"
    }

    getCreditCards() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}