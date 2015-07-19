class InstagramSandwichJob < ActiveJob::Base
  def perform(comment, token)
  	puts "\n\n\n\n\n\n\n"
  	client = Instagram.client(:access_token => token)
  	tags = client.tag_search('sandwich')
  	 for media_item in client.tag_recent_media(tags[0].name)
  	   ap media_item
  	   html << "<img src='#{media_item.images.thumbnail.url}'>"
  	 end
  	puts comment
  end
end