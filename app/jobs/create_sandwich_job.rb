class CreateSandwichJob < ActiveJob::Base
  def perform(pic, description, ig_id, tags)
  	Sandwich.create!(sandwich_image: pic, description: description, ig_id: ig_id, tags: tags)
  	ActiveRecord::Base.connection.close
  end
end