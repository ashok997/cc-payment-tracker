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
        return `<ul-data-cardId=${this.id}>
                    <li>${this.card_name}</li>
                    <li>${this.last_four}</li>
                    <li>${this.exp_date}</li>
                    <li>${this.balance}</li>
                </ul>
                `

    }


    renderCardTransactions() {
        let allTrans;
        this.transaction.forEach(function (trans) {
            //console.log(trans.amount + trans.date)
            allTrans += `<li> Paid: ${trans.amount}  Date : ${trans.date} </li>`
        })
        return allTrans
    }



    renderAll() {
        return ` ${this.renderCard()} ${this.renderCardTransactions()}
          
            <form id="new-transaction-form">
            <div class="input-field">
                <label for="amount">Amount </label>    
                <input type="number" step="0.01" name="amount" id="amount">
            </div>
            <div class="input-field">
                <label for="date">Date </label>    
                <input type="date" name="date" id="date">
            </div>
            <input type="submit" value="Record Transaction">
        </form>`
        //<button onclick="newTransaction()">Record Transaction</button>`
    }

}
