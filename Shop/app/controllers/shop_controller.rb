class ShopController < ApplicationController
  def index
    @products=Product.all.order('name')
  end

  def update_price_location
    discount=Location.find_by(:pincode=>params[:pincode]).discount
    product=Product.find(params[:product_id])
    original_price=product.price
    deduction=(discount/100.0)*original_price
    @new_price=original_price-deduction
    render :json => {:data => @new_price}
  end

  def locations
    @locations=Location.all.pluck(:pincode)
    render :json => {:data => @locations}
  end

  def update_price_input
    product=Product.find(params[:product_id])
    product.price=params[:price]
    product.save!
    render :json => {:data => params[:price]}
  end
end
