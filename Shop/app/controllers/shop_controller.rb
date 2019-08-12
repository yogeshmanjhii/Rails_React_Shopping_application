class ShopController < ApplicationController
  def index
    @products=Product.all
  end

  def update_price(original_price,pincode)
    discount=Location.find_by(:pincode=>pincode).discount
    @new_price=original_price-((discount/100)*original_price)
  end
end
