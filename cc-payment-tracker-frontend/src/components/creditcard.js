class CreditCard {
    constructor(creditcardJSON) {
        this.id = creditcardJSON.id
        this.card_name = creditcardJSON.card_name
        this.last_four = creditcardJSON.last_four
        this.exp_date = creditcardJSON.exp_date
        this.balance = creditcardJSON.balance
        this.transaction = creditcardJSON.transactions
    }

    renderCard() {
        return `<ul>
                    <li>${this.card_name}</li>
                    <li>${this.last_four}</li>
                    <li>${this.exp_date}</li>
                    <li>${this.balance}</li>
                </ul>
                `
    }


    renderCardTransactions() {
        this.transaction.forEach(function (trans) {
            return `<li> Paid: ${trans.amount}  Date :${trans.date} </li>`
        })
    }

    rednerNewTransactionForm() {

    }


    renderAll() {
        return `
            ${this.renderCard()}
            ${this.renderCardTransactions()} 
            `
    }


    // add event listener for "Record Transaction button"
    //that event will render a form for a new transaction
    //the on submit event will take the card id from the button to make a post req. to a nested route
    //ie - if someone clicks the button with id of 4 we render a form that when submitted makes a post request
    //to creditcards/4/transaction/create <- transaction will be nested under credit cards in the router
    //fetch(`baseURL/${id from our button}/transactions/create`)
}
