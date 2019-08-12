Buyer.create!([
  {name: "mohan", pincode: 570008},
  {name: "sohan", pincode: 560009},
  {name: "priyanka", pincode: 56007}
])
Location.create!([
  {pincode: 56006, discount: 55},
  {pincode: 56007, discount: 60},
  {pincode: 560008, discount: 45},
  {pincode: 560009, discount: 70},
  {pincode: 560010, discount: 80}
])
Offer.create!([
  {name: "Diwali", start: "2018-09-29 03:49:42", end: "2018-09-30 03:49:42", discount: nil},
  {name: "Holi", start: "2018-09-29 03:49:42", end: "2018-09-30 03:49:42", discount: nil},
  {name: "Rakhi", start: "2018-09-29 03:49:42", end: "2018-09-30 03:49:42", discount: nil}
])
PaymentType.create!([
  {name: "creditcard", discount: nil},
  {name: "internetbanking", discount: nil},
  {name: "cod", discount: nil}
])
Product.create!([
  {name: "Washing machine", price: 20000.0},
  {name: "Alexa", price: 4000.0},
  {name: "Cooler", price: 5000.0},
  {name: "Fridge", price: 10000.0},
  {name: "Monitor", price: 30000.0}
])
Seller.create!([
  {name: "amazon"},
  {name: "flipkart"},
  {name: "snapdeal"},
  {name: "paytm"}
])
