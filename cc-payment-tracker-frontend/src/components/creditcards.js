class CreditCards {
  constructor() {
    this.creditcards = [];
    this.adapter = new CreditCardsAdapter();
    this.fetchAndLoadCreditCards();
    this.initBindingsAndEventListeners();
  }

  initBindingsAndEventListeners() {
    this.creditCardsContainer = document.getElementById(
      "credit-cards-container"
    );
    this.newCreditCardName = document.getElementById("card_name");
    this.newCreditCardLastFour = document.getElementById("last_four");
    this.newCreditCardExpDate = document.getElementById("exp_date");
    this.newCreditCardBalance = document.getElementById("balance");
    this.creditCardsContainer.addEventListener(
      "submit",
      this.createNewTransaction.bind(this)
    );
    this.creditCardForm = document.getElementById("new-credit-card-form");
    this.creditCardForm.addEventListener(
      "submit",
      this.createCreditCard.bind(this)
    );
    this.creditCardsContainer.addEventListener("click", () => {
      if (event.target.name === "delete") {
        this.deleteCard(event);
      }
    });
  }

  createCreditCard(e) {
    e.preventDefault();
    const credit_card = {
      card_name: this.newCreditCardName.value,
      last_four: this.newCreditCardLastFour.value,
      exp_date: this.newCreditCardExpDate.value,
      balance: this.newCreditCardBalance.value,
    };

    this.adapter.createCreditCard(credit_card).then((cc) => {
      this.creditcards.push(new CreditCard(cc));
      this.render();
    });
  }

  fetchAndLoadCreditCards() {
    this.adapter
      .getCreditCards()
      .then((creditcards) => {
        creditcards.forEach((card) =>
          this.creditcards.push(new CreditCard(card))
        );
      })
      .then(() => {
        this.render();
      })
      .catch((error) => {
        alert(error.message + " Please check the status of your server");
      });
  }

  createNewTransaction(e) {
    e.preventDefault();
    const transaction = {
      amount: e.target.querySelector("#amount").value,
      date: e.target.querySelector("#date").value,
      credit_card_id: e.target.getAttribute("data-card-id"),
    };

    const ccId = e.target.getAttribute("data-card-id");
    const selectedCard = this.creditcards.find((card) => card.id == ccId);
    const newBalance = selectedCard.balance - transaction.amount;

    this.adapter.createTransaction(transaction).then((trans) => {
      selectedCard.transaction.push(trans);
      selectedCard.balance = newBalance;
      this.render();
    });
  }

  deleteCard(e) {
    const ccId = e.target.dataset.id;
    this.adapter.deletCreditCard(ccId);
    this.render();
  }

  render() {
    this.creditCardsContainer.innerHTML = this.creditcards
      .map((card) => card.renderAll())
      .join("");
  }
}
