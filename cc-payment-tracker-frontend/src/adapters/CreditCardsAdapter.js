class CreditCardsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/"
    }

    getCreditCards() {
        return fetch(this.baseUrl + 'credit_cards').then(res => res.json())
    }

    createCreditCard(credit_card) {
        return fetch(this.baseUrl + 'credit_cards', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ credit_card }),
        })
            .then(res => res.json())
    }


    createTransaction(transaction) {
        return fetch(this.baseUrl + 'transactions', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ transaction }),
        })
            .then(res => res.json())
    }

    // deletCreditCard(credit_card_id) {
    //     return fetch(this.baseUrl + 'credit_cards', {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({ credit_card_id }),
    //     })
    //         .then(res => res.json())

    // }

}