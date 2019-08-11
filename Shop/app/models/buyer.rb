class Buyer < ActiveRecord::Base
    has_many :Products
    has_one :Location
end
