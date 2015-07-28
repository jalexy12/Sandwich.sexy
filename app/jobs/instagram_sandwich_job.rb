class InstagramSandwichJob < ActiveJob::Base
  def perform(token)
  	client = Instagram.client(:access_token => token)
  	tags = client.tag_search('sandwich', count: 50)
  	 for media_item in client.tag_recent_media(tags[0].name)
  	 	CreateSandwichJob.perform_later(media_item.images.standard_resolution.url, media_item.caption.text, media_item.id, media_item.tags)
  	 end
  end
end