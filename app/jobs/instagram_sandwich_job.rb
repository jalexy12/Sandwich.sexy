class InstagramSandwichJob < ActiveJob::Base
  def perform(last_sandwich, token)
  	client = Instagram.client(:access_token => token)
  	tags = client.tag_search('sandwich', max_tag_id: last_sandwich, count: 50)
  	 for media_item in client.tag_recent_media(tags[0].name)
  	   Sandwich.create!(sandwich_image: media_item.images.standard_resolution.url, description: media_item.caption.text, ig_id: media_item.id)
  	 end
  	ActiveRecord::Base.connection.close
  end
end