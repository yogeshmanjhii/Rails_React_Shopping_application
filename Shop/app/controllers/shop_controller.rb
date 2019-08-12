class ShopController < ApplicationController
  def index
    @products=Product.all.order('name')
  end

  def update_price
    discount=Location.find_by(:pincode=>params[:pincode]).discount
    product=Product.find(params[:product_id])
    original_price=product.price
    deduction=(discount/100.0)*original_price
    puts original_price
    puts deduction
    @new_price=original_price-deduction
    render :json => {:data => @new_price}
  end

  def locations
    @locations=Location.all.pluck(:pincode)
    render :json => {:data => @locations}
  end
end
