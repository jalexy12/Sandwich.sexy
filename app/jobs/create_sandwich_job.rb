class CreateSandwichJob < ActiveJob::Base
  def perform(pic, description, ig_id)
  	Sandwich.create!(sandwich_image: pic, description: description, ig_id: ig_id)
  	ActiveRecord::Base.connection.close
  end
end