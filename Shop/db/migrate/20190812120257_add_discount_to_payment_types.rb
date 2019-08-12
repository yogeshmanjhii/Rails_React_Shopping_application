class AddDiscountToPaymentTypes < ActiveRecord::Migration
  def change
    add_column :payment_types, :discount, :integer
  end
end
