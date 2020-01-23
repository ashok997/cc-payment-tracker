class CreditCardsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/credit_cards"
    }

    getCreditCards() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createCreditCard(credit_card) {
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ credit_card }),
        })
            .then(res => res.json())
    }

}