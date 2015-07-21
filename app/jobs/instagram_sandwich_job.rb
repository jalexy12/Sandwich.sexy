class InstagramSandwichJob < ActiveJob::Base
  def perform(last_sandwich, token)
  	client = Instagram.client(:access_token => token)
  	tags = client.tag_search('sandwich', min_tag_id: last_sandwich, count: 50)
  	 for media_item in client.tag_recent_media(tags[0].name)
  	 	CreateSandwichJob.perform_later(media_item.images.standard_resolution.url, media_item.caption.text, media_item.id)
  	 end
  end
end