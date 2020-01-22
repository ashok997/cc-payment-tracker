class CreditCard {
    constructor(creditcardJSON) {
        this.id = creditcardJSON.id
        this.card_name = creditcardJSON.card_name
        this.last_four = creditcardJSON.last_four
        this.exp_date = creditcardJSON.exp_date
        this.balance = creditcardJSON.balance
    }
}