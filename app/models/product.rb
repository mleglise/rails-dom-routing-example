class Product < ActiveRecord::Base
  attr_accessible :description, :in_stock, :name, :price
end
