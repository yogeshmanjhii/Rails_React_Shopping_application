class CreateProductSolds < ActiveRecord::Migration
  def change
    create_table :product_solds do |t|
      t.integer :seller_id
      t.integer :buyer_id
      t.integer :product_id

      t.timestamps null: false
    end
  end
end
