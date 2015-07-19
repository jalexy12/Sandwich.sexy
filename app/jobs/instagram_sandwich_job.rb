class InstagramSandwichJob < ActiveJob::Base
  def perform(comment, token)
  	puts "\n\n\n\n\n\n\n"
  	client = Instagram.client(:access_token => token)
  	tags = client.tag_search('sandwich', max_tag_id: Sandwich.last.ig_id, count: 50)
  	 for media_item in client.tag_recent_media(tags[0].name)
  	   Sandwich.create!(sandwich_image: media_item.images.standard_resolution.url, description: media_item.caption.text, ig_id: media_item.id)
  	 end
  end
end