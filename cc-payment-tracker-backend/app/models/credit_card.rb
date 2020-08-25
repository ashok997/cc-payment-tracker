class CreditCard < ApplicationRecord
    has_many :transactions, dependent: :destroy

    def update_balance(amount)
        new_balance = self.balance - amount.to_f
        self.update(balance: new_balance)
    end

end
