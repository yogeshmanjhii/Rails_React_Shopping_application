class ProductSold < ActiveRecord::Base
    belongs_to :Seller 
    belongs_to :Buyer
    belong_to :Product
end
