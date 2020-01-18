class CreateCreditCards < ActiveRecord::Migration[6.0]
  def change
    create_table :credit_cards do |t|
      t.string :card_name
      t.integer :last_four
      t.string :exp_date
      t.float :balance
      t.timestamps
    end
  end
end
