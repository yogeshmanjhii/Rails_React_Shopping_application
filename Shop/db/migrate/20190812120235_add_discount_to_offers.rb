class AddDiscountToOffers < ActiveRecord::Migration
  def change
    add_column :offers, :discount, :integer
  end
end
