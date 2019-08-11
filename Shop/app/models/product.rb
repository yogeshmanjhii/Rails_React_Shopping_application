class Product < ActiveRecord::Base
    belongs_to :Seller
    belongs_to :Buyer 
end
