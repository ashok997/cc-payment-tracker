class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.float :amount
      t.date :date
      t.belongs_to :credit_card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
