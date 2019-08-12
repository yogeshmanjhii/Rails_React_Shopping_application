class AddDiscountToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :discount, :integer
  end
end
