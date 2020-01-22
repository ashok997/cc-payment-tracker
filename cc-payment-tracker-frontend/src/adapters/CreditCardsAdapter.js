class CreditCardsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/credit_cards"
    }

    getCreditCards() {
        return fetch(this.baseUrl).then(res => res.json())
    }
    // getCreditCard(id) {
    //     return fetch(`${this.baseUrl}/${id}`).then(res => res.json()
    //     )
    // }
}