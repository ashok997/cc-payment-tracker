class CreditCard < ApplicationRecord
    has_many :transactions
    accepts_nested_attributes_for :transactions

    def update_balance(amount)
        new_balance = self.balance - amount.to_f
        self.update(balance: new_balance)
    end

end
